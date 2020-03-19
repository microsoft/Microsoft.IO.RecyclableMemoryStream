# RecyclableMemoryStream class

MemoryStream implementation that deals with pooling and managing memory streams which use potentially large buffers.

```csharp
public sealed class RecyclableMemoryStream : MemoryStream
```

## Public Members

| name | description |
| --- | --- |
| [RecyclableMemoryStream](RecyclableMemoryStream/RecyclableMemoryStream.md)(…) | Allocate a new RecyclableMemoryStream object. (6 constructors) |
| override [CanRead](RecyclableMemoryStream/CanRead.md) { get; } | Whether the stream can currently read |
| override [CanSeek](RecyclableMemoryStream/CanSeek.md) { get; } | Whether the stream can currently seek |
| override [CanTimeout](RecyclableMemoryStream/CanTimeout.md) { get; } | Always false |
| override [CanWrite](RecyclableMemoryStream/CanWrite.md) { get; } | Whether the stream can currently write |
| override [Capacity](RecyclableMemoryStream/Capacity.md) { get; set; } | Gets or sets the capacity |
| override [Length](RecyclableMemoryStream/Length.md) { get; } | Gets the number of bytes written to this stream. |
| override [Position](RecyclableMemoryStream/Position.md) { get; set; } | Gets the current position in the stream |
| override [Close](RecyclableMemoryStream/Close.md)() | Equivalent to Dispose |
| override [GetBuffer](RecyclableMemoryStream/GetBuffer.md)() | Returns a single buffer containing the contents of the stream. The buffer may be longer than the stream length. |
| override [Read](RecyclableMemoryStream/Read.md)(…) | Reads from the current position into the provided buffer (2 methods) |
| override [ReadByte](RecyclableMemoryStream/ReadByte.md)() | Reads a single byte from the current position in the stream. |
| [SafeRead](RecyclableMemoryStream/SafeRead.md)(…) | Reads from the specified position into the provided buffer (2 methods) |
| [SafeReadByte](RecyclableMemoryStream/SafeReadByte.md)(…) | Reads a single byte from the specified position in the stream. |
| override [Seek](RecyclableMemoryStream/Seek.md)(…) | Sets the position to the offset from the seek location |
| override [SetLength](RecyclableMemoryStream/SetLength.md)(…) | Sets the length of the stream |
| override [ToArray](RecyclableMemoryStream/ToArray.md)() | Returns a new array with a copy of the buffer's contents. You should almost certainly be using GetBuffer combined with the Length to access the bytes in this stream. Calling ToArray will destroy the benefits of pooled buffers, but it is included for the sake of completeness. |
| override [ToString](RecyclableMemoryStream/ToString.md)() | Returns a useful string for debugging. This should not normally be called in actual production code. |
| override [TryGetBuffer](RecyclableMemoryStream/TryGetBuffer.md)(…) | Returns an ArraySegment that wraps a single buffer containing the contents of the stream. |
| override [Write](RecyclableMemoryStream/Write.md)(…) | Writes the buffer to the stream (2 methods) |
| override [WriteByte](RecyclableMemoryStream/WriteByte.md)(…) | Writes a single byte to the current position in the stream. |
| override [WriteTo](RecyclableMemoryStream/WriteTo.md)(…) | Synchronously writes this stream's bytes to the parameter stream. |

## Protected Members

| name | description |
| --- | --- |
| override [Dispose](RecyclableMemoryStream/Dispose.md)(…) | Returns the memory used by this stream back to the pool. |
| override [Finalize](RecyclableMemoryStream/Finalize.md)() | The finalizer will be called when a stream is not disposed properly. |

## Remarks

This class works in tandem with the RecyclableMemoryStreamManager to supply MemoryStream objects to callers, while avoiding these specific problems: 1. LOH allocations - since all large buffers are pooled, they will never incur a Gen2 GC 2. Memory waste - A standard memory stream doubles its size when it runs out of room. This leads to continual memory growth as each stream approaches the maximum allowed size. 3. Memory copying - Each time a MemoryStream grows, all the bytes are copied into new buffers. This implementation only copies the bytes when GetBuffer is called. 4. Memory fragmentation - By using homogeneous buffer sizes, it ensures that blocks of memory can be easily reused. The stream is implemented on top of a series of uniformly-sized blocks. As the stream's length grows, additional blocks are retrieved from the memory manager. It is these blocks that are pooled, not the stream object itself. The biggest wrinkle in this implementation is when GetBuffer() is called. This requires a single contiguous buffer. If only a single block is in use, then that block is returned. If multiple blocks are in use, we retrieve a larger buffer from the memory manager. These large buffers are also pooled, split by size--they are multiples/exponentials of a chunk size (1 MB by default). Once a large buffer is assigned to the stream the small blocks are NEVER again used for this stream. All operations take place on the large buffer. The large buffer can be replaced by a larger buffer from the pool as needed. All blocks and large buffers are maintained in the stream until the stream is disposed (unless AggressiveBufferReturn is enabled in the stream manager).

## See Also

* namespace [Microsoft.IO](../Microsoft.IO.RecyclableMemoryStream.md)

<!-- DO NOT EDIT: generated by xmldocmd for Microsoft.IO.RecyclableMemoryStream.dll -->
