# RecyclableMemoryStreamManager.GetStream method (1 of 17)

Retrieve a new `MemoryStream` object with no tag and a default initial capacity.

```csharp
public MemoryStream GetStream()
```

## Return Value

A `MemoryStream`.

## See Also

* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

---

# RecyclableMemoryStreamManager.GetStream method (2 of 17)

Retrieve a new `MemoryStream` object with the contents copied from the provided buffer. The provided buffer is not wrapped or used after construction.

```csharp
public MemoryStream GetStream(byte[] buffer)
```

| parameter | description |
| --- | --- |
| buffer | The byte buffer to copy data from. |

## Return Value

A `MemoryStream`.

## Remarks

The new stream's position is set to the beginning of the stream when returned.

## See Also

* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

---

# RecyclableMemoryStreamManager.GetStream method (3 of 17)

Retrieve a new `MemoryStream` object with no tag and a default initial capacity.

```csharp
public MemoryStream GetStream(Guid id)
```

| parameter | description |
| --- | --- |
| id | A unique identifier which can be used to trace usages of the stream. |

## Return Value

A `MemoryStream`.

## See Also

* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

---

# RecyclableMemoryStreamManager.GetStream method (4 of 17)

Retrieve a new `MemoryStream` object with the contents copied from the provided buffer. The provided buffer is not wrapped or used after construction.

```csharp
[Obsolete("Use the ReadOnlySpan<byte> version of this method instead.")]
public MemoryStream GetStream(Memory<byte> buffer)
```

| parameter | description |
| --- | --- |
| buffer | The byte buffer to copy data from. |

## Return Value

A `MemoryStream`.

## Remarks

The new stream's position is set to the beginning of the stream when returned.

## See Also

* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

---

# RecyclableMemoryStreamManager.GetStream method (5 of 17)

Retrieve a new `MemoryStream` object with the contents copied from the provided buffer. The provided buffer is not wrapped or used after construction.

```csharp
public MemoryStream GetStream(ReadOnlySpan<byte> buffer)
```

| parameter | description |
| --- | --- |
| buffer | The byte buffer to copy data from. |

## Return Value

A `MemoryStream`.

## Remarks

The new stream's position is set to the beginning of the stream when returned.

## See Also

* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

---

# RecyclableMemoryStreamManager.GetStream method (6 of 17)

Retrieve a new `MemoryStream` object with the given tag and a default initial capacity.

```csharp
public MemoryStream GetStream(string tag)
```

| parameter | description |
| --- | --- |
| tag | A tag which can be used to track the source of the stream. |

## Return Value

A `MemoryStream`.

## See Also

* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

---

# RecyclableMemoryStreamManager.GetStream method (7 of 17)

Retrieve a new `MemoryStream` object with the given tag and a default initial capacity.

```csharp
public MemoryStream GetStream(Guid id, string tag)
```

| parameter | description |
| --- | --- |
| id | A unique identifier which can be used to trace usages of the stream. |
| tag | A tag which can be used to track the source of the stream. |

## Return Value

A `MemoryStream`.

## See Also

* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

---

# RecyclableMemoryStreamManager.GetStream method (8 of 17)

Retrieve a new `MemoryStream` object with the given tag and at least the given capacity.

```csharp
public MemoryStream GetStream(string tag, int requiredSize)
```

| parameter | description |
| --- | --- |
| tag | A tag which can be used to track the source of the stream. |
| requiredSize | The minimum desired capacity for the stream. |

## Return Value

A `MemoryStream`.

## See Also

* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

---

# RecyclableMemoryStreamManager.GetStream method (9 of 17)

Retrieve a new `MemoryStream` object with the given tag and with contents copied from the provided buffer. The provided buffer is not wrapped or used after construction.

```csharp
[Obsolete("Use the ReadOnlySpan<byte> version of this method instead.")]
public MemoryStream GetStream(string tag, Memory<byte> buffer)
```

| parameter | description |
| --- | --- |
| tag | A tag which can be used to track the source of the stream. |
| buffer | The byte buffer to copy data from. |

## Return Value

A `MemoryStream`.

## Remarks

The new stream's position is set to the beginning of the stream when returned.

## See Also

* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

---

# RecyclableMemoryStreamManager.GetStream method (10 of 17)

Retrieve a new `MemoryStream` object with the given tag and with contents copied from the provided buffer. The provided buffer is not wrapped or used after construction.

```csharp
public MemoryStream GetStream(string tag, ReadOnlySpan<byte> buffer)
```

| parameter | description |
| --- | --- |
| tag | A tag which can be used to track the source of the stream. |
| buffer | The byte buffer to copy data from. |

## Return Value

A `MemoryStream`.

## Remarks

The new stream's position is set to the beginning of the stream when returned.

## See Also

* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

---

# RecyclableMemoryStreamManager.GetStream method (11 of 17)

Retrieve a new `MemoryStream` object with the given tag and at least the given capacity.

```csharp
public MemoryStream GetStream(Guid id, string tag, int requiredSize)
```

| parameter | description |
| --- | --- |
| id | A unique identifier which can be used to trace usages of the stream. |
| tag | A tag which can be used to track the source of the stream. |
| requiredSize | The minimum desired capacity for the stream. |

## Return Value

A `MemoryStream`.

## See Also

* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

---

# RecyclableMemoryStreamManager.GetStream method (12 of 17)

Retrieve a new `MemoryStream` object with the given tag and with contents copied from the provided buffer. The provided buffer is not wrapped or used after construction.

```csharp
[Obsolete("Use the ReadOnlySpan<byte> version of this method instead.")]
public MemoryStream GetStream(Guid id, string tag, Memory<byte> buffer)
```

| parameter | description |
| --- | --- |
| id | A unique identifier which can be used to trace usages of the stream. |
| tag | A tag which can be used to track the source of the stream. |
| buffer | The byte buffer to copy data from. |

## Return Value

A `MemoryStream`.

## Remarks

The new stream's position is set to the beginning of the stream when returned.

## See Also

* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

---

# RecyclableMemoryStreamManager.GetStream method (13 of 17)

Retrieve a new `MemoryStream` object with the given tag and with contents copied from the provided buffer. The provided buffer is not wrapped or used after construction.

```csharp
public MemoryStream GetStream(Guid id, string tag, ReadOnlySpan<byte> buffer)
```

| parameter | description |
| --- | --- |
| id | A unique identifier which can be used to trace usages of the stream. |
| tag | A tag which can be used to track the source of the stream. |
| buffer | The byte buffer to copy data from. |

## Return Value

A `MemoryStream`.

## Remarks

The new stream's position is set to the beginning of the stream when returned.

## See Also

* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

---

# RecyclableMemoryStreamManager.GetStream method (14 of 17)

Retrieve a new `MemoryStream` object with the given tag and at least the given capacity, possibly using a single contiguous underlying buffer.

```csharp
public MemoryStream GetStream(string tag, int requiredSize, bool asContiguousBuffer)
```

| parameter | description |
| --- | --- |
| tag | A tag which can be used to track the source of the stream. |
| requiredSize | The minimum desired capacity for the stream. |
| asContiguousBuffer | Whether to attempt to use a single contiguous buffer. |

## Return Value

A `MemoryStream`.

## Remarks

Retrieving a MemoryStream which provides a single contiguous buffer can be useful in situations where the initial size is known and it is desirable to avoid copying data between the smaller underlying buffers to a single large one. This is most helpful when you know that you will always call [`GetBuffer`](../RecyclableMemoryStream/GetBuffer.md) on the underlying stream.

## See Also

* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

---

# RecyclableMemoryStreamManager.GetStream method (15 of 17)

Retrieve a new `MemoryStream` object with the given tag and at least the given capacity, possibly using a single contiguous underlying buffer.

```csharp
public MemoryStream GetStream(Guid id, string tag, int requiredSize, bool asContiguousBuffer)
```

| parameter | description |
| --- | --- |
| id | A unique identifier which can be used to trace usages of the stream. |
| tag | A tag which can be used to track the source of the stream. |
| requiredSize | The minimum desired capacity for the stream. |
| asContiguousBuffer | Whether to attempt to use a single contiguous buffer. |

## Return Value

A `MemoryStream`.

## Remarks

Retrieving a `MemoryStream` which provides a single contiguous buffer can be useful in situations where the initial size is known and it is desirable to avoid copying data between the smaller underlying buffers to a single large one. This is most helpful when you know that you will always call [`GetBuffer`](../RecyclableMemoryStream/GetBuffer.md) on the underlying stream.

## See Also

* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

---

# RecyclableMemoryStreamManager.GetStream method (16 of 17)

Retrieve a new `MemoryStream` object with the given tag and with contents copied from the provided buffer. The provided buffer is not wrapped or used after construction.

```csharp
public MemoryStream GetStream(string tag, byte[] buffer, int offset, int count)
```

| parameter | description |
| --- | --- |
| tag | A tag which can be used to track the source of the stream. |
| buffer | The byte buffer to copy data from. |
| offset | The offset from the start of the buffer to copy from. |
| count | The number of bytes to copy from the buffer. |

## Return Value

A `MemoryStream`.

## Remarks

The new stream's position is set to the beginning of the stream when returned.

## See Also

* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

---

# RecyclableMemoryStreamManager.GetStream method (17 of 17)

Retrieve a new `MemoryStream` object with the given tag and with contents copied from the provided buffer. The provided buffer is not wrapped or used after construction.

```csharp
public MemoryStream GetStream(Guid id, string tag, byte[] buffer, int offset, int count)
```

| parameter | description |
| --- | --- |
| id | A unique identifier which can be used to trace usages of the stream. |
| tag | A tag which can be used to track the source of the stream. |
| buffer | The byte buffer to copy data from. |
| offset | The offset from the start of the buffer to copy from. |
| count | The number of bytes to copy from the buffer. |

## Return Value

A `MemoryStream`.

## Remarks

The new stream's position is set to the beginning of the stream when returned.

## See Also

* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

<!-- DO NOT EDIT: generated by xmldocmd for Microsoft.IO.RecyclableMemoryStream.dll -->
