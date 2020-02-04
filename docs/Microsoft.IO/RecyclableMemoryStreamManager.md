# RecyclableMemoryStreamManager class

Manages pools of RecyclableMemoryStream objects.

```csharp
public sealed class RecyclableMemoryStreamManager
```

## Public Members

| name | description |
| --- | --- |
| [RecyclableMemoryStreamManager](RecyclableMemoryStreamManager/RecyclableMemoryStreamManager.md)() | Initializes the memory manager with the default block/buffer specifications. |
| [RecyclableMemoryStreamManager](RecyclableMemoryStreamManager/RecyclableMemoryStreamManager.md)(…) | Initializes the memory manager with the given block requiredSize. (2 constructors) |
| [AggressiveBufferReturn](RecyclableMemoryStreamManager/AggressiveBufferReturn.md) { get; set; } | Whether dirty buffers can be immediately returned to the buffer pool. E.g. when GetBuffer() is called on a stream and creates a single large buffer, if this setting is enabled, the other blocks will be returned to the buffer pool immediately. Note when enabling this setting that the user is responsible for ensuring that any buffer previously retrieved from a stream which is subsequently modified is not used after modification (as it may no longer be valid). |
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
| [UseExponentialLargeBuffer](RecyclableMemoryStreamManager/UseExponentialLargeBuffer.md) { get; } | Use exponential large buffer allocation strategy. It must be set at creation and cannot be changed. |
| [UseMultipleLargeBuffer](RecyclableMemoryStreamManager/UseMultipleLargeBuffer.md) { get; } | Use multiple large buffer allocation strategy. It must be set at creation and cannot be changed. |
| event [BlockCreated](RecyclableMemoryStreamManager/BlockCreated.md) | Triggered when a new block is created. |
| event [BlockDiscarded](RecyclableMemoryStreamManager/BlockDiscarded.md) | Triggered when a new block is created. |
| event [LargeBufferCreated](RecyclableMemoryStreamManager/LargeBufferCreated.md) | Triggered when a new large buffer is created. |
| event [LargeBufferDiscarded](RecyclableMemoryStreamManager/LargeBufferDiscarded.md) | Triggered when a large buffer is discarded, along with the reason for the discard. |
| event [StreamConvertedToArray](RecyclableMemoryStreamManager/StreamConvertedToArray.md) | Triggered when a user converts a stream to array. |
| event [StreamCreated](RecyclableMemoryStreamManager/StreamCreated.md) | Triggered when a new stream is created. |
| event [StreamDisposed](RecyclableMemoryStreamManager/StreamDisposed.md) | Triggered when a stream is disposed. |
| event [StreamFinalized](RecyclableMemoryStreamManager/StreamFinalized.md) | Triggered when a stream is finalized. |
| event [StreamLength](RecyclableMemoryStreamManager/StreamLength.md) | Triggered when a stream is finalized. |
| event [UsageReport](RecyclableMemoryStreamManager/UsageReport.md) | Periodically triggered to report usage statistics. |
| [GetStream](RecyclableMemoryStreamManager/GetStream.md)() | Retrieve a new MemoryStream object with no tag and a default initial capacity. |
| [GetStream](RecyclableMemoryStreamManager/GetStream.md)(…) | Retrieve a new MemoryStream object with no tag and a default initial capacity. (10 methods) |
| const [DefaultBlockSize](RecyclableMemoryStreamManager/DefaultBlockSize.md) |  |
| const [DefaultLargeBufferMultiple](RecyclableMemoryStreamManager/DefaultLargeBufferMultiple.md) |  |
| const [DefaultMaximumBufferSize](RecyclableMemoryStreamManager/DefaultMaximumBufferSize.md) |  |
| delegate [EventHandler](RecyclableMemoryStreamManager.EventHandler.md) | Generic delegate for handling events without any arguments. |
| class [Events](RecyclableMemoryStreamManager.Events.md) |  |
| delegate [LargeBufferDiscardedEventHandler](RecyclableMemoryStreamManager.LargeBufferDiscardedEventHandler.md) | Delegate for handling large buffer discard reports. |
| delegate [StreamLengthReportHandler](RecyclableMemoryStreamManager.StreamLengthReportHandler.md) | Delegate for handling reports of stream size when streams are allocated |
| delegate [UsageReportEventHandler](RecyclableMemoryStreamManager.UsageReportEventHandler.md) | Delegate for handling periodic reporting of memory use statistics. |

## Remarks

There are two pools managed in here. The small pool contains same-sized buffers that are handed to streams as they write more data. For scenarios that need to call GetBuffer(), the large pool contains buffers of various sizes, all multiples/exponentials of LargeBufferMultiple (1 MB by default). They are split by size to avoid overly-wasteful buffer usage. There should be far fewer 8 MB buffers than 1 MB buffers, for example.

## See Also

* namespace [Microsoft.IO](../Microsoft.IO.RecyclableMemoryStream.md)

<!-- DO NOT EDIT: generated by xmldocmd for Microsoft.IO.RecyclableMemoryStream.dll -->
