# RecyclableMemoryStreamManager constructor (1 of 6)

Initializes the memory manager with the default block/buffer specifications. This pool may have unbounded growth unless you modify [`MaximumFreeSmallPoolBytes`](./MaximumFreeSmallPoolBytes.md) and [`MaximumFreeLargePoolBytes`](./MaximumFreeLargePoolBytes.md).

```csharp
public RecyclableMemoryStreamManager()
```

## See Also

* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

---

# RecyclableMemoryStreamManager constructor (2 of 6)

Initializes the memory manager with the default block/buffer specifications and maximum free bytes specifications.

```csharp
public RecyclableMemoryStreamManager(long maximumSmallPoolFreeBytes, long maximumLargePoolFreeBytes)
```

| parameter | description |
| --- | --- |
| maximumSmallPoolFreeBytes | Maximum number of bytes to keep available in the small pool before future buffers get dropped for garbage collection |
| maximumLargePoolFreeBytes | Maximum number of bytes to keep available in the large pool before future buffers get dropped for garbage collection |

## Exceptions

| exception | condition |
| --- | --- |
| ArgumentOutOfRangeException | *maximumSmallPoolFreeBytes* is negative, or *maximumLargePoolFreeBytes* is negative. |

## See Also

* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

---

# RecyclableMemoryStreamManager constructor (3 of 6)

Initializes the memory manager with the given block requiredSize. This pool may have unbounded growth unless you modify [`MaximumFreeSmallPoolBytes`](./MaximumFreeSmallPoolBytes.md) and [`MaximumFreeLargePoolBytes`](./MaximumFreeLargePoolBytes.md).

```csharp
public RecyclableMemoryStreamManager(int blockSize, int largeBufferMultiple, int maximumBufferSize)
```

| parameter | description |
| --- | --- |
| blockSize | Size of each block that is pooled. Must be &gt; 0. |
| largeBufferMultiple | Each large buffer will be a multiple of this value. |
| maximumBufferSize | Buffers larger than this are not pooled |

## Exceptions

| exception | condition |
| --- | --- |
| ArgumentOutOfRangeException | *blockSize* is not a positive number, or *largeBufferMultiple* is not a positive number, or *maximumBufferSize* is less than *blockSize*. |
| ArgumentException | *maximumBufferSize* is not a multiple of *largeBufferMultiple*. |

## See Also

* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

---

# RecyclableMemoryStreamManager constructor (4 of 6)

Initializes the memory manager with the given block requiredSize. This pool may have unbounded growth unless you modify [`MaximumFreeSmallPoolBytes`](./MaximumFreeSmallPoolBytes.md) and [`MaximumFreeLargePoolBytes`](./MaximumFreeLargePoolBytes.md).

```csharp
public RecyclableMemoryStreamManager(int blockSize, int largeBufferMultiple, int maximumBufferSize, 
    bool useExponentialLargeBuffer)
```

| parameter | description |
| --- | --- |
| blockSize | Size of each block that is pooled. Must be &gt; 0. |
| largeBufferMultiple | Each large buffer will be a multiple/exponential of this value. |
| maximumBufferSize | Buffers larger than this are not pooled |
| useExponentialLargeBuffer | Switch to exponential large buffer allocation strategy |

## Exceptions

| exception | condition |
| --- | --- |
| ArgumentOutOfRangeException | *blockSize* is not a positive number, or *largeBufferMultiple* is not a positive number, or *maximumBufferSize* is less than *blockSize*. |
| ArgumentException | *maximumBufferSize* is not a multiple/exponential of *largeBufferMultiple*. |

## See Also

* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

---

# RecyclableMemoryStreamManager constructor (5 of 6)

Initializes the memory manager with the given block requiredSize.

```csharp
public RecyclableMemoryStreamManager(int blockSize, int largeBufferMultiple, int maximumBufferSize, 
    long maximumSmallPoolFreeBytes, long maximumLargePoolFreeBytes)
```

| parameter | description |
| --- | --- |
| blockSize | Size of each block that is pooled. Must be &gt; 0. |
| largeBufferMultiple | Each large buffer will be a multiple of this value. |
| maximumBufferSize | Buffers larger than this are not pooled |
| maximumSmallPoolFreeBytes | Maximum number of bytes to keep available in the small pool before future buffers get dropped for garbage collection |
| maximumLargePoolFreeBytes | Maximum number of bytes to keep available in the large pool before future buffers get dropped for garbage collection |

## Exceptions

| exception | condition |
| --- | --- |
| ArgumentOutOfRangeException | *blockSize* is not a positive number, or *largeBufferMultiple* is not a positive number, or *maximumBufferSize* is less than *blockSize*, or *maximumSmallPoolFreeBytes* is negative, or *maximumLargePoolFreeBytes* is negative. |
| ArgumentException | *maximumBufferSize* is not a multiple of *largeBufferMultiple*. |

## See Also

* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

---

# RecyclableMemoryStreamManager constructor (6 of 6)

Initializes the memory manager with the given block requiredSize.

```csharp
public RecyclableMemoryStreamManager(int blockSize, int largeBufferMultiple, int maximumBufferSize, 
    bool useExponentialLargeBuffer, long maximumSmallPoolFreeBytes, long maximumLargePoolFreeBytes)
```

| parameter | description |
| --- | --- |
| blockSize | Size of each block that is pooled. Must be &gt; 0. |
| largeBufferMultiple | Each large buffer will be a multiple/exponential of this value. |
| maximumBufferSize | Buffers larger than this are not pooled. |
| useExponentialLargeBuffer | Switch to exponential large buffer allocation strategy. |
| maximumSmallPoolFreeBytes | Maximum number of bytes to keep available in the small pool before future buffers get dropped for garbage collection. |
| maximumLargePoolFreeBytes | Maximum number of bytes to keep available in the large pool before future buffers get dropped for garbage collection. |

## Exceptions

| exception | condition |
| --- | --- |
| ArgumentOutOfRangeException | *blockSize* is not a positive number, or *largeBufferMultiple* is not a positive number, or *maximumBufferSize* is less than *blockSize*, or *maximumSmallPoolFreeBytes* is negative, or *maximumLargePoolFreeBytes* is negative. |
| ArgumentException | *maximumBufferSize* is not a multiple/exponential of *largeBufferMultiple*. |

## See Also

* class [RecyclableMemoryStreamManager](../RecyclableMemoryStreamManager.md)
* namespace [Microsoft.IO](../../Microsoft.IO.RecyclableMemoryStream.md)

<!-- DO NOT EDIT: generated by xmldocmd for Microsoft.IO.RecyclableMemoryStream.dll -->
