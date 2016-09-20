# Microsoft.IO.RecyclableMemoryStream [![NuGet Version](https://img.shields.io/nuget/v/Microsoft.IO.RecyclableMemoryStream.svg?style=flat)](https://www.nuget.org/packages/Microsoft.IO.RecyclableMemoryStream/) 

A library to provide pooling for .NET MemoryStream objects to improve application performance. 

## Get Started

Install the latest version from NuGet (for .NET 4.5 and up)

```
Install-Package Microsoft.IO.RecyclableMemoryStream
```

## Features

- The semantics are close to the original System.IO.MemoryStream implementation, and is intended to be a drop-in replacement.
- Rather than pooling the streams themselves, the underlying buffers are pooled. This allows you to use the simple Dispose pattern to release the buffers back to the pool, as well as detect invalid usage patterns (such as reusing a stream after it’s been disposed).
- The MemoryManager is thread-safe (streams themselves are inherently NOT thread safe).
- Each stream can be tagged with an identifying string that is used in logging - helpful when finding bugs and memory leaks relating to incorrect pool use.
- Debug features like recording the call stack of the stream allocation to track down pool leaks
- Maximum free pool size to handle spikes in usage without using too much memory.
- Flexible and adjustable limits to the pooling algorithm.
- Metrics tracking and events so that you can see the impact on the system.

For more details, refer to the [announcement blog post](http://www.philosophicalgeek.com/2015/02/06/announcing-microsoft-io-recycablememorystream/)

## Build Targets

The code ships with both a 'default' (.NET 4.5) build target and a collection of targets for different framework versions.
These are reflected in the src/Net*.csproj files which declare the desired framework version and are used for release builds
for NuGet packages. Note that the .NET 3.5 project is ***not*** in the solution file as it currently does not work.

The release target assemblies have no friend assemblies (for the unit tests) so the tests cannot currently be run against them.

The assemblies may be delay-signed with the environment variable $DelaySignKeyFile pointing to the Strong Name Key file of your
choice.

