# Microsoft.IO.RecyclableMemoryStream [![NuGet Version](https://img.shields.io/nuget/v/Microsoft.IO.RecyclableMemoryStream.svg?style=flat)](https://www.nuget.org/packages/Microsoft.IO.RecyclableMemoryStream/) 

A library to provide pooling for .NET `MemoryStream` objects to improve application performance, especially in the area of garbage collection.

## Get Started

Install the latest version from [NuGet](https://www.nuget.org/packages/Microsoft.IO.RecyclableMemoryStream/)

```
Install-Package Microsoft.IO.RecyclableMemoryStream
```

## Purpose

`Microsoft.IO.RecyclableMemoryStream` is a `MemoryStream` replacement that offers superior behavior for performance-critical systems. In particular it is optimized to do the following:

* Eliminate Large Object Heap allocations by using pooled buffers
* Incur far fewer gen 2 GCs, and spend far less time paused due to GC
* Avoid memory leaks by having a bounded pool size
* Avoid memory fragmentation
* Allow for multiple ways to read and write data that will avoid extraneous allocations
* Provide excellent debuggability and logging
* Provide metrics for performance tracking

## Features

- The semantics are close to the original `System.IO.MemoryStream` implementation, and is intended to be a drop-in replacement as much as possible.
- Rather than pooling the streams themselves, the underlying buffers are pooled. This allows you to use the simple `Dispose` pattern to release the buffers back to the pool, as well as detect invalid usage patterns (such as reusing a stream after it’s been disposed).
- `RecyclableMemoryStreamManager` is thread-safe (streams themselves are inherently NOT thread safe).
- Implementation of `IBufferWrite<byte>`.
- Support for enormous streams through abstracted buffer chaining.
- Extensive support for newer memory-related types like `Span<byte>`, `ReadOnlySpan<byte>`, `ReadOnlySequence<byte>`, and `Memory<byte>`.
- Each stream can be tagged with an identifying string that is used in logging - helpful when finding bugs and memory leaks relating to incorrect pool use.
- Debug features like recording the call stack of the stream allocation to track down pool leaks
- Maximum free pool size to handle spikes in usage without using too much memory.
- Flexible and adjustable limits to the pooling algorithm.
- Metrics tracking and events so that you can see the impact on the system.

## Build Targets

At least MSBuild 16.8 is required to build the code. You get this with Visual Studio 2019.

Supported build targets in v2.0 are: net462, netstandard2.0, netstandard2.1, and netcoreapp2.1 (net40, net45, net46 and netstandard1.4 were deprecated). Starting with v2.1, net5.0 target has been added.

## Testing

A minimum of .NET 5.0 is required for executing the unit tests. Requirements:
- NUnit test adapter (VS Extension)
- Be sure to set the default processor architecture for tests to x64 (or the giant allocation test will fail)

## Change Log

Read the change log [here](https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/blob/master/CHANGES.md).

## How It Works

`RecyclableMemoryStream` improves GC performance by ensuring that the larger buffers used for the streams are put into the gen 2 heap and stay there forever. This should cause full collections to happen less frequently. If you pick buffer sizes above 85,000 bytes, then you will ensure these are placed on the large object heap, which is touched even less frequently by the garbage collector.

The `RecyclableMemoryStreamManager` class maintains two separate pools of objects:

1. **Small Pool** - Holds small buffers (of configurable size). Used by default for all normal read/write operations. Multiple small buffers are chained together in the `RecyclableMemoryStream` class and abstracted into a single stream.
2. **Large Pool** - Holds large buffers, which are only used when you must have a single, contiguous buffer, such as when you plan to call `GetBuffer()`. It is possible to create streams larger than is possible to be represented by a single buffer because of .NET's array size limits.

A `RecyclableMemoryStream` starts out by using a small buffer, chaining additional ones as the stream capacity grows. Should you ever call `GetBuffer()` and the length is greater than a single small buffer's capacity, then the small buffers are converted to a single large buffer. You can also request a stream with an initial capacity; if that capacity is larger than the small pool block size, multiple blocks will be chained unless you call an overload with `asContiguousBuffer` set to true, in which case a single large buffer will be assigned from the start. If you request a capacity larger than the maximum poolable size, you will still get a stream back, but the buffers will not be pooled. (Note: This is not referring to the maximum array size. You can limit the poolable buffer sizes in `RecyclableMemoryStreamManager`)

There are two versions of the large pool:

* **Linear** (default) - You specify a multiple and a maximum size, and an array of buffers, from size (1 * multiple), (2 * multiple), (3 * multiple), ... maximum is created. For example, if you specify a multiple of 1 MB and maximum size of 8 MB, then you will have an array of length 8. The first slot will contain 1 MB buffers, the second slot 2 MB buffers, and so on.
* **Exponential** - Instead of linearly growing, the buffers double in size for each slot. For example, if you specify a multiple of 256KB, and a maximum size of 8 MB, you will have an array of length 6, the slots containing buffers of size 256KB, 512KB, 1MB, 2MB, 4MB, and 8MB.

![Pool Image Comparison](https://raw.githubusercontent.com/microsoft/Microsoft.IO.RecyclableMemoryStream/88e0deeabc11d7da4038329de5093c5a8d4c73be/poolcomparison.png)

Which one should you use? That depends on your usage pattern. If you have an unpredictable large buffer size, perhaps the linear one will be more suitable. If you know that a longer stream length is unlikely, but you may have a lot of streams in the smaller size, picking the exponential version could lead to less overall memory usage (which was the reason this form was added).

Buffers are created, on demand, the first time they are requested and nothing suitable already exists in the pool. After use, these buffers will be returned to the pool through the `RecyclableMemoryStream`'s `Dispose` method. When that return happens, the `RecyclableMemoryStreamManager` will use the properties `MaximumFreeSmallPoolBytes` and `MaximumFreeLargePoolBytes` to determine whether to put those buffers back in the pool, or let them go (and thus be garbage collected). It is through these properties that you determine how large your pool can grow. If you set these to 0, you can have unbounded pool growth, which is essentially indistinguishable from a memory leak. For every application, you must determine through analysis and experimentation the appropriate balance between pool size and garbage collection.

If you forget to call a stream's `Dispose` method, this could cause a memory leak. To help you prevent this, each stream has a finalizer that will be called by the CLR once there are no more references to the stream. This finalizer will raise an event or log a message about the leaked stream.

Note that for performance reasons, the buffers are not ever pre-initialized or zeroed-out. It is your responsibility to ensure their contents are valid and safe to use buffer recycling.

## Usage

You can jump right in with no fuss by just doing a simple replacement of `MemoryStream` with something like this:

```csharp
class Program
{
    private static readonly RecyclableMemoryStreamManager manager = new RecyclableMemoryStreamManager();

    static void Main(string[] args)
    {
        var sourceBuffer = new byte[] { 0, 1, 2, 3, 4, 5, 6, 7 };
        
        using (var stream = manager.GetStream())
        {
            stream.Write(sourceBuffer, 0, sourceBuffer.Length);
        }
    }
}
```

Note that `RecyclableMemoryStreamManager` should be declared once and it will live for the entire process lifetime. It is perfectly fine to use multiple pools if you desire, especially if you want to configure them differently.

To facilitate easier debugging, you can optionally provide a string `tag`, which serves as a human-readable identifier for the stream. This can be something like “ClassName.MethodName”, but it can be whatever you want. Each stream also has a GUID to provide absolute identity if needed, but the `tag` is usually sufficient.

```csharp
using (var stream = manager.GetStream("Program.Main"))
{
    stream.Write(sourceBuffer, 0, sourceBuffer.Length);
}
```

You can also provide an existing buffer. It’s important to note that the data from this buffer will be *copied* into a buffer owned by the pool:

```csharp
var stream = manager.GetStream("Program.Main", sourceBuffer, 
                                    0, sourceBuffer.Length);
```

You can also change the parameters of the pool itself:

```csharp
int blockSize = 1024;
int largeBufferMultiple = 1024 * 1024;
int maxBufferSize = 16 * largeBufferMultiple;

var manager = new RecyclableMemoryStreamManager(blockSize, 
                                                largeBufferMultiple, 
                                                maxBufferSize);

manager.GenerateCallStacks = true;
manager.AggressiveBufferReturn = true;
manager.MaximumFreeLargePoolBytes = maxBufferSize * 4;
manager.MaximumFreeSmallPoolBytes = 100 * blockSize;
```

### Usage Guidelines

While this library strives to be very general and not impose too many restraints on how you use it, its purpose is to reduce the cost of garbage collections incurred by frequent large allocations. Thus, there are some general guidelines for usage that may be useful to you:

1. Set the `blockSize`, `largeBufferMultiple`, `maxBufferSize`, `MaximumFreeLargePoolBytes` and `MaximumFreeSmallPoolBytes` properties to reasonable values for your application and resource requirements. **Important!**: If you do not set `MaximumFreeLargePoolBytes` and `MaximumFreeSmallPoolBytes` there is the possibility for unbounded memory growth!
2. Always dispose of each stream exactly once.
3. Most applications should not call `ToArray` and should avoid calling `GetBuffer` if possible. Instead, use `GetReadOnlySequence` for reading and the `IBufferWriter` methods `GetSpan`\\`GetMemory` with `Advance` for writing. There are also miscellaneous `CopyTo` and `WriteTo` methods that may be convenient. The point is to avoid creating unnecessary GC pressure where possible.
4. Experiment to find the appropriate settings for your scenario.

A working knowledge of the garbage collector is a very good idea before you try to optimize your scenario with this library. An article such as [Garbage Collection](https://docs.microsoft.com/dotnet/standard/garbage-collection/), or a book like *Writing High-Performance .NET Code* will help you understand the design principles of this library.

When configuring the options, consider questions such as these:

* What is the distribution of stream lengths that I expect?
* How many streams will be in use at one time?
* Is `GetBuffer` called a lot? How much use of large pool buffers will I need?
* How resilient to spikes in activity do I need to be? i.e., How many free bytes should I keep around in case?
* What are my physical memory limitations on the machines where this will be used?

### IBufferWriter\<byte\>: GetMemory, GetSpan, and Advance ###

`RecyclableMemoryStream` implements [IBufferWriter<byte>](https://docs.microsoft.com/en-us/dotnet/api/system.buffers.ibufferwriter-1?view=netstandard-2.1) so it can be used for zero-copy encoding and formatting. You can also directly modify the stream contents using `GetSpan`\\`GetMemory` with `Advance`. For instance, writing a `BigInteger` to a stream:

```csharp
var bigInt = BigInteger.Parse("123456789013374299100987654321");

using (var stream = manager.GetStream() as RecyclableMemoryStream)
{
    Span<byte> buffer = stream.GetSpan(bigInt.GetByteCount());
    bigInt.TryWriteBytes(buffer, out int bytesWritten);
    stream.Advance(bytesWritten);
}
```

### GetReadOnlySequence ###

`GetReadOnlySequence` returns a [ReadOnlySequence<byte>](https://docs.microsoft.com/en-us/dotnet/api/system.buffers.readonlysequence-1?view=netstandard-2.1) that can be used for zero-copy stream processing. For example, hashing the contents of a stream: 

```csharp
using (var stream = manager.GetStream() as RecyclableMemoryStream)
using (var sha256Hasher = IncrementalHash.CreateHash(HashAlgorithmName.SHA256))
{
    foreach (var memory in stream.GetReadOnlySequence())
    {
        sha256Hasher.AppendData(memory.Span);
    }
    
    sha256Hasher.GetHashAndReset();
}
```

### GetBuffer and ToArray ###

`RecyclableMemoryStream` is designed to operate primarily on chained small pool blocks. To access these blocks use `GetReadOnlySequence` for reading and `GetSpan`\\`GetMemory` with `Advance` for writing. However, if you still want a contiguous buffer for the whole stream there are two APIs which `RecyclableMemoryStream` overrides from its parent `MemoryStream` class:

* `GetBuffer` - If possible, a reference to the single block will be returned to the caller. If multiple blocks are in use, they will be converted into a single large pool buffer and the data copied into it. In all cases, the caller must use the `Length` property to determine how much usable data is actually in the returned buffer. If the stream length is longer than the maximum allowable stream size, a single buffer will still be returned, but it will not be pooled. If no possible contiguous buffer can be returned due to .NET array-size limitations, then an `OutOfMemoryException` will be thrown.
* `ToArray` - It looks similar to `GetBuffer` on the surface, but is actually significantly different. In `ToArray` the data is *always* copied into a new array that is exactly the right length for the full contents of the stream. This new buffer is never pooled. Users of this library should consider any call to `ToArray` to be a bug, as it wipes out many of the benefits of `RecyclableMemoryStream` completely. However, the method is included for completeness, especially if you are calling other APIs that only take a `byte` array with no length parameter. An event is logged on all `ToArray` calls.

You can optionally configure the `RecyclableStreamManager.ThrowExceptionOnToArray` property to disallow calls to `RecyclableMemoryStream.ToArray`. If this value is set to true, then any calls to `ToArray` will result in a `NotSupportedException`.

## Metrics and Hooks

### ETW Events ###

`RecyclableMemoryStream` has an `EventSource` provider that produces a number of events for tracking behavior and performance. You can use events to debug leaks or subtle problems with pooled stream usage.

| Name | Level | Description |
| -----|-------|-------------|
| MemoryStreamCreated | Verbose | Logged every time a stream object is allocated. Fields: `guid`, `tag`, `requestedSize`, `actualSize`. |
| MemoryStreamDisposed | Verbose | Logged every time a stream object is disposed. Fields: `guid`, `tag`, `allocationStack`, `disposeStack`. |
| MemoryStreamDoubleDispose | Critical | Logged if a stream is disposed more than once. This indicates a logic error by the user of the stream. Dispose should happen exactly once per stream to avoid resource usage bugs. Fields: `guid`, `tag`, `allocationStack`, `disposeStack1`, `disposeStack2`. |
| MemoryStreamFinalized | Error | Logged if a stream has gone out of scope without being disposed. This indicates a resource leak. Fields: `guid`, `tag`, `allocationStack`.|
| MemoryStreamToArray | Verbose | Logged whenever `ToArray` is called. This indicates a potential problem, as calling `ToArray` goes against the concepts of good memory practice which `RecyclableMemoryStream` is trying to solve. Fields: `guid`, `tag`, `stack`, `size`.|
| MemoryStreamManagerInitialized| Informational | Logged when the `RecyclableMemoryStreamManager` is initialized. Fields: `blockSize`, `largeBufferMultiple`, `maximumBufferSize`.|
| MemoryStreamNewBlockCreated | Verbose | Logged whenever a block for the small pool is created. Fields: `smallPoolInUseBytes`.|
| MemoryStreamNewLargeBufferCreated | Verbose | Logged whenever a large buffer is allocated. Fields: `requiredSize`, `largePoolInUseBytes`.|
| MemoryStreamNonPooledLargeBufferCreated | Verbose | Logged whenever a buffer is requested that is larger than the maximum pooled size. The buffer is still created and returned to the user, but it can not be re-pooled. Fields: `guid`, `tag`, `requiredSize`, `allocationStack`. |
| MemoryStreamDiscardBuffer | Warning | Logged whenever a buffer is discarded rather than put back in the pool. Fields: `guid`, `tag`, `bufferType` (`Small`, `Large`), `reason` (`TooLarge`, `EnoughFree`). |
| MemoryStreamOverCapacity | Error | Logged whenever an attempt is made to set the capacity of the stream beyond the limits of `RecyclableMemoryStreamManager.MaximumStreamCapacity`, if such a limit is set. Fields: `guid`, `tag`, `requestedCapacity`, `maxCapacity`, `allocationStack`.|

### Event Hooks ###

In addition to the logged ETW events, there are a number of .NET event hooks on `RecyclableMemoryStreamManager` that you can use as triggers for your own custom actions:

| Name | Description |
|---------|------------|
| `BlockCreated` | A new small pool block has been allocated. |
| `BufferDiscarded` | A buffer has been refused re-entry to the pool and given over to the garbage collector. |
| `LargeBufferCreated` | A large buffer has been allocated. |
| `StreamCreated` | A new stream has been created. |
| `StreamDisposed` | A stream has been disposed. |
| `StreamDoubleDisposed` | A stream has been disposed twice, indicating an error. |
| `StreamFinalized` | A stream has been finalized, which means it was never disposed before it went out of scope. |
| `StreamLength` | Reports the stream's length upon disposal. Can allow you to track stream metrics. |
| `StreamConvertedToArray` | Someone called `ToArray` on a stream. |
| `StreamOverCapacity` | An attempt was made to expand beyond the maximum capacity allowed by the pool manager. |
| `UsageReport` | Provides stats on pool usage for metrics tracking. |

## Debugging Problems

Once you start introducing re-usable resources like the pooled buffers in `RecyclableMemoryStream`, you are taking some of the duties of the CLR away from it and reserving them for yourself. This can be error-prone. See the Usage section above for some guidelines on making your usage of this library successful.

There are a number of features that will help you debug usage of these streams.

### Stream Identification ###

Each stream is assigned a unique GUID and, optionally, a `tag`.

The GUID is unique for each stream object and serves to identify that stream throughout its lifetime.

A `tag` is an optional, arbitrary string assigned by the caller when a stream is requested. This can be a class name, function name, or some other meaningful string that can help you identify the source of the stream's usage. Note that multiple streams will contain the same tag. They identify where in your code the stream originated; they are not unique stream identifiers.

### Callstack Recording ###

If you set the `GenerateCallStacks` property on `RecyclableMemoryStreamManager` to true, then major operations on the stream, such as allocation and disposal, will record the call stack of those method calls. These will be reported in ETW events in the event of detected programming errors such as double-dispose or finalization. 

Turning this feature on causes a very significant negative performance impact, so should only be done when actively investigating a problem.

### Double-Dispose Protection ###

If `Dispose` is called twice on the same stream, an event is logged with the relevant stream's information. If `GenerateCallStacks` is turned on, this will include the call stacks for allocation and both disposals.

### Non-Dispose Detection ###

If `Dispose` is never called for a stream, the finalizer will eventually be called by the CLR, and an event will be logged with relevant stream information, including the allocation stack, if enabled. Buffers for finalized streams are lost to the pool, and this should be considered a bug.

### Concurrency

Concurrent use of `RecyclableMemoryStream` objects is not supported under any circumstances. However, `RecyclableMemoryStreamManager` is thread-safe and can be used to retrieve streams in a multi-threading scenario.

### ETW Events ###

Use an ETW event monitor such as [PerfView](https://www.microsoft.com/download/details.aspx?id=28567) to collect and analyze ETW events.

Many of these events contain helpful clues about the stream in question, including its tag, guid, and stacks (if enabled).

## Reference

Read the API documentation [here](https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/blob/master/docs/Microsoft.IO.RecyclableMemoryStream.md).

## License

This library is released under the [MIT license](https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/blob/master/LICENSE).
