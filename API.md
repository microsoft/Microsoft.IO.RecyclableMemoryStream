# Microsoft.IO.RecyclableMemoryStream.dll v.1.3.2.0 API documentation

Created by 
[mddox](https://github.com/loxsmoke/mddox) on 2/3/2020

# All types

|   |   |   |
|---|---|---|
| [BlockAndOffset Class](#blockandoffset-class) | [MemoryStreamBufferType Enum](#memorystreambuffertype-enum) | [StreamLengthReportHandler Class](#streamlengthreporthandler-class) |
| [EventHandler Class](#eventhandler-class) | [MemoryStreamDiscardReason Enum](#memorystreamdiscardreason-enum) | [UsageReportEventHandler Class](#usagereporteventhandler-class) |
| [Events Class](#events-class) | [RecyclableMemoryStream Class](#recyclablememorystream-class) |   |
| [LargeBufferDiscardedEventHandler Class](#largebufferdiscardedeventhandler-class) | [RecyclableMemoryStreamManager Class](#recyclablememorystreammanager-class) |   |
# BlockAndOffset Class

Namespace: Microsoft.IO

Base class: ValueType


## Constructors

| Name | Summary |
|---|---|
| **BlockAndOffset(int block, int offset)** |  |
## Fields

| Name | Type | Summary |
|---|---|---|
| **Block** | int |  |
| **Offset** | int |  |
# EventHandler Class

Namespace: Microsoft.IO

Base class: MulticastDelegate

Generic delegate for handling events without any arguments.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Method** | MethodInfo |  |
| **Target** | Object |  |
## Constructors

| Name | Summary |
|---|---|
| **EventHandler(Object object, IntPtr method)** |  |
## Methods

| Name | Returns | Summary |
|---|---|---|
| **BeginInvoke(AsyncCallback callback, Object object)** | IAsyncResult |  |
| **EndInvoke(IAsyncResult result)** | void |  |
| **Invoke()** | void |  |
# Events Class

Namespace: Microsoft.IO

Base class: EventSource


## Properties

| Name | Type | Summary |
|---|---|---|
| **Name** | string |  |
| **Guid** | Guid |  |
| **Settings** | EventSourceSettings |  |
| **ConstructionException** | Exception |  |
## Methods

| Name | Returns | Summary |
|---|---|---|
| **MemoryStreamCreated(Guid guid, string tag, int requestedSize)** | void |  |
| **MemoryStreamDiscardBuffer([MemoryStreamBufferType](#memorystreambuffertype-enum) bufferType, string tag, [MemoryStreamDiscardReason](#memorystreamdiscardreason-enum) reason)** | void |  |
| **MemoryStreamDisposed(Guid guid, string tag)** | void |  |
| **MemoryStreamDoubleDispose(Guid guid, string tag, string allocationStack, string disposeStack1, string disposeStack2)** | void |  |
| **MemoryStreamFinalized(Guid guid, string tag, string allocationStack)** | void |  |
| **MemoryStreamManagerInitialized(int blockSize, int largeBufferMultiple, int maximumBufferSize)** | void |  |
| **MemoryStreamNewBlockCreated(long smallPoolInUseBytes)** | void |  |
| **MemoryStreamNewLargeBufferCreated(int requiredSize, long largePoolInUseBytes)** | void |  |
| **MemoryStreamNonPooledLargeBufferCreated(int requiredSize, string tag, string allocationStack)** | void |  |
| **MemoryStreamOverCapacity(int requestedCapacity, long maxCapacity, string tag, string allocationStack)** | void |  |
| **MemoryStreamToArray(Guid guid, string tag, string stack, int size)** | void |  |
## Fields

| Name | Type | Summary |
|---|---|---|
| **Writer** | [Events](#events-class) |  |
# LargeBufferDiscardedEventHandler Class

Namespace: Microsoft.IO

Base class: MulticastDelegate

Delegate for handling large buffer discard reports.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Method** | MethodInfo |  |
| **Target** | Object |  |
## Constructors

| Name | Summary |
|---|---|
| **LargeBufferDiscardedEventHandler(Object object, IntPtr method)** |  |
## Methods

| Name | Returns | Summary |
|---|---|---|
| **BeginInvoke([MemoryStreamDiscardReason](#memorystreamdiscardreason-enum) reason, AsyncCallback callback, Object object)** | IAsyncResult |  |
| **EndInvoke(IAsyncResult result)** | void |  |
| **Invoke([MemoryStreamDiscardReason](#memorystreamdiscardreason-enum) reason)** | void |  |
# MemoryStreamBufferType Enum

Namespace: Microsoft.IO


## Values

| Name | Summary |
|---|---|
| **Small** |  |
| **Large** |  |
# MemoryStreamDiscardReason Enum

Namespace: Microsoft.IO


## Values

| Name | Summary |
|---|---|
| **TooLarge** |  |
| **EnoughFree** |  |
# RecyclableMemoryStream Class

Namespace: Microsoft.IO

Base class: MemoryStream

MemoryStream implementation that deals with pooling and managing memory streams which use potentially large
buffers.

## Remarks

This class works in tandem with the RecyclableMemoryStreamManager to supply MemoryStream
objects to callers, while avoiding these specific problems:
1. LOH allocations - since all large buffers are pooled, they will never incur a Gen2 GC
2. Memory waste - A standard memory stream doubles its size when it runs out of room. This
leads to continual memory growth as each stream approaches the maximum allowed size.
3. Memory copying - Each time a MemoryStream grows, all the bytes are copied into new buffers.
This implementation only copies the bytes when GetBuffer is called.
4. Memory fragmentation - By using homogeneous buffer sizes, it ensures that blocks of memory
can be easily reused.

The stream is implemented on top of a series of uniformly-sized blocks. As the stream's length grows,
additional blocks are retrieved from the memory manager. It is these blocks that are pooled, not the stream
object itself.

The biggest wrinkle in this implementation is when GetBuffer() is called. This requires a single 
contiguous buffer. If only a single block is in use, then that block is returned. If multiple blocks 
are in use, we retrieve a larger buffer from the memory manager. These large buffers are also pooled, 
split by size--they are multiples/exponentials of a chunk size (1 MB by default).

Once a large buffer is assigned to the stream the blocks are NEVER again used for this stream. All operations take place on the 
large buffer. The large buffer can be replaced by a larger buffer from the pool as needed. All blocks and large buffers 
are maintained in the stream until the stream is disposed (unless AggressiveBufferReturn is enabled in the stream manager).

## Properties

| Name | Type | Summary |
|---|---|---|
| **Id** | Guid | Unique identifier for this stream across it's entire lifetime |
| **Tag** | string | A temporary identifier for the current usage of this stream. |
| **MemoryManager** | [RecyclableMemoryStreamManager](#recyclablememorystreammanager-class) | Gets the memory manager being used by this stream. |
| **AllocationStack** | string | Callstack of the constructor. It is only set if MemoryManager.GenerateCallStacks is true,<br>which should only be in debugging situations. |
| **DisposeStack** | string | Callstack of the Dispose call. It is only set if MemoryManager.GenerateCallStacks is true,<br>which should only be in debugging situations. |
| **Capacity** | int | Gets or sets the capacity |
| **Length** | long | Gets the number of bytes written to this stream. |
| **Position** | long | Gets the current position in the stream |
| **CanRead** | bool | Whether the stream can currently read |
| **CanSeek** | bool | Whether the stream can currently seek |
| **CanTimeout** | bool | Always false |
| **CanWrite** | bool | Whether the stream can currently write |
| **Disposed** | bool |  |
| **ReadTimeout** | int |  |
| **WriteTimeout** | int |  |
## Constructors

| Name | Summary |
|---|---|
| **RecyclableMemoryStream([RecyclableMemoryStreamManager](#recyclablememorystreammanager-class) memoryManager)** | Allocate a new RecyclableMemoryStream object. |
| **RecyclableMemoryStream([RecyclableMemoryStreamManager](#recyclablememorystreammanager-class) memoryManager, Guid id)** | Allocate a new RecyclableMemoryStream object. |
| **RecyclableMemoryStream([RecyclableMemoryStreamManager](#recyclablememorystreammanager-class) memoryManager, string tag)** | Allocate a new RecyclableMemoryStream object |
| **RecyclableMemoryStream([RecyclableMemoryStreamManager](#recyclablememorystreammanager-class) memoryManager, Guid id, string tag)** | Allocate a new RecyclableMemoryStream object |
| **RecyclableMemoryStream([RecyclableMemoryStreamManager](#recyclablememorystreammanager-class) memoryManager, string tag, int requestedSize)** | Allocate a new RecyclableMemoryStream object |
| **RecyclableMemoryStream([RecyclableMemoryStreamManager](#recyclablememorystreammanager-class) memoryManager, Guid id, string tag, int requestedSize)** | Allocate a new RecyclableMemoryStream object |
## Methods

| Name | Returns | Summary |
|---|---|---|
| **Close()** | void | Equivalent to Dispose |
| **GetBuffer()** | byte[] | Returns a single buffer containing the contents of the stream.<br>The buffer may be longer than the stream length. |
| **Read(byte[] buffer, int offset, int count)** | int | Reads from the current position into the provided buffer |
| **ReadByte()** | int | Reads a single byte from the current position in the stream. |
| **SafeRead(byte[] buffer, int offset, int count, Int32& streamPosition)** | int | Reads from the specified position into the provided buffer |
| **SafeReadByte(Int32& streamPosition)** | int | Reads a single byte from the specified position in the stream. |
| **Seek(long offset, SeekOrigin loc)** | long | Sets the position to the offset from the seek location |
| **SetLength(long value)** | void | Sets the length of the stream |
| **ToArray()** | byte[] | Returns a new array with a copy of the buffer's contents. You should almost certainly be using GetBuffer combined with the Length to <br>access the bytes in this stream. Calling ToArray will destroy the benefits of pooled buffers, but it is included<br>for the sake of completeness. |
| **ToString()** | string | Returns a useful string for debugging. This should not normally be called in actual production code. |
| **TryGetBuffer(ArraySegment`1& buffer)** | bool | Returns an ArraySegment that wraps a single buffer containing the contents of the stream. |
| **Write(byte[] buffer, int offset, int count)** | void | Writes the buffer to the stream |
| **WriteByte(byte value)** | void | Writes a single byte to the current position in the stream. |
| **WriteTo(Stream stream)** | void | Synchronously writes this stream's bytes to the parameter stream. |
# RecyclableMemoryStreamManager Class

Namespace: Microsoft.IO

Manages pools of RecyclableMemoryStream objects.

## Remarks

There are two pools managed in here. The small pool contains same-sized buffers that are handed to streams
as they write more data.
            
For scenarios that need to call GetBuffer(), the large pool contains buffers of various sizes, all
multiples/exponentials of LargeBufferMultiple (1 MB by default). They are split by size to avoid overly-wasteful buffer
usage. There should be far fewer 8 MB buffers than 1 MB buffers, for example.

## Properties

| Name | Type | Summary |
|---|---|---|
| **BlockSize** | int | The size of each block. It must be set at creation and cannot be changed. |
| **LargeBufferMultiple** | int | All buffers are multiples/exponentials of this number. It must be set at creation and cannot be changed. |
| **UseMultipleLargeBuffer** | bool | Use multiple large buffer allocation strategy. It must be set at creation and cannot be changed. |
| **UseExponentialLargeBuffer** | bool | Use exponential large buffer allocation strategy. It must be set at creation and cannot be changed. |
| **MaximumBufferSize** | int | Gets the maximum buffer size. |
| **SmallPoolFreeSize** | long | Number of bytes in small pool not currently in use |
| **SmallPoolInUseSize** | long | Number of bytes currently in use by stream from the small pool |
| **LargePoolFreeSize** | long | Number of bytes in large pool not currently in use |
| **LargePoolInUseSize** | long | Number of bytes currently in use by streams from the large pool |
| **SmallBlocksFree** | long | How many blocks are in the small pool |
| **LargeBuffersFree** | long | How many buffers are in the large pool |
| **MaximumFreeSmallPoolBytes** | long | How many bytes of small free blocks to allow before we start dropping<br>those returned to us. |
| **MaximumFreeLargePoolBytes** | long | How many bytes of large free buffers to allow before we start dropping<br>those returned to us. |
| **MaximumStreamCapacity** | long | Maximum stream capacity in bytes. Attempts to set a larger capacity will<br>result in an exception. |
| **GenerateCallStacks** | bool | Whether to save callstacks for stream allocations. This can help in debugging.<br>It should NEVER be turned on generally in production. |
| **AggressiveBufferReturn** | bool | Whether dirty buffers can be immediately returned to the buffer pool. E.g. when GetBuffer() is called on<br>a stream and creates a single large buffer, if this setting is enabled, the other blocks will be returned<br>to the buffer pool immediately.<br>Note when enabling this setting that the user is responsible for ensuring that any buffer previously<br>retrieved from a stream which is subsequently modified is not used after modification (as it may no longer<br>be valid). |
## Constructors

| Name | Summary |
|---|---|
| **RecyclableMemoryStreamManager()** | Initializes the memory manager with the default block/buffer specifications. |
| **RecyclableMemoryStreamManager(int blockSize, int largeBufferMultiple, int maximumBufferSize)** | Initializes the memory manager with the given block requiredSize. |
| **RecyclableMemoryStreamManager(int blockSize, int largeBufferMultiple, int maximumBufferSize, bool useExponentialLargeBuffer)** | Initializes the memory manager with the given block requiredSize. |
## Methods

| Name | Returns | Summary |
|---|---|---|
| **GetStream()** | MemoryStream | Retrieve a new MemoryStream object with no tag and a default initial capacity. |
| **GetStream(Guid id)** | MemoryStream | Retrieve a new MemoryStream object with no tag and a default initial capacity. |
| **GetStream(string tag)** | MemoryStream | Retrieve a new MemoryStream object with the given tag and a default initial capacity. |
| **GetStream(byte[] buffer)** | MemoryStream | Retrieve a new MemoryStream object with the contents copied from the provided<br>buffer. The provided buffer is not wrapped or used after construction. |
| **GetStream(Guid id, string tag)** | MemoryStream | Retrieve a new MemoryStream object with the given tag and a default initial capacity. |
| **GetStream(string tag, int requiredSize)** | MemoryStream | Retrieve a new MemoryStream object with the given tag and at least the given capacity. |
| **GetStream(Guid id, string tag, int requiredSize)** | MemoryStream | Retrieve a new MemoryStream object with the given tag and at least the given capacity. |
| **GetStream(string tag, int requiredSize, bool asContiguousBuffer)** | MemoryStream | Retrieve a new MemoryStream object with the given tag and at least the given capacity, possibly using<br>a single contiguous underlying buffer. |
| **GetStream(Guid id, string tag, int requiredSize, bool asContiguousBuffer)** | MemoryStream | Retrieve a new MemoryStream object with the given tag and at least the given capacity, possibly using<br>a single contiguous underlying buffer. |
| **GetStream(string tag, byte[] buffer, int offset, int count)** | MemoryStream | Retrieve a new MemoryStream object with the given tag and with contents copied from the provided<br>buffer. The provided buffer is not wrapped or used after construction. |
| **GetStream(Guid id, string tag, byte[] buffer, int offset, int count)** | MemoryStream | Retrieve a new MemoryStream object with the given tag and with contents copied from the provided<br>buffer. The provided buffer is not wrapped or used after construction. |
## Fields

| Name | Type | Summary |
|---|---|---|
| **DefaultBlockSize** | int |  |
| **DefaultLargeBufferMultiple** | int |  |
| **DefaultMaximumBufferSize** | int |  |
# StreamLengthReportHandler Class

Namespace: Microsoft.IO

Base class: MulticastDelegate

Delegate for handling reports of stream size when streams are allocated

## Properties

| Name | Type | Summary |
|---|---|---|
| **Method** | MethodInfo |  |
| **Target** | Object |  |
## Constructors

| Name | Summary |
|---|---|
| **StreamLengthReportHandler(Object object, IntPtr method)** |  |
## Methods

| Name | Returns | Summary |
|---|---|---|
| **BeginInvoke(long bytes, AsyncCallback callback, Object object)** | IAsyncResult |  |
| **EndInvoke(IAsyncResult result)** | void |  |
| **Invoke(long bytes)** | void |  |
# UsageReportEventHandler Class

Namespace: Microsoft.IO

Base class: MulticastDelegate

Delegate for handling periodic reporting of memory use statistics.

## Properties

| Name | Type | Summary |
|---|---|---|
| **Method** | MethodInfo |  |
| **Target** | Object |  |
## Constructors

| Name | Summary |
|---|---|
| **UsageReportEventHandler(Object object, IntPtr method)** |  |
## Methods

| Name | Returns | Summary |
|---|---|---|
| **BeginInvoke(long smallPoolInUseBytes, long smallPoolFreeBytes, long largePoolInUseBytes, long largePoolFreeBytes, AsyncCallback callback, Object object)** | IAsyncResult |  |
| **EndInvoke(IAsyncResult result)** | void |  |
| **Invoke(long smallPoolInUseBytes, long smallPoolFreeBytes, long largePoolInUseBytes, long largePoolFreeBytes)** | void |  |
