# RecyclableMemoryStreamManager.Events.MemoryStreamDiscardReason enumeration

The possible reasons for discarding a buffer.

```csharp
public enum MemoryStreamDiscardReason
```

## Values

| name | value | description |
| --- | --- | --- |
| TooLarge | `0` | Buffer was too large to be re-pooled. |
| EnoughFree | `1` | There are enough free bytes in the pool. |

## See Also

* class [Events](./RecyclableMemoryStreamManager.Events.md)
* namespace [Microsoft.IO](../Microsoft.IO.RecyclableMemoryStream.md)

<!-- DO NOT EDIT: generated by xmldocmd for Microsoft.IO.RecyclableMemoryStream.dll -->
