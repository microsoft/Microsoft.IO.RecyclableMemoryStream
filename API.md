# Microsoft.IO.RecyclableMemoryStream #

## Type Microsoft.IO.RecyclableMemoryStreamManager

 Manages pools of RecyclableMemoryStream objects. 



> There are two pools managed in here. The small pool contains same-sized buffers that are handed to streams as they write more data. For scenarios that need to call GetBuffer(), the large pool contains buffers of various sizes, all multiples/exponentials of LargeBufferMultiple (1 MB by default). They are split by size to avoid overly-wasteful buffer usage. There should be far fewer 8 MB buffers than 1 MB buffers, for example. 



---
## Type Microsoft.IO.RecyclableMemoryStreamManager.EventHandler

 Generic delegate for handling events without any arguments. 



---
## Type Microsoft.IO.RecyclableMemoryStreamManager.LargeBufferDiscardedEventHandler

 Delegate for handling large buffer discard reports. 

|Name | Description |
|-----|------|
|reason: |Reason the buffer was discarded.|


---
## Type Microsoft.IO.RecyclableMemoryStreamManager.StreamLengthReportHandler

 Delegate for handling reports of stream size when streams are allocated 

|Name | Description |
|-----|------|
|bytes: |Bytes allocated.|


---
## Type Microsoft.IO.RecyclableMemoryStreamManager.UsageReportEventHandler

 Delegate for handling periodic reporting of memory use statistics. 

|Name | Description |
|-----|------|
|smallPoolInUseBytes: |Bytes currently in use in the small pool.|
|smallPoolFreeBytes: |Bytes currently free in the small pool.|
|largePoolInUseBytes: |Bytes currently in use in the large pool.|
|largePoolFreeBytes: |Bytes currently free in the large pool.|


---
#### Method Microsoft.IO.RecyclableMemoryStreamManager.#ctor

 Initializes the memory manager with the default block/buffer specifications. 



---
#### Method Microsoft.IO.RecyclableMemoryStreamManager.#ctor(System.Int32,System.Int32,System.Int32)

 Initializes the memory manager with the given block requiredSize. 

|Name | Description |
|-----|------|
|blockSize: |Size of each block that is pooled. Must be > 0.|
|largeBufferMultiple: |Each large buffer will be a multiple of this value.|
|maximumBufferSize: |Buffers larger than this are not pooled|
[[T:System.ArgumentOutOfRangeException|T:System.ArgumentOutOfRangeException]]: blockSize is not a positive number, or largeBufferMultiple is not a positive number, or maximumBufferSize is less than blockSize.

[[T:System.ArgumentException|T:System.ArgumentException]]: maximumBufferSize is not a multiple of largeBufferMultiple



---
#### Method Microsoft.IO.RecyclableMemoryStreamManager.#ctor(System.Int32,System.Int32,System.Int32,System.Boolean)

 Initializes the memory manager with the given block requiredSize. 

|Name | Description |
|-----|------|
|blockSize: |Size of each block that is pooled. Must be > 0.|
|largeBufferMultiple: |Each large buffer will be a multiple/exponential of this value.|
|maximumBufferSize: |Buffers larger than this are not pooled|
|useExponentialLargeBuffer: |Switch to exponential large buffer allocation strategy|
[[T:System.ArgumentOutOfRangeException|T:System.ArgumentOutOfRangeException]]: blockSize is not a positive number, or largeBufferMultiple is not a positive number, or maximumBufferSize is less than blockSize.

[[T:System.ArgumentException|T:System.ArgumentException]]: maximumBufferSize is not a multiple/exponential of largeBufferMultiple



---
#### Property Microsoft.IO.RecyclableMemoryStreamManager.BlockSize

 The size of each block. It must be set at creation and cannot be changed. 



---
#### Property Microsoft.IO.RecyclableMemoryStreamManager.LargeBufferMultiple

 All buffers are multiples/exponentials of this number. It must be set at creation and cannot be changed. 



---
#### Property Microsoft.IO.RecyclableMemoryStreamManager.UseMultipleLargeBuffer

 Use multiple large buffer allocation strategy. It must be set at creation and cannot be changed. 



---
#### Property Microsoft.IO.RecyclableMemoryStreamManager.UseExponentialLargeBuffer

 Use exponential large buffer allocation strategy. It must be set at creation and cannot be changed. 



---
#### Property Microsoft.IO.RecyclableMemoryStreamManager.MaximumBufferSize

 Gets the maximum buffer size. 



>Any buffer that is returned to the pool that is larger than this will be discarded and garbage collected.



---
#### Property Microsoft.IO.RecyclableMemoryStreamManager.SmallPoolFreeSize

 Number of bytes in small pool not currently in use 



---
#### Property Microsoft.IO.RecyclableMemoryStreamManager.SmallPoolInUseSize

 Number of bytes currently in use by stream from the small pool 



---
#### Property Microsoft.IO.RecyclableMemoryStreamManager.LargePoolFreeSize

 Number of bytes in large pool not currently in use 



---
#### Property Microsoft.IO.RecyclableMemoryStreamManager.LargePoolInUseSize

 Number of bytes currently in use by streams from the large pool 



---
#### Property Microsoft.IO.RecyclableMemoryStreamManager.SmallBlocksFree

 How many blocks are in the small pool 



---
#### Property Microsoft.IO.RecyclableMemoryStreamManager.LargeBuffersFree

 How many buffers are in the large pool 



---
#### Property Microsoft.IO.RecyclableMemoryStreamManager.MaximumFreeSmallPoolBytes

 How many bytes of small free blocks to allow before we start dropping those returned to us. 



---
#### Property Microsoft.IO.RecyclableMemoryStreamManager.MaximumFreeLargePoolBytes

 How many bytes of large free buffers to allow before we start dropping those returned to us. 



---
#### Property Microsoft.IO.RecyclableMemoryStreamManager.MaximumStreamCapacity

 Maximum stream capacity in bytes. Attempts to set a larger capacity will result in an exception. 



>A value of 0 indicates no limit.



---
#### Property Microsoft.IO.RecyclableMemoryStreamManager.GenerateCallStacks

 Whether to save callstacks for stream allocations. This can help in debugging. It should NEVER be turned on generally in production. 



---
#### Property Microsoft.IO.RecyclableMemoryStreamManager.AggressiveBufferReturn

 Whether dirty buffers can be immediately returned to the buffer pool. E.g. when GetBuffer() is called on a stream and creates a single large buffer, if this setting is enabled, the other blocks will be returned to the buffer pool immediately. Note when enabling this setting that the user is responsible for ensuring that any buffer previously retrieved from a stream which is subsequently modified is not used after modification (as it may no longer be valid). 



---
#### Method Microsoft.IO.RecyclableMemoryStreamManager.GetBlock

 Removes and returns a single block from the pool. 

**Returns**: A byte[] array



---
#### Method Microsoft.IO.RecyclableMemoryStreamManager.GetLargeBuffer(System.Int32,System.String)

 Returns a buffer of arbitrary size from the large buffer pool. This buffer will be at least the requiredSize and always be a multiple/exponential of largeBufferMultiple. 

|Name | Description |
|-----|------|
|requiredSize: |The minimum length of the buffer|
|tag: |The tag of the stream returning this buffer, for logging if necessary.|
**Returns**: A buffer of at least the required size.



---
#### Method Microsoft.IO.RecyclableMemoryStreamManager.ReturnLargeBuffer(System.Byte[],System.String)

 Returns the buffer to the large pool 

|Name | Description |
|-----|------|
|buffer: |The buffer to return.|
|tag: |The tag of the stream returning this buffer, for logging if necessary.|
[[T:System.ArgumentNullException|T:System.ArgumentNullException]]: buffer is null

[[T:System.ArgumentException|T:System.ArgumentException]]: buffer.Length is not a multiple/exponential of LargeBufferMultiple (it did not originate from this pool)



---
#### Method Microsoft.IO.RecyclableMemoryStreamManager.ReturnBlocks(System.Collections.Generic.ICollection{System.Byte[]},System.String)

 Returns the blocks to the pool 

|Name | Description |
|-----|------|
|blocks: |Collection of blocks to return to the pool|
|tag: |The tag of the stream returning these blocks, for logging if necessary.|
[[T:System.ArgumentNullException|T:System.ArgumentNullException]]: blocks is null

[[T:System.ArgumentException|T:System.ArgumentException]]: blocks contains buffers that are the wrong size (or null) for this memory manager



---
#### Method Microsoft.IO.RecyclableMemoryStreamManager.GetStream

 Retrieve a new MemoryStream object with no tag and a default initial capacity. 

**Returns**: A MemoryStream.



---
#### Method Microsoft.IO.RecyclableMemoryStreamManager.GetStream(System.Guid)

 Retrieve a new MemoryStream object with no tag and a default initial capacity. 

|Name | Description |
|-----|------|
|id: |A unique identifier which can be used to trace usages of the stream.|
**Returns**: A MemoryStream.



---
#### Method Microsoft.IO.RecyclableMemoryStreamManager.GetStream(System.String)

 Retrieve a new MemoryStream object with the given tag and a default initial capacity. 

|Name | Description |
|-----|------|
|tag: |A tag which can be used to track the source of the stream.|
**Returns**: A MemoryStream.



---
#### Method Microsoft.IO.RecyclableMemoryStreamManager.GetStream(System.Guid,System.String)

 Retrieve a new MemoryStream object with the given tag and a default initial capacity. 

|Name | Description |
|-----|------|
|id: |A unique identifier which can be used to trace usages of the stream.|
|tag: |A tag which can be used to track the source of the stream.|
**Returns**: A MemoryStream.



---
#### Method Microsoft.IO.RecyclableMemoryStreamManager.GetStream(System.String,System.Int32)

 Retrieve a new MemoryStream object with the given tag and at least the given capacity. 

|Name | Description |
|-----|------|
|id: |A unique identifier which can be used to trace usages of the stream.|
|tag: |A tag which can be used to track the source of the stream.|
|requiredSize: |The minimum desired capacity for the stream.|
**Returns**: A MemoryStream.



---
#### Method Microsoft.IO.RecyclableMemoryStreamManager.GetStream(System.Guid,System.String,System.Int32)

 Retrieve a new MemoryStream object with the given tag and at least the given capacity. 

|Name | Description |
|-----|------|
|id: |A unique identifier which can be used to trace usages of the stream.|
|tag: |A tag which can be used to track the source of the stream.|
|requiredSize: |The minimum desired capacity for the stream.|
**Returns**: A MemoryStream.



---
#### Method Microsoft.IO.RecyclableMemoryStreamManager.GetStream(System.Guid,System.String,System.Int32,System.Boolean)

 Retrieve a new MemoryStream object with the given tag and at least the given capacity, possibly using a single contiguous underlying buffer. 



>Retrieving a MemoryStream which provides a single contiguous buffer can be useful in situations where the initial size is known and it is desirable to avoid copying data between the smaller underlying buffers to a single large one. This is most helpful when you know that you will always call GetBuffer on the underlying stream.

|Name | Description |
|-----|------|
|id: |A unique identifier which can be used to trace usages of the stream.|
|tag: |A tag which can be used to track the source of the stream.|
|requiredSize: |The minimum desired capacity for the stream.|
|asContiguousBuffer: |Whether to attempt to use a single contiguous buffer.|
**Returns**: A MemoryStream.



---
#### Method Microsoft.IO.RecyclableMemoryStreamManager.GetStream(System.String,System.Int32,System.Boolean)

 Retrieve a new MemoryStream object with the given tag and at least the given capacity, possibly using a single contiguous underlying buffer. 



>Retrieving a MemoryStream which provides a single contiguous buffer can be useful in situations where the initial size is known and it is desirable to avoid copying data between the smaller underlying buffers to a single large one. This is most helpful when you know that you will always call GetBuffer on the underlying stream.

|Name | Description |
|-----|------|
|tag: |A tag which can be used to track the source of the stream.|
|requiredSize: |The minimum desired capacity for the stream.|
|asContiguousBuffer: |Whether to attempt to use a single contiguous buffer.|
**Returns**: A MemoryStream.



---
#### Method Microsoft.IO.RecyclableMemoryStreamManager.GetStream(System.Guid,System.String,System.Byte[],System.Int32,System.Int32)

 Retrieve a new MemoryStream object with the given tag and with contents copied from the provided buffer. The provided buffer is not wrapped or used after construction. 



>The new stream's position is set to the beginning of the stream when returned.

|Name | Description |
|-----|------|
|id: |A unique identifier which can be used to trace usages of the stream.|
|tag: |A tag which can be used to track the source of the stream.|
|buffer: |The byte buffer to copy data from.|
|offset: |The offset from the start of the buffer to copy from.|
|count: |The number of bytes to copy from the buffer.|
**Returns**: A MemoryStream.



---
#### Method Microsoft.IO.RecyclableMemoryStreamManager.GetStream(System.Byte[])

 Retrieve a new MemoryStream object with the contents copied from the provided buffer. The provided buffer is not wrapped or used after construction. 



>The new stream's position is set to the beginning of the stream when returned.

|Name | Description |
|-----|------|
|buffer: |The byte buffer to copy data from.|
**Returns**: A MemoryStream.



---
#### Method Microsoft.IO.RecyclableMemoryStreamManager.GetStream(System.String,System.Byte[],System.Int32,System.Int32)

 Retrieve a new MemoryStream object with the given tag and with contents copied from the provided buffer. The provided buffer is not wrapped or used after construction. 



>The new stream's position is set to the beginning of the stream when returned.

|Name | Description |
|-----|------|
|tag: |A tag which can be used to track the source of the stream.|
|buffer: |The byte buffer to copy data from.|
|offset: |The offset from the start of the buffer to copy from.|
|count: |The number of bytes to copy from the buffer.|
**Returns**: A MemoryStream.



---
#### Event Microsoft.IO.RecyclableMemoryStreamManager.BlockCreated

 Triggered when a new block is created. 



---
#### Event Microsoft.IO.RecyclableMemoryStreamManager.BlockDiscarded

 Triggered when a new block is created. 



---
#### Event Microsoft.IO.RecyclableMemoryStreamManager.LargeBufferCreated

 Triggered when a new large buffer is created. 



---
#### Event Microsoft.IO.RecyclableMemoryStreamManager.StreamCreated

 Triggered when a new stream is created. 



---
#### Event Microsoft.IO.RecyclableMemoryStreamManager.StreamDisposed

 Triggered when a stream is disposed. 



---
#### Event Microsoft.IO.RecyclableMemoryStreamManager.StreamFinalized

 Triggered when a stream is finalized. 



---
#### Event Microsoft.IO.RecyclableMemoryStreamManager.StreamLength

 Triggered when a stream is finalized. 



---
#### Event Microsoft.IO.RecyclableMemoryStreamManager.StreamConvertedToArray

 Triggered when a user converts a stream to array. 



---
#### Event Microsoft.IO.RecyclableMemoryStreamManager.LargeBufferDiscarded

 Triggered when a large buffer is discarded, along with the reason for the discard. 



---
#### Event Microsoft.IO.RecyclableMemoryStreamManager.UsageReport

 Periodically triggered to report usage statistics. 



---
## Type Microsoft.IO.RecyclableMemoryStream

 MemoryStream implementation that deals with pooling and managing memory streams which use potentially large buffers. 



> This class works in tandem with the RecyclableMemoryStreamManager to supply MemoryStream objects to callers, while avoiding these specific problems: 1. LOH allocations - since all large buffers are pooled, they will never incur a Gen2 GC 2. Memory waste - A standard memory stream doubles its size when it runs out of room. This leads to continual memory growth as each stream approaches the maximum allowed size. 3. Memory copying - Each time a MemoryStream grows, all the bytes are copied into new buffers. This implementation only copies the bytes when GetBuffer is called. 4. Memory fragmentation - By using homogeneous buffer sizes, it ensures that blocks of memory can be easily reused. The stream is implemented on top of a series of uniformly-sized blocks. As the stream's length grows, additional blocks are retrieved from the memory manager. It is these blocks that are pooled, not the stream object itself. The biggest wrinkle in this implementation is when GetBuffer() is called. This requires a single contiguous buffer. If only a single block is in use, then that block is returned. If multiple blocks are in use, we retrieve a larger buffer from the memory manager. These large buffers are also pooled, split by size--they are multiples/exponentials of a chunk size (1 MB by default). Once a large buffer is assigned to the stream the small blocks are NEVER again used for this stream. All operations take place on the large buffer. The large buffer can be replaced by a larger buffer from the pool as needed. All blocks and large buffers are maintained in the stream until the stream is disposed (unless AggressiveBufferReturn is enabled in the stream manager). 



---
#### Field blocks

 All of these blocks must be the same size 



---
#### Field byteBuffer

 This buffer exists so that WriteByte can forward all of its calls to Write without creating a new byte[] buffer on every call. 



---
#### Field dirtyBuffers

 This list is used to store buffers once they're replaced by something larger. This is for the cases where you have users of this class that may hold onto the buffers longer than they should and you want to prevent race conditions which could corrupt the data. 



---
#### Field largeBuffer

 This is only set by GetBuffer() if the necessary buffer is larger than a single block size, or on construction if the caller immediately requests a single large buffer. 



>If this field is non-null, it contains the concatenation of the bytes found in the individual blocks. Once it is created, this (or a larger) largeBuffer will be used for the life of the stream. 



---
#### Property Id

 Unique identifier for this stream across its entire lifetime 

[[T:System.ObjectDisposedException|T:System.ObjectDisposedException]]: Object has been disposed



---
#### Property Tag

 A temporary identifier for the current usage of this stream. 

[[T:System.ObjectDisposedException|T:System.ObjectDisposedException]]: Object has been disposed



---
#### Property MemoryManager

 Gets the memory manager being used by this stream. 

[[T:System.ObjectDisposedException|T:System.ObjectDisposedException]]: Object has been disposed



---
#### Property AllocationStack

 Callstack of the constructor. It is only set if MemoryManager.GenerateCallStacks is true, which should only be in debugging situations. 



---
#### Property DisposeStack

 Callstack of the Dispose call. It is only set if MemoryManager.GenerateCallStacks is true, which should only be in debugging situations. 



---
#### Method #ctor(Microsoft.IO.RecyclableMemoryStreamManager)

 Allocate a new RecyclableMemoryStream object. 

|Name | Description |
|-----|------|
|memoryManager: |The memory manager|


---
#### Method #ctor(Microsoft.IO.RecyclableMemoryStreamManager,System.Guid)

 Allocate a new RecyclableMemoryStream object. 

|Name | Description |
|-----|------|
|memoryManager: |The memory manager|
|id: |A unique identifier which can be used to trace usages of the stream.|


---
#### Method #ctor(Microsoft.IO.RecyclableMemoryStreamManager,System.String)

 Allocate a new RecyclableMemoryStream object 

|Name | Description |
|-----|------|
|memoryManager: |The memory manager|
|tag: |A string identifying this stream for logging and debugging purposes|


---
#### Method #ctor(Microsoft.IO.RecyclableMemoryStreamManager,System.Guid,System.String)

 Allocate a new RecyclableMemoryStream object 

|Name | Description |
|-----|------|
|memoryManager: |The memory manager|
|id: |A unique identifier which can be used to trace usages of the stream.|
|tag: |A string identifying this stream for logging and debugging purposes|


---
#### Method #ctor(Microsoft.IO.RecyclableMemoryStreamManager,System.String,System.Int32)

 Allocate a new RecyclableMemoryStream object 

|Name | Description |
|-----|------|
|memoryManager: |The memory manager|
|tag: |A string identifying this stream for logging and debugging purposes|
|requestedSize: |The initial requested size to prevent future allocations|


---
#### Method #ctor(Microsoft.IO.RecyclableMemoryStreamManager,System.Guid,System.String,System.Int32)

 Allocate a new RecyclableMemoryStream object 

|Name | Description |
|-----|------|
|memoryManager: |The memory manager|
|id: |A unique identifier which can be used to trace usages of the stream.|
|tag: |A string identifying this stream for logging and debugging purposes|
|requestedSize: |The initial requested size to prevent future allocations|


---
#### Method #ctor(Microsoft.IO.RecyclableMemoryStreamManager,System.Guid,System.String,System.Int32,System.Byte[])

 Allocate a new RecyclableMemoryStream object 

|Name | Description |
|-----|------|
|memoryManager: |The memory manager|
|id: |A unique identifier which can be used to trace usages of the stream.|
|tag: |A string identifying this stream for logging and debugging purposes|
|requestedSize: |The initial requested size to prevent future allocations|
|initialLargeBuffer: |An initial buffer to use. This buffer will be owned by the stream and returned to the memory manager upon Dispose.|


---
#### Method Dispose(System.Boolean)

 Returns the memory used by this stream back to the pool. 

|Name | Description |
|-----|------|
|disposing: |Whether we're disposing (true), or being called by the finalizer (false)|


---
#### Method Close

 Equivalent to Dispose 



---
#### Property Capacity

 Gets or sets the capacity 



>Capacity is always in multiples of the memory manager's block size, unless the large buffer is in use. Capacity never decreases during a stream's lifetime. Explicitly setting the capacity to a lower value than the current value will have no effect. This is because the buffers are all pooled by chunks and there's little reason to allow stream truncation. Writing past the current capacity will cause Capacity to automatically increase, until MaximumStreamCapacity is reached. 

[[T:System.ObjectDisposedException|T:System.ObjectDisposedException]]: Object has been disposed



---
#### Property Length

 Gets the number of bytes written to this stream. 

[[T:System.ObjectDisposedException|T:System.ObjectDisposedException]]: Object has been disposed



---
#### Property Position

 Gets the current position in the stream 

[[T:System.ObjectDisposedException|T:System.ObjectDisposedException]]: Object has been disposed



---
#### Property CanRead

 Whether the stream can currently read 



---
#### Property CanSeek

 Whether the stream can currently seek 



---
#### Property CanTimeout

 Always false 



---
#### Property CanWrite

 Whether the stream can currently write 



---
#### Method GetBuffer

 Returns a single buffer containing the contents of the stream. The buffer may be longer than the stream length. 

**Returns**: A byte[] buffer



>IMPORTANT: Doing a Write() after calling GetBuffer() invalidates the buffer. The old buffer is held onto until Dispose is called, but the next time GetBuffer() is called, a new buffer from the pool will be required.

[[T:System.ObjectDisposedException|T:System.ObjectDisposedException]]: Object has been disposed



---
#### Method TryGetBuffer(System.ArraySegment{System.Byte}@)

 Returns an ArraySegment that wraps a single buffer containing the contents of the stream. 

|Name | Description |
|-----|------|
|buffer: |An ArraySegment containing a reference to the underlying bytes.|
**Returns**: Always returns true.



>GetBuffer has no failure modes (it always returns something, even if it's an empty buffer), therefore this method always returns a valid ArraySegment to the same buffer returned by GetBuffer.



---
#### Method ToArray

 Returns a new array with a copy of the buffer's contents. You should almost certainly be using GetBuffer combined with the Length to access the bytes in this stream. Calling ToArray will destroy the benefits of pooled buffers, but it is included for the sake of completeness. 

[[T:System.ObjectDisposedException|T:System.ObjectDisposedException]]: Object has been disposed



---
#### Method Read(System.Byte[],System.Int32,System.Int32)

 Reads from the current position into the provided buffer 

|Name | Description |
|-----|------|
|buffer: |Destination buffer|
|offset: |Offset into buffer at which to start placing the read bytes.|
|count: |Number of bytes to read.|
**Returns**: The number of bytes read

[[T:System.ArgumentNullException|T:System.ArgumentNullException]]: buffer is null

[[T:System.ArgumentOutOfRangeException|T:System.ArgumentOutOfRangeException]]: offset or count is less than 0

[[T:System.ArgumentException|T:System.ArgumentException]]: offset subtracted from the buffer length is less than count

[[T:System.ObjectDisposedException|T:System.ObjectDisposedException]]: Object has been disposed



---
#### Method SafeRead(System.Byte[],System.Int32,System.Int32,System.Int32@)

 Reads from the specified position into the provided buffer 

|Name | Description |
|-----|------|
|buffer: |Destination buffer|
|offset: |Offset into buffer at which to start placing the read bytes.|
|count: |Number of bytes to read.|
|streamPosition: |Position in the stream to start reading from|
**Returns**: The number of bytes read

[[T:System.ArgumentNullException|T:System.ArgumentNullException]]: buffer is null

[[T:System.ArgumentOutOfRangeException|T:System.ArgumentOutOfRangeException]]: offset or count is less than 0

[[T:System.ArgumentException|T:System.ArgumentException]]: offset subtracted from the buffer length is less than count

[[T:System.ObjectDisposedException|T:System.ObjectDisposedException]]: Object has been disposed



---
#### Method Read(System.Span{System.Byte})

 Reads from the current position into the provided buffer 

|Name | Description |
|-----|------|
|buffer: |Destination buffer|
**Returns**: The number of bytes read

[[T:System.ObjectDisposedException|T:System.ObjectDisposedException]]: Object has been disposed



---
#### Method SafeRead(System.Span{System.Byte},System.Int32@)

 Reads from the specified position into the provided buffer 

|Name | Description |
|-----|------|
|buffer: |Destination buffer|
|streamPosition: |Position in the stream to start reading from|
**Returns**: The number of bytes read

[[T:System.ObjectDisposedException|T:System.ObjectDisposedException]]: Object has been disposed



---
#### Method Write(System.Byte[],System.Int32,System.Int32)

 Writes the buffer to the stream 

|Name | Description |
|-----|------|
|buffer: |Source buffer|
|offset: |Start position|
|count: |Number of bytes to write|
[[T:System.ArgumentNullException|T:System.ArgumentNullException]]: buffer is null

[[T:System.ArgumentOutOfRangeException|T:System.ArgumentOutOfRangeException]]: offset or count is negative

[[T:System.ArgumentException|T:System.ArgumentException]]: buffer.Length - offset is not less than count

[[T:System.ObjectDisposedException|T:System.ObjectDisposedException]]: Object has been disposed



---
#### Method Write(System.ReadOnlySpan{System.Byte})

 Writes the buffer to the stream 

|Name | Description |
|-----|------|
|source: |Source buffer|
[[T:System.ArgumentNullException|T:System.ArgumentNullException]]: buffer is null

[[T:System.ObjectDisposedException|T:System.ObjectDisposedException]]: Object has been disposed



---
#### Method ToString

 Returns a useful string for debugging. This should not normally be called in actual production code. 



---
#### Method WriteByte(System.Byte)

 Writes a single byte to the current position in the stream. 

|Name | Description |
|-----|------|
|value: |byte value to write|
[[T:System.ObjectDisposedException|T:System.ObjectDisposedException]]: Object has been disposed



---
#### Method ReadByte

 Reads a single byte from the current position in the stream. 

**Returns**: The byte at the current position, or -1 if the position is at the end of the stream.

[[T:System.ObjectDisposedException|T:System.ObjectDisposedException]]: Object has been disposed



---
#### Method SafeReadByte(System.Int32@)

 Reads a single byte from the specified position in the stream. 

|Name | Description |
|-----|------|
|streamPosition: |The position in the stream to read from|
**Returns**: The byte at the current position, or -1 if the position is at the end of the stream.

[[T:System.ObjectDisposedException|T:System.ObjectDisposedException]]: Object has been disposed



---
#### Method SetLength(System.Int64)

 Sets the length of the stream 

[[T:System.ArgumentOutOfRangeException|T:System.ArgumentOutOfRangeException]]: value is negative or larger than MaxStreamLength

[[T:System.ObjectDisposedException|T:System.ObjectDisposedException]]: Object has been disposed



---
#### Method Seek(System.Int64,System.IO.SeekOrigin)

 Sets the position to the offset from the seek location 

|Name | Description |
|-----|------|
|offset: |How many bytes to move|
|loc: |From where|
**Returns**: The new position

[[T:System.ObjectDisposedException|T:System.ObjectDisposedException]]: Object has been disposed

[[T:System.ArgumentOutOfRangeException|T:System.ArgumentOutOfRangeException]]: offset is larger than MaxStreamLength

[[T:System.ArgumentException|T:System.ArgumentException]]: Invalid seek origin

[[T:System.IO.IOException|T:System.IO.IOException]]: Attempt to set negative position



---
#### Method WriteTo(System.IO.Stream)

 Synchronously writes this stream's bytes to the parameter stream. 

|Name | Description |
|-----|------|
|stream: |Destination stream|


>Important: This does a synchronous write, which may not be desired in some situations



---
#### Method ReleaseLargeBuffer

 Release the large buffer (either stores it for eventual release or returns it immediately). 



---


