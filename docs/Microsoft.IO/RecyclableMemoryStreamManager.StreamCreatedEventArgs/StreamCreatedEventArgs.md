# RecyclableMemoryStreamManager.StreamCreatedEventArgs constructor

Arguments for the [`StreamCreated`](../RecyclableMemoryStreamManager/StreamCreated.md) event.

```csharp
public StreamCreatedEventArgs(Guid guid, string? tag, long requestedSize, long actualSize)
```

| parameter | description |
| --- | --- |
| guid | Unique ID of the stream. |
| tag | Tag of the stream. |
| requestedSize | The requested stream size. |
| actualSize | The actual stream size. |

## Remarks

Initializes a new instance of the [`StreamCreatedEventArgs`](../RecyclableMemoryStreamManager.StreamCreatedEventArgs.md) class.

## See Also

* class [StreamCreatedEventArgs](../RecyclableMemoryStreamManager.StreamCreatedEventArgs.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

<!-- DO NOT EDIT: generated by xmldocmd for Microsoft.IO.RecyclableMemoryStream.dll -->
