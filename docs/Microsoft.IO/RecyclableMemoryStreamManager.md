# RecyclableMemoryStreamManager class

Manages pools of [`RecyclableMemoryStream`](./RecyclableMemoryStream.md) objects.

```csharp
public sealed class RecyclableMemoryStreamManager
```

## Public Members

| name | description |
| --- | --- |
| [RecyclableMemoryStreamManager](RecyclableMemoryStreamManager/RecyclableMemoryStreamManager.md)() | Initializes the memory manager with the default block/buffer specifications. This pool may have unbounded growth unless you modify [`Options`](./RecyclableMemoryStreamManager.Options.md). |
| [RecyclableMemoryStreamManager](RecyclableMemoryStreamManager/RecyclableMemoryStreamManager.md)(…) | Initializes the memory manager with the given block requiredSize. |
| [LargeBuffersFree](RecyclableMemoryStreamManager/LargeBuffersFree.md) { get; } | How many buffers are in the large pool. |
| [LargePoolFreeSize](RecyclableMemoryStreamManager/LargePoolFreeSize.md) { get; } | Number of bytes in large pool not currently in use. |
| [LargePoolInUseSize](RecyclableMemoryStreamManager/LargePoolInUseSize.md) { get; } | Number of bytes currently in use by streams from the large pool. |
| [Settings](RecyclableMemoryStreamManager/Settings.md) { get; } | Settings for controlling the behavior of RecyclableMemoryStream |
| [SmallBlocksFree](RecyclableMemoryStreamManager/SmallBlocksFree.md) { get; } | How many blocks are in the small pool. |
| [SmallPoolFreeSize](RecyclableMemoryStreamManager/SmallPoolFreeSize.md) { get; } | Number of bytes in small pool not currently in use. |
| [SmallPoolInUseSize](RecyclableMemoryStreamManager/SmallPoolInUseSize.md) { get; } | Number of bytes currently in use by stream from the small pool. |
| event [BlockCreated](RecyclableMemoryStreamManager/BlockCreated.md) | Triggered when a new block is created. |
| event [BufferDiscarded](RecyclableMemoryStreamManager/BufferDiscarded.md) | Triggered when a buffer of either type is discarded, along with the reason for the discard. |
| event [LargeBufferCreated](RecyclableMemoryStreamManager/LargeBufferCreated.md) | Triggered when a new large buffer is created. |
| event [StreamConvertedToArray](RecyclableMemoryStreamManager/StreamConvertedToArray.md) | Triggered when a user converts a stream to array. |
| event [StreamCreated](RecyclableMemoryStreamManager/StreamCreated.md) | Triggered when a new stream is created. |
| event [StreamDisposed](RecyclableMemoryStreamManager/StreamDisposed.md) | Triggered when a stream is disposed. |
| event [StreamDoubleDisposed](RecyclableMemoryStreamManager/StreamDoubleDisposed.md) | Triggered when a stream is disposed of twice (an error). |
| event [StreamFinalized](RecyclableMemoryStreamManager/StreamFinalized.md) | Triggered when a stream is finalized. |
| event [StreamLength](RecyclableMemoryStreamManager/StreamLength.md) | Triggered when a stream is disposed to report the stream's length. |
| event [StreamOverCapacity](RecyclableMemoryStreamManager/StreamOverCapacity.md) | Triggered when a stream is requested to expand beyond the maximum length specified by the responsible RecyclableMemoryStreamManager. |
| event [UsageReport](RecyclableMemoryStreamManager/UsageReport.md) | Periodically triggered to report usage statistics. |
| [GetStream](RecyclableMemoryStreamManager/GetStream.md)() | Retrieve a new [`RecyclableMemoryStream`](./RecyclableMemoryStream.md) object with no tag and a default initial capacity. |
| [GetStream](RecyclableMemoryStreamManager/GetStream.md)(…) | Retrieve a new [`RecyclableMemoryStream`](./RecyclableMemoryStream.md) object with no tag and a default initial capacity. (13 methods) |
| const [DefaultBlockSize](RecyclableMemoryStreamManager/DefaultBlockSize.md) | Default block size, in bytes. |
| const [DefaultLargeBufferMultiple](RecyclableMemoryStreamManager/DefaultLargeBufferMultiple.md) | Default large buffer multiple, in bytes. |
| const [DefaultMaximumBufferSize](RecyclableMemoryStreamManager/DefaultMaximumBufferSize.md) | Default maximum buffer size, in bytes. |
| class [BlockCreatedEventArgs](RecyclableMemoryStreamManager.BlockCreatedEventArgs.md) | Arguments for the [`BlockCreated`](./RecyclableMemoryStreamManager/BlockCreated.md) event. |
| class [BufferDiscardedEventArgs](RecyclableMemoryStreamManager.BufferDiscardedEventArgs.md) | Arguments for the [`BufferDiscarded`](./RecyclableMemoryStreamManager/BufferDiscarded.md) event. |
| class [Events](RecyclableMemoryStreamManager.Events.md) | ETW events for RecyclableMemoryStream. |
| class [LargeBufferCreatedEventArgs](RecyclableMemoryStreamManager.LargeBufferCreatedEventArgs.md) | Arguments for the [`LargeBufferCreated`](./RecyclableMemoryStreamManager/LargeBufferCreated.md) events. |
| class [Options](RecyclableMemoryStreamManager.Options.md) | Parameters for customizing the behavior of [`RecyclableMemoryStreamManager`](./RecyclableMemoryStreamManager.md) |
| class [StreamConvertedToArrayEventArgs](RecyclableMemoryStreamManager.StreamConvertedToArrayEventArgs.md) | Arguments for the [`StreamConvertedToArray`](./RecyclableMemoryStreamManager/StreamConvertedToArray.md) event. |
| class [StreamCreatedEventArgs](RecyclableMemoryStreamManager.StreamCreatedEventArgs.md) | Arguments for the [`StreamCreated`](./RecyclableMemoryStreamManager/StreamCreated.md) event. |
| class [StreamDisposedEventArgs](RecyclableMemoryStreamManager.StreamDisposedEventArgs.md) | Arguments for the [`StreamDisposed`](./RecyclableMemoryStreamManager/StreamDisposed.md) event. |
| class [StreamDoubleDisposedEventArgs](RecyclableMemoryStreamManager.StreamDoubleDisposedEventArgs.md) | Arguments for the [`StreamDoubleDisposed`](./RecyclableMemoryStreamManager/StreamDoubleDisposed.md) event. |
| class [StreamFinalizedEventArgs](RecyclableMemoryStreamManager.StreamFinalizedEventArgs.md) | Arguments for the [`StreamFinalized`](./RecyclableMemoryStreamManager/StreamFinalized.md) event. |
| class [StreamLengthEventArgs](RecyclableMemoryStreamManager.StreamLengthEventArgs.md) | Arguments for the [`StreamLength`](./RecyclableMemoryStreamManager/StreamLength.md) event. |
| class [StreamOverCapacityEventArgs](RecyclableMemoryStreamManager.StreamOverCapacityEventArgs.md) | Arguments for the [`StreamOverCapacity`](./RecyclableMemoryStreamManager/StreamOverCapacity.md) event. |
| class [UsageReportEventArgs](RecyclableMemoryStreamManager.UsageReportEventArgs.md) | Arguments for the [`UsageReport`](./RecyclableMemoryStreamManager/UsageReport.md) event. |

## Remarks

There are two pools managed in here. The small pool contains same-sized buffers that are handed to streams as they write more data.

For scenarios that need to call [`GetBuffer`](./RecyclableMemoryStream/GetBuffer.md), the large pool contains buffers of various sizes, all multiples/exponentials of [`LargeBufferMultiple`](./RecyclableMemoryStreamManager.Options/LargeBufferMultiple.md) (1 MB by default). They are split by size to avoid overly-wasteful buffer usage. There should be far fewer 8 MB buffers than 1 MB buffers, for example.

## See Also

* namespace [Microsoft.IO](../Microsoft.IO.RecyclableMemoryStream.md)

<!-- DO NOT EDIT: generated by xmldocmd for Microsoft.IO.RecyclableMemoryStream.dll -->
