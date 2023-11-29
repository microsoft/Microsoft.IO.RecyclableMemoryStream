# RecyclableMemoryStreamManager.GetStream method (1 of 14)

Retrieve a new [`RecyclableMemoryStream`](../RecyclableMemoryStream.md) object with no tag and a default initial capacity.

```csharp
public RecyclableMemoryStream GetStream()
```

## Return Value

A [`RecyclableMemoryStream`](../RecyclableMemoryStream.md).

## See Also

* class [RecyclableMemoryStream](../RecyclableMemoryStream.md)
* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

---

# RecyclableMemoryStreamManager.GetStream method (2 of 14)

Retrieve a new [`RecyclableMemoryStream`](../RecyclableMemoryStream.md) object with the contents copied from the provided buffer. The provided buffer is not wrapped or used after construction.

```csharp
public RecyclableMemoryStream GetStream(byte[] buffer)
```

| parameter | description |
| --- | --- |
| buffer | The byte buffer to copy data from. |

## Return Value

A [`RecyclableMemoryStream`](../RecyclableMemoryStream.md).

## Remarks

The new stream's position is set to the beginning of the stream when returned.

## See Also

* class [RecyclableMemoryStream](../RecyclableMemoryStream.md)
* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

---

# RecyclableMemoryStreamManager.GetStream method (3 of 14)

Retrieve a new [`RecyclableMemoryStream`](../RecyclableMemoryStream.md) object with no tag and a default initial capacity.

```csharp
public RecyclableMemoryStream GetStream(Guid id)
```

| parameter | description |
| --- | --- |
| id | A unique identifier which can be used to trace usages of the stream. |

## Return Value

A [`RecyclableMemoryStream`](../RecyclableMemoryStream.md).

## See Also

* class [RecyclableMemoryStream](../RecyclableMemoryStream.md)
* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

---

# RecyclableMemoryStreamManager.GetStream method (4 of 14)

Retrieve a new [`RecyclableMemoryStream`](../RecyclableMemoryStream.md) object with the contents copied from the provided buffer. The provided buffer is not wrapped or used after construction.

```csharp
public RecyclableMemoryStream GetStream(ReadOnlySpan<byte> buffer)
```

| parameter | description |
| --- | --- |
| buffer | The byte buffer to copy data from. |

## Return Value

A [`RecyclableMemoryStream`](../RecyclableMemoryStream.md).

## Remarks

The new stream's position is set to the beginning of the stream when returned.

## See Also

* class [RecyclableMemoryStream](../RecyclableMemoryStream.md)
* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

---

# RecyclableMemoryStreamManager.GetStream method (5 of 14)

Retrieve a new [`RecyclableMemoryStream`](../RecyclableMemoryStream.md) object with the given tag and a default initial capacity.

```csharp
public RecyclableMemoryStream GetStream(string? tag)
```

| parameter | description |
| --- | --- |
| tag | A tag which can be used to track the source of the stream. |

## Return Value

A [`RecyclableMemoryStream`](../RecyclableMemoryStream.md).

## See Also

* class [RecyclableMemoryStream](../RecyclableMemoryStream.md)
* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

---

# RecyclableMemoryStreamManager.GetStream method (6 of 14)

Retrieve a new [`RecyclableMemoryStream`](../RecyclableMemoryStream.md) object with the given tag and a default initial capacity.

```csharp
public RecyclableMemoryStream GetStream(Guid id, string? tag)
```

| parameter | description |
| --- | --- |
| id | A unique identifier which can be used to trace usages of the stream. |
| tag | A tag which can be used to track the source of the stream. |

## Return Value

A [`RecyclableMemoryStream`](../RecyclableMemoryStream.md).

## See Also

* class [RecyclableMemoryStream](../RecyclableMemoryStream.md)
* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

---

# RecyclableMemoryStreamManager.GetStream method (7 of 14)

Retrieve a new [`RecyclableMemoryStream`](../RecyclableMemoryStream.md) object with the given tag and at least the given capacity.

```csharp
public RecyclableMemoryStream GetStream(string? tag, long requiredSize)
```

| parameter | description |
| --- | --- |
| tag | A tag which can be used to track the source of the stream. |
| requiredSize | The minimum desired capacity for the stream. |

## Return Value

A [`RecyclableMemoryStream`](../RecyclableMemoryStream.md).

## See Also

* class [RecyclableMemoryStream](../RecyclableMemoryStream.md)
* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

---

# RecyclableMemoryStreamManager.GetStream method (8 of 14)

Retrieve a new [`RecyclableMemoryStream`](../RecyclableMemoryStream.md) object with the given tag and with contents copied from the provided buffer. The provided buffer is not wrapped or used after construction.

```csharp
public RecyclableMemoryStream GetStream(string? tag, ReadOnlySpan<byte> buffer)
```

| parameter | description |
| --- | --- |
| tag | A tag which can be used to track the source of the stream. |
| buffer | The byte buffer to copy data from. |

## Return Value

A [`RecyclableMemoryStream`](../RecyclableMemoryStream.md).

## Remarks

The new stream's position is set to the beginning of the stream when returned.

## See Also

* class [RecyclableMemoryStream](../RecyclableMemoryStream.md)
* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

---

# RecyclableMemoryStreamManager.GetStream method (9 of 14)

Retrieve a new [`RecyclableMemoryStream`](../RecyclableMemoryStream.md) object with the given tag and at least the given capacity.

```csharp
public RecyclableMemoryStream GetStream(Guid id, string? tag, long requiredSize)
```

| parameter | description |
| --- | --- |
| id | A unique identifier which can be used to trace usages of the stream. |
| tag | A tag which can be used to track the source of the stream. |
| requiredSize | The minimum desired capacity for the stream. |

## Return Value

A [`RecyclableMemoryStream`](../RecyclableMemoryStream.md).

## See Also

* class [RecyclableMemoryStream](../RecyclableMemoryStream.md)
* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

---

# RecyclableMemoryStreamManager.GetStream method (10 of 14)

Retrieve a new [`RecyclableMemoryStream`](../RecyclableMemoryStream.md) object with the given tag and with contents copied from the provided buffer. The provided buffer is not wrapped or used after construction.

```csharp
public RecyclableMemoryStream GetStream(Guid id, string? tag, ReadOnlySpan<byte> buffer)
```

| parameter | description |
| --- | --- |
| id | A unique identifier which can be used to trace usages of the stream. |
| tag | A tag which can be used to track the source of the stream. |
| buffer | The byte buffer to copy data from. |

## Return Value

A [`RecyclableMemoryStream`](../RecyclableMemoryStream.md).

## Remarks

The new stream's position is set to the beginning of the stream when returned.

## See Also

* class [RecyclableMemoryStream](../RecyclableMemoryStream.md)
* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

---

# RecyclableMemoryStreamManager.GetStream method (11 of 14)

Retrieve a new [`RecyclableMemoryStream`](../RecyclableMemoryStream.md) object with the given tag and at least the given capacity, possibly using a single contiguous underlying buffer.

```csharp
public RecyclableMemoryStream GetStream(string? tag, long requiredSize, bool asContiguousBuffer)
```

| parameter | description |
| --- | --- |
| tag | A tag which can be used to track the source of the stream. |
| requiredSize | The minimum desired capacity for the stream. |
| asContiguousBuffer | Whether to attempt to use a single contiguous buffer. |

## Return Value

A [`RecyclableMemoryStream`](../RecyclableMemoryStream.md).

## Remarks

Retrieving a [`RecyclableMemoryStream`](../RecyclableMemoryStream.md) which provides a single contiguous buffer can be useful in situations where the initial size is known and it is desirable to avoid copying data between the smaller underlying buffers to a single large one. This is most helpful when you know that you will always call [`GetBuffer`](../RecyclableMemoryStream/GetBuffer.md) on the underlying stream.

## See Also

* class [RecyclableMemoryStream](../RecyclableMemoryStream.md)
* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

---

# RecyclableMemoryStreamManager.GetStream method (12 of 14)

Retrieve a new [`RecyclableMemoryStream`](../RecyclableMemoryStream.md) object with the given tag and at least the given capacity, possibly using a single contiguous underlying buffer.

```csharp
public RecyclableMemoryStream GetStream(Guid id, string? tag, long requiredSize, 
    bool asContiguousBuffer)
```

| parameter | description |
| --- | --- |
| id | A unique identifier which can be used to trace usages of the stream. |
| tag | A tag which can be used to track the source of the stream. |
| requiredSize | The minimum desired capacity for the stream. |
| asContiguousBuffer | Whether to attempt to use a single contiguous buffer. |

## Return Value

A [`RecyclableMemoryStream`](../RecyclableMemoryStream.md).

## Remarks

Retrieving a [`RecyclableMemoryStream`](../RecyclableMemoryStream.md) which provides a single contiguous buffer can be useful in situations where the initial size is known and it is desirable to avoid copying data between the smaller underlying buffers to a single large one. This is most helpful when you know that you will always call [`GetBuffer`](../RecyclableMemoryStream/GetBuffer.md) on the underlying stream.

## See Also

* class [RecyclableMemoryStream](../RecyclableMemoryStream.md)
* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

---

# RecyclableMemoryStreamManager.GetStream method (13 of 14)

Retrieve a new [`RecyclableMemoryStream`](../RecyclableMemoryStream.md) object with the given tag and with contents copied from the provided buffer. The provided buffer is not wrapped or used after construction.

```csharp
public RecyclableMemoryStream GetStream(string? tag, byte[] buffer, int offset, int count)
```

| parameter | description |
| --- | --- |
| tag | A tag which can be used to track the source of the stream. |
| buffer | The byte buffer to copy data from. |
| offset | The offset from the start of the buffer to copy from. |
| count | The number of bytes to copy from the buffer. |

## Return Value

A [`RecyclableMemoryStream`](../RecyclableMemoryStream.md).

## Remarks

The new stream's position is set to the beginning of the stream when returned.

## See Also

* class [RecyclableMemoryStream](../RecyclableMemoryStream.md)
* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

---

# RecyclableMemoryStreamManager.GetStream method (14 of 14)

Retrieve a new [`RecyclableMemoryStream`](../RecyclableMemoryStream.md) object with the given tag and with contents copied from the provided buffer. The provided buffer is not wrapped or used after construction.

```csharp
public RecyclableMemoryStream GetStream(Guid id, string? tag, byte[] buffer, int offset, int count)
```

| parameter | description |
| --- | --- |
| id | A unique identifier which can be used to trace usages of the stream. |
| tag | A tag which can be used to track the source of the stream. |
| buffer | The byte buffer to copy data from. |
| offset | The offset from the start of the buffer to copy from. |
| count | The number of bytes to copy from the buffer. |

## Return Value

A [`RecyclableMemoryStream`](../RecyclableMemoryStream.md).

## Remarks

The new stream's position is set to the beginning of the stream when returned.

## See Also

* class [RecyclableMemoryStream](../RecyclableMemoryStream.md)
* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

<!-- DO NOT EDIT: generated by xmldocmd for Microsoft.IO.RecyclableMemoryStream.dll -->
