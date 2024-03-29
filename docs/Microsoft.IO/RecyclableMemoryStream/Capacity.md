# RecyclableMemoryStream.Capacity property

Gets or sets the capacity.

```csharp
public override int Capacity { get; set; }
```

## Exceptions

| exception | condition |
| --- | --- |
| ObjectDisposedException | Object has been disposed. |
| InvalidOperationException | Capacity is larger than int.MaxValue. |

## Remarks

Capacity is always in multiples of the memory manager's block size, unless the large buffer is in use. Capacity never decreases during a stream's lifetime. Explicitly setting the capacity to a lower value than the current value will have no effect. This is because the buffers are all pooled by chunks and there's little reason to allow stream truncation.

Writing past the current capacity will cause `Capacity` to automatically increase, until MaximumStreamCapacity is reached.

If the capacity is larger than `int.MaxValue`, then `InvalidOperationException` will be thrown. If you anticipate using larger streams, use the [`Capacity64`](./Capacity64.md) property instead.

## See Also

* class [RecyclableMemoryStream](../RecyclableMemoryStream.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

<!-- DO NOT EDIT: generated by xmldocmd for Microsoft.IO.RecyclableMemoryStream.dll -->
