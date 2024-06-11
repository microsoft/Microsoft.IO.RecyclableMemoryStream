# Version 3.0.1

**Bug Fix**

* Fix infinite loop bug when calling (Try)GetBuffer on a stream longer than 1 GB when using the `UseExponentialLargeBuffer` option. (Issue #344)

# Version 3.0.0

**Breaking Changes**

* Removed `int`-based constructor and `GetStream` overloads where `long`-based methods exist.
* Removed all methods marked with `[Obsolete]`: 
    * `StreamDisposedEventArgs.ctor(Guid, string, string, string)`
    * `RecyclableMemoryStreamManager.GetStream(Guid, string, Memory<byte>)`
    * `RecyclableMemoryStreamManager.GetStream(Memory<byte>)`
    * `RecyclableMemoryStreamManager.GetStream(string, Memory<byte>)`
* Enable nullable annotations and warnings. i.e., added `<Nullable>enabled</Nullable>` to the project file.
* All overloads of `RecyclableMemoryStreamManager.GetStream` now return type `RecyclableMemoryStream` instead of `MemoryStream`.
* Removed explicit targets for net462, netcoreapp2.1, and net5.0. Supported targets are netstandard2.0, netstandard2.1, and net6.0 (there are a few net6.0-specific optimizations).
* Moved all the configuration settings for `RecyclableMemoryStreamManager` to the new `RecyclableMemoryStreamManager.Options` class. Removed many of the constructors as a result. This class will facilitate easier dependency injection through use of the [Options pattern](https://learn.microsoft.com/en-us/dotnet/core/extensions/options), for those who need it.
* Renamed some settings' names to be more consistent (e.g., `MaximumLargePoolFreeBytes`)

**New Feature**

* Added a new option for `RecyclableMemoryStreamManager`: `ZeroOutBuffer`, which will cause all buffers to be cleared on allocation and when returning to the pool. Off by default.

**Other Changes**

* Upgrade NUnit test library to version 4.
* Fix some spelling issues in comments and variable names.
* Update code to the latest recommended C# syntax.

# Version 2.3.2

**Optimizations**

* Calculating blocks and offsets was made more efficient by using `Math.DivRem`.
* Reading and writing to the stream was made more efficient with fewer array accesses.
* `CopyTo` was overridden to avoid using the slower default implementation.

# Version 2.3.1

**New Feature**
* Stream lifetime (creation through dispose) is now tracked and reported through the `MemoryStreamDispose` `EventSource` event, as well as through the `StreamDisposed` .NET event.

**Changes**

* The pool statistics used to be reported only when blocks/buffers were returned to the pool. This could lead to lopsided reporting patterns in some cases. Now, pool statistics are reported on stream creation and disposal.
* Added pool stats information to the `MemoryStreamDiscardBuffer` event. 
* Changed events relating to buffer creation to be at the warning level instead of verbose. These are signals that the pool might not be large enough to handle the load.

**Bug Fixes**

* Fixed allocation/finalization bug that could cause a `NullReferenceException` in some low-memory scenarios.

**Internal**

* .NET 7 SDK used to build
* Changed coding style to match some newer patterns (and added .editorconfig file to enforce in the future)
* Fixed punctuation and spelling in API documentation.

# Version 2.2.1

**API change**

* There are now overloads that take a type `long` parameter for requestedSize.

**Bug Fix**

* `ToString` will no longer throw an exception if the stream is disposed.


# Version 2.2.0

**API changes**

* Add an override for `GetStream` that takes a `ReadOnlySpan<byte>`. This supersedes the versions of `GetStream` that take `Memory<byte>`, which were marked as `[Obsolete]`.

**Bug Fixes**

* Fixed: `GetReadOnlySequence()` throws `ArgumentOutOfRangeException`

**Performance Improvements**

* Removed enumerator allocation when returning blocks to the pool.
* Changed default size of stream's block list to 0 because `EnsureCapacity` will always run, potentially resizing the list anyway.
* Removed unneeded closure allocation when copying buffers.
* Use `GC.AllocateUninitializedArray` in an additional spot, for better performance in .NET 5+.

**Documentation**

* Improved documentation, standardized punctuation, fixed code formatting.

# Version 2.1.3

** Bug Fixes**

* Fixed another integer overflow error when returning buffers to the pool.

# Version 2.1.2

**Bug Fixes**

* Added `[SecurityRules(SecurityRuyleSet.Level1)]` to assembly to allow more relaxed inheritance security rules.
* Fixed an integer overflow when calculating large buffer sizes.

# Version 2.1.0

* Added `RecyclableMemoryStreamManager` constructor overloads that take parameters for specifying the maximum free pool sizes. Updated IntelliSense documentation to make clear that these values need to be explicitly set to avoid unbounded pool growth.
* Buffers are now allocated using `GC.AllocateUninitializedArray` in .NET 5.
* net462 and netstandard2.0 targets can now support the `Span`-related APIs via a dependency on System.Memory.
* Updated documentation to fix typos and clarify language in some parts.
* Support for Source Link

# Version 2.0

**Breaking Changes**

* Removed 2 GB stream limit. Extremely large streams can be created by chaining together blocks. Attempts to convert a stream into a contiguous buffer longer than the runtime's limits will result in an exception.
* Removed build targets for net40, net45, net46, and netstandard1.4. Added net462.
* Changed some ETW events to provide more information.
* Refactored .NET events to match the information payloads of the ETW events.
* `GetBuffer` now throws `OutOfMemoryException` instead of `InvalidOperationException` if the needed size is too large for a contiguous array.

**Other Changes**

* Removed use of `Interlocked` methods when checking whether the stream is disposed. This should improve performance. (Concurrent use of streams has never been supported.)
* `RecyclableMemoryStream` now implements `IBufferWriter<byte>`
* New method overloads of `WriteTo` that allow you write the contents of the stream directly to another `byte[]` buffer.
* Reformatted all code documentation to be more readable.

**Development-only Changes**

* Significantly improved unit test speed

# Version 1.4.0

* Added netstandard2.0 target. There was an issue calling `GetBuffer` from a netstandard2.0 project, which would resolve to the netstandard1.4 target of RMS. netstandard1.4 doesn't support overriding `GetBuffer`, so you could hit `UnauthorizedAccessException`.
* A bug fix for `CopyToAsync`. It was copying the entire stream, but the expected behavior based on `System.IO.MemoryStream` is to copy from the current position.
* Some performance improvements to `CopyToAsync`. 

# Version 1.3.6

**Minor updates**

* Override `CopyToAsync` to save some allocations.
* Apply `AllowPartiallyTrustedCallers` attribute to assembly

# Version 1.3.5

**Performance Improvements**

* `WriteByte` has been significantly optimized to be faster.
* `CheckDisposed`, which is called in many code paths, has similarly been optimized.

# Version 1.3.4

**New API**

* `void WriteTo(Stream stream, int offset, int count)` -- Allows you to write a portion of the current stream to a destination stream without first having to call `GetBuffer`.

# Version 1.3.3

**Functionality**

- Added `RecyclableMemoryStreamManager.ThrowExceptionOnToArray`. Causes a `NotSupportedException` to be thrown if `RecyclableMemoryStream.ToArray` is called. Default is `false`.
- Added overloads of `RecyclableMemoryStreamManager.GetStream` that accept `Memory<byte>` arguments.

**Meta**

- Added changes.md to solution
- Regenerated API documentation for new XML comments and new APIs.

# Version 1.3.2
**Bug Fixes**

- Removed a buggy and unnecessary boundary check in Write methods.

**Performance**

- Removed LINQ iteration in some properties.
- Overloads of `Read`, `SafeRead`, and `Write` that accept `Span` arguments (.NET Core and .NET Standard targets only)

**Functionality**

- New buffer allocation strategy: exponential. Instead of linearly increasing large buffer sizes by a fixed multiple (say, 1MB), you can choose to have it increase exponentially in size, starting with smaller large buffers. This will allow you more efficient use of space, especially in smaller heap scenarios where you don't have gobs of memory to keep in a pool. We use this in Bing in some data centers that are more resource constrained than others.
- New targets for .NET Framework 4.6, .NET Standard 2.1
- Overload for `TryGetBuffer`, introduced in .NET Framework 4.6.
- Allow the Stream's GUID to be set explicitly

**Meta**

- Removed CBT build support files. Using dotnet.exe to build now.
- Added public key for delayed signing during build
- Consolidate and updated all NuGet package settings in the .csproj file.
- Added setting for generating a NuGet package for symbols (.snupkg)

# Version 1.2.0
- Bugs fixed when allocating very large streams.
- Concurrent methods for reading from a single stream added.
- Support for .NET 4.0 (without ETW instrumentation).
- It is now safe to call Dispose from multiple threads on the same object.

# Version 1.1.0
- Binaries on nuget.org are now signed through Microsoft.
- Some documentation enhancements and typo-cleanup.
- Some minor performance improvements.
- Fix behavior of `Dispose()` to be safe on double-dispose.

# Version 1.0.0
- Initial release.
