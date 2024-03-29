# RecyclableMemoryStreamManager.Options.MaximumSmallPoolFreeBytes property

Maximum number of bytes to keep available in the small pool.

```csharp
public long MaximumSmallPoolFreeBytes { get; set; }
```

## Remarks

Trying to return buffers to the pool beyond this limit will result in them being garbage collected.

The default value is 0, but all users should set a reasonable value depending on your application's memory requirements.

## See Also

* class [Options](../RecyclableMemoryStreamManager.Options.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

<!-- DO NOT EDIT: generated by xmldocmd for Microsoft.IO.RecyclableMemoryStream.dll -->
