# Microsoft.IO.RecyclableMemoryStream [![NuGet Version](https://img.shields.io/nuget/v/Microsoft.IO.RecyclableMemoryStream.svg?style=flat)](https://www.nuget.org/packages/Microsoft.IO.RecyclableMemoryStream/) 

A library to provide pooling for .NET MemoryStream objects to improve application performance. 

## Get Started

Install the latest version from NuGet (for .NET 4.5 and up)

```
Install-Package Microsoft.IO.RecyclableMemoryStream
```

You can jump right in with no fuss by just doing a simple replacement of `MemoryStream` with something like this:
```c#
var sourceBuffer = new byte[]{0,1,2,3,4,5,6,7}; 
var manager = new RecyclableMemoryStreamManager(); 
using (var stream = manager.GetStream()) 
{ 
    stream.Write(sourceBuffer, 0, sourceBuffer.Length); 
}
```

Note that `RecyclableMemoryStreamManager` should typically be declared once and it will live for the entire process – this is the pool. It is perfectly fine to use multiple pools if you desire.

To facilitate easier debugging, you can optionally provide a string tag, which serves as a human-readable identifier for the stream. In practice, I’ve usually used something like `"ClassName.MethodName"` for this, but it can be whatever you want. Each stream also has a GUID to provide absolute identity if needed, but the tag is usually sufficient.

```c#
using (var stream = manager.GetStream("Program.Main"))
{
    stream.Write(sourceBuffer, 0, sourceBuffer.Length);
}
```

You can also provide an existing buffer. It’s important to note that this buffer will be copied into the pooled buffer:
```c#
var stream = manager.GetStream(
  "Program.Main", sourceBuffer, 
  0,
  sourceBuffer.Length);

// You can also change the parameters of the pool itself:
int blockSize = 1024;
int largeBufferMultiple = 1024 * 1024;
int maxBufferSize = 16 * largeBufferMultiple;

var manager = new RecyclableMemoryStreamManager(
  blockSize, 
  largeBufferMultiple, 
  maxBufferSize);

manager.GenerateCallStacks = true;
manager.AggressiveBufferReturn = true;
manager.MaximumFreeLargePoolBytes = maxBufferSize * 4;
manager.MaximumFreeSmallPoolBytes = 100 * blockSize;
```

## Features

- The semantics are close to the original `System.IO.MemoryStream` implementation, and is intended to be a drop-in replacement.
- Rather than pooling the streams themselves, the underlying buffers are pooled. This allows you to use the simple Dispose pattern to release the buffers back to the pool, as well as detect invalid usage patterns (such as reusing a stream after it’s been disposed).
- The `MemoryManager` is thread-safe (streams themselves are inherently NOT thread safe).
- Each stream can be tagged with an identifying string that is used in logging - helpful when finding bugs and memory leaks relating to incorrect pool use.
- Debug features like recording the call stack of the stream allocation to track down pool leaks
- Maximum free pool size to handle spikes in usage without using too much memory.
- Flexible and adjustable limits to the pooling algorithm.
- Metrics tracking and events so that you can see the impact on the system.

## How It Works

RecyclableMemoryStream uses multiple internal pools: a default "small" buffer (default of 128 KB) and additional, "large" pools (default: in 1 MB chunks). The pools look kind of like this:

![RecylableMemoryStream pools](http://www.philosophicalgeek.com/wp-content/uploads/2015/02/RecylableMemoryStream.png)

In normal operation, only the small pool is used. The stream abstracts away the use of multiple buffers for you. This makes the memory use extremely efficient (much better than `MemoryStream`’s default doubling of capacity).

The large pool is only used when you need a contiguous `byte[]` buffer, via a call to `GetBuffer` or (let's hope not) `ToArray`. When this happens, the buffers belonging to the small pool are released and replaced with a single buffer at least as large as what was requested. The size of the objects in the large pool are completely configurable, but if a buffer greater than the maximum size is requested then one will be created (it just won’t be pooled upon `Dispose`).


For more details, refer to the [announcement blog post](http://www.philosophicalgeek.com/2015/02/06/announcing-microsoft-io-recycablememorystream/)

## Build Targets

The code ships utilizing CommonBuildToolset. This provides some build extensions over top of MSBuild to automatically pull
NuGet packages from command line build, etc.

MSBuild 15 is required to build the code. You get this with Visual Studio 2017. Cross-platform builds will be documented
in a future release.

## Testing

We're using Visual Studio 2017 for interactive test work. Requirements:
- NUnit test adaptor (VS Extension)
- Be sure to set the default processor architecture for tests to x64 (or giant allocation test will fail)
