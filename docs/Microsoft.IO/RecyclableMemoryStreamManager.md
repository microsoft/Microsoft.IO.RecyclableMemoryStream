# RecyclableMemoryStreamManager class

Manages pools of [`RecyclableMemoryStream`](RecyclableMemoryStream.md) objects.

```csharp
public sealed class RecyclableMemoryStreamManager
```

## Public Members

| name | description |
| --- | --- |
| [RecyclableMemoryStreamManager](RecyclableMemoryStreamManager/RecyclableMemoryStreamManager.md)() | Initializes the memory manager with the default block/buffer specifications. |
| [RecyclableMemoryStreamManager](RecyclableMemoryStreamManager/RecyclableMemoryStreamManager.md)(…) | Initializes the memory manager with the given block requiredSize. (2 constructors) |
| [AggressiveBufferReturn](RecyclableMemoryStreamManager/AggressiveBufferReturn.md) { get; set; } | Whether dirty buffers can be immediately returned to the buffer pool. |
| [BlockSize](RecyclableMemoryStreamManager/BlockSize.md) { get; } | The size of each block. It must be set at creation and cannot be changed. |
| [GenerateCallStacks](RecyclableMemoryStreamManager/GenerateCallStacks.md) { get; set; } | Whether to save callstacks for stream allocations. This can help in debugging. It should NEVER be turned on generally in production. |
| [LargeBufferMultiple](RecyclableMemoryStreamManager/LargeBufferMultiple.md) { get; } | All buffers are multiples/exponentials of this number. It must be set at creation and cannot be changed. |
| [LargeBuffersFree](RecyclableMemoryStreamManager/LargeBuffersFree.md) { get; } | How many buffers are in the large pool |
| [LargePoolFreeSize](RecyclableMemoryStreamManager/LargePoolFreeSize.md) { get; } | Number of bytes in large pool not currently in use |
| [LargePoolInUseSize](RecyclableMemoryStreamManager/LargePoolInUseSize.md) { get; } | Number of bytes currently in use by streams from the large pool |
| [MaximumBufferSize](RecyclableMemoryStreamManager/MaximumBufferSize.md) { get; } | Gets the maximum buffer size. |
| [MaximumFreeLargePoolBytes](RecyclableMemoryStreamManager/MaximumFreeLargePoolBytes.md) { get; set; } | How many bytes of large free buffers to allow before we start dropping those returned to us. |
| [MaximumFreeSmallPoolBytes](RecyclableMemoryStreamManager/MaximumFreeSmallPoolBytes.md) { get; set; } | How many bytes of small free blocks to allow before we start dropping those returned to us. |
| [MaximumStreamCapacity](RecyclableMemoryStreamManager/MaximumStreamCapacity.md) { get; set; } | Maximum stream capacity in bytes. Attempts to set a larger capacity will result in an exception. |
| [SmallBlocksFree](RecyclableMemoryStreamManager/SmallBlocksFree.md) { get; } | How many blocks are in the small pool |
| [SmallPoolFreeSize](RecyclableMemoryStreamManager/SmallPoolFreeSize.md) { get; } | Number of bytes in small pool not currently in use |
| [SmallPoolInUseSize](RecyclableMemoryStreamManager/SmallPoolInUseSize.md) { get; } | Number of bytes currently in use by stream from the small pool |
| [ThrowExceptionOnToArray](RecyclableMemoryStreamManager/ThrowExceptionOnToArray.md) { get; set; } | Causes an exception to be thrown if [`ToArray`](RecyclableMemoryStream/ToArray.md) is ever called. |
| [UseExponentialLargeBuffer](RecyclableMemoryStreamManager/UseExponentialLargeBuffer.md) { get; } | Use exponential large buffer allocation strategy. It must be set at creation and cannot be changed. |
| [UseMultipleLargeBuffer](RecyclableMemoryStreamManager/UseMultipleLargeBuffer.md) { get; } | Use multiple large buffer allocation strategy. It must be set at creation and cannot be changed. |
| event [BlockCreated](RecyclableMemoryStreamManager/BlockCreated.md) | Triggered when a new block is created. |
| event [BufferDiscarded](RecyclableMemoryStreamManager/BufferDiscarded.md) | Triggered when a buffer of either type is discarded, along with the reason for the discard. |
| event [LargeBufferCreated](RecyclableMemoryStreamManager/LargeBufferCreated.md) | Triggered when a new large buffer is created. |
| event [StreamConvertedToArray](RecyclableMemoryStreamManager/StreamConvertedToArray.md) | Triggered when a user converts a stream to array. |
| event [StreamCreated](RecyclableMemoryStreamManager/StreamCreated.md) | Triggered when a new stream is created. |
| event [StreamDisposed](RecyclableMemoryStreamManager/StreamDisposed.md) | Triggered when a stream is disposed. |
| event [StreamDoubleDisposed](RecyclableMemoryStreamManager/StreamDoubleDisposed.md) | Triggered when a stream is disposed of twice (an error). |
| event [StreamFinalized](RecyclableMemoryStreamManager/StreamFinalized.md) | Triggered when a stream is finalized. |
| event [StreamLength](RecyclableMemoryStreamManager/StreamLength.md) | Triggered when a stream is finalized. |
| event [StreamOverCapacity](RecyclableMemoryStreamManager/StreamOverCapacity.md) | Triggered when a stream is requested to expand beyond the maximum length specified by the responsible RecyclableMemoryStreamManager. |
| event [UsageReport](RecyclableMemoryStreamManager/UsageReport.md) | Periodically triggered to report usage statistics. |
| [GetStream](RecyclableMemoryStreamManager/GetStream.md)() | Retrieve a new `MemoryStream` object with no tag and a default initial capacity. |
| [GetStream](RecyclableMemoryStreamManager/GetStream.md)(…) | Retrieve a new `MemoryStream` object with no tag and a default initial capacity. (13 methods) |
| const [DefaultBlockSize](RecyclableMemoryStreamManager/DefaultBlockSize.md) | Default block size, in bytes |
| const [DefaultLargeBufferMultiple](RecyclableMemoryStreamManager/DefaultLargeBufferMultiple.md) | Default large buffer multiple, in bytes |
| const [DefaultMaximumBufferSize](RecyclableMemoryStreamManager/DefaultMaximumBufferSize.md) | Default maximum buffer size, in bytes |
| class [BlockCreatedEventArgs](RecyclableMemoryStreamManager.BlockCreatedEventArgs.md) | Arguments for BlockCreated event |
| class [BufferDiscardedEventArgs](RecyclableMemoryStreamManager.BufferDiscardedEventArgs.md) | Arguments for the BufferDiscarded event |
| class [Events](RecyclableMemoryStreamManager.Events.md) | ETW events for RecyclableMemoryStream |
| class [LargeBufferCreatedEventArgs](RecyclableMemoryStreamManager.LargeBufferCreatedEventArgs.md) | Arguments for the LargeBufferCreated events |
| class [StreamConvertedToArrayEventArgs](RecyclableMemoryStreamManager.StreamConvertedToArrayEventArgs.md) | Arguments for the StreamConvertedToArray event |
| class [StreamCreatedEventArgs](RecyclableMemoryStreamManager.StreamCreatedEventArgs.md) | Arguments for the StreamCreated event |
| class [StreamDisposedEventArgs](RecyclableMemoryStreamManager.StreamDisposedEventArgs.md) | Arguments for the StreamDisposed event |
| class [StreamDoubleDisposedEventArgs](RecyclableMemoryStreamManager.StreamDoubleDisposedEventArgs.md) | Arguments for the StreamDoubleDisposed event |
| class [StreamFinalizedEventArgs](RecyclableMemoryStreamManager.StreamFinalizedEventArgs.md) | Arguments for the StreamFinalized event |
| class [StreamLengthEventArgs](RecyclableMemoryStreamManager.StreamLengthEventArgs.md) | Arguments for the StreamLength event |
| class [StreamOverCapacityEventArgs](RecyclableMemoryStreamManager.StreamOverCapacityEventArgs.md) | Arguments for the StreamOverCapacity event |
| class [UsageReportEventArgs](RecyclableMemoryStreamManager.UsageReportEventArgs.md) | Arguments for the UsageReport event |

## Remarks

There are two pools managed in here. The small pool contains same-sized buffers that are handed to streams as they write more data.

For scenarios that need to call [`GetBuffer`](RecyclableMemoryStream/GetBuffer.md), the large pool contains buffers of various sizes, all multiples/exponentials of [`LargeBufferMultiple`](RecyclableMemoryStreamManager/LargeBufferMultiple.md) (1 MB by default). They are split by size to avoid overly-wasteful buffer usage. There should be far fewer 8 MB buffers than 1 MB buffers, for example.

## See Also

* namespace [Microsoft.IO](../Microsoft.IO.RecyclableMemoryStream.md)

<!-- DO NOT EDIT: generated by xmldocmd for Microsoft.IO.RecyclableMemoryStream.dll -->
