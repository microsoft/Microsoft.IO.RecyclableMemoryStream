# Microsoft.IO.RecyclableMemoryStream [![NuGet Version](https://img.shields.io/nuget/v/Microsoft.IO.RecyclableMemoryStream.svg?style=flat)](https://www.nuget.org/packages/Microsoft.IO.RecyclableMemoryStream/) 

A library to provide pooling for .NET MemoryStream objects to improve application performance, especially in the area of garbage collection.

## Get Started

Install the latest version from NuGet

```
Install-Package Microsoft.IO.RecyclableMemoryStream
```

## Purpose

Microsoft.IO.RecyclableMemoryStream is a MemoryStream replacement that offers superior behavior for performance-critical systems. In particular it is optimized to do the following:

* Eliminate Large Object Heap allocations by using pooled buffers
* Incur far fewer gen 2 GCs, and spend far less time paused due to GC
* Avoid memory leaks by having a bounded pool size
* Avoid memory fragmentation
* Provide excellent debuggability
* Provide metrics for performance tracking

## Features

- The semantics are close to the original System.IO.MemoryStream implementation, and is intended to be a drop-in replacement.
- Rather than pooling the streams themselves, the underlying buffers are pooled. This allows you to use the simple Dispose pattern to release the buffers back to the pool, as well as detect invalid usage patterns (such as reusing a stream after it’s been disposed).
- The MemoryManager is thread-safe (streams themselves are inherently NOT thread safe).
- Each stream can be tagged with an identifying string that is used in logging - helpful when finding bugs and memory leaks relating to incorrect pool use.
- Debug features like recording the call stack of the stream allocation to track down pool leaks
- Maximum free pool size to handle spikes in usage without using too much memory.
- Flexible and adjustable limits to the pooling algorithm.
- Metrics tracking and events so that you can see the impact on the system.

## Build Targets

At least MSBuild 15 is required to build the code. You get this with Visual Studio 2017.
in a future release.

Build targets are: net40, net45, netstandard1.4, netstandard2.1, and netcoreapp2.1.

## Testing

Visual Studio 2019 is required for executing the unit tests. Requirements:
- NUnit test adaptor (VS Extension)
- Be sure to set the default processor architecture for tests to x64 (or the giant allocation test will fail)

## How It Works

RecyclableMemoryStream improves GC performance by ensuring that the larger buffers used for the streams are put into the gen 2 heap and stay there forever. This should cause full collections to happen less frequently. If you pick buffer sizes above 85K then you will ensure these are placed on the large object heap, which is touched even less frequently by the garbage collector.

The MemoryStreamManager class maintains two separate pools of objects:

1. **Small Pool** - Holds small buffers (of configurable size). Used by default for all normal read/write operations. Multiple small buffers are chained together in the RecyclableMemoryStream class and abstracted into a single stream.
2. ** Large Pool** - Holds large buffers, which are only used when you must have a single, contiguous buffer, such as a call to GetBuffer(). 

A RecyclableMemoryStream starts out by using a small buffer, chaining additional ones as the stream capacity grows. Should you ever call `GetBuffer()` and the length is greater than single small buffer's capacity, then the small buffers are converted to a single large buffer.

There are two versions of the large pool: Linear or Exponential.

Linear is the default. You specify a multiple and a maximum size, and an array of buffers, from size (1 * multiple), (2 * multiple) ... maximum is created. For example, if you specify a multiple of 1 MB and maximum size of 8 MB,
then you will have an array of length 8. The first slot will contain 1 MB buffers, the second slot 2 MB buffers, and so on.

Exponential buffers tweaks this slightly. Instead of linearly growing, the buffers double in size for each slot. For example, if you specify a multiple of 128KB, and a maximum size of 8 MB, you will have an array of length 7, the slots containing buffers of size 128KB, 256KB, 512KB, 1MB, 2MB, 4MB, and 8MB.

TODO: image showing difference

Which one should you use? That depends on your usage pattern. If you have an unpredictable large buffer size, perhaps the linear one will be more suitable. If you know that a longer stream length is unlikely, but you may have a lot of streams in the smaller size, picking the Exponential could lead to less overall memory usage (which was the reason this form was added).

## Usage

You can jump right in with no fuss by just doing a simple replacement of MemoryStream with something like this:

```
var sourceBuffer = new byte[]{0,1,2,3,4,5,6,7}; 
var manager = new RecyclableMemoryStreamManager(); 
using (var stream = manager.GetStream()) 
{ 
    stream.Write(sourceBuffer, 0, sourceBuffer.Length); 
}
```

Note that RecyclableMemoryStreamManager should be declared once and it will live for the entire process–this is the pool. It is perfectly fine to use multiple pools if you desire.

To facilitate easier debugging, you can optionally provide a string tag, which serves as a human-readable identifier for the stream. In practice, I’ve usually used something like “ClassName.MethodName” for this, but it can be whatever you want. Each stream also has a GUID to provide absolute identity if needed, but the tag is usually sufficient.

```
using (var stream = manager.GetStream("Program.Main"))
{
    stream.Write(sourceBuffer, 0, sourceBuffer.Length);
}
```

You can also provide an existing buffer. It’s important to note that this buffer will be copied into the pooled buffer:

```
var stream = manager.GetStream("Program.Main", sourceBuffer, 
                                    0, sourceBuffer.Length);
```

You can also change the parameters of the pool itself:

```
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

## Metrics and Hooks

TODO: ETW Events
TODO: event hooks

## Debugging Leaks

TODO

## Reference

TODO: