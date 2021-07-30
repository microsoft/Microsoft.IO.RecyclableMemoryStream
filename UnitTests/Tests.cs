// ---------------------------------------------------------------------
// Copyright (c) 2015 Microsoft
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
// ---------------------------------------------------------------------

namespace Microsoft.IO.UnitTests
{
    using System;
    using System.Buffers;
    using System.Collections.Generic;
    using System.IO;
    using System.Runtime.InteropServices;
    using System.Threading;
    using System.Threading.Tasks;
    
    using Microsoft.IO;
    using NUnit.Framework;
    
    /// <summary>
    /// Full test suite. It is abstract to allow parameters of the memory manager to be modified and tested in different
    /// combinations.
    /// </summary>
    public abstract class BaseRecyclableMemoryStreamTests
    {
        protected const int DefaultBlockSize = 16384;
        protected const int DefaultLargeBufferMultiple = 1 << 20;
        protected const int DefaultMaximumBufferSize = 8 * (1 << 20);
        protected const long DefaultVeryLargeStreamSize = 3L * (1L << 30);
        protected const long VeryLargeMaximumSize = 4L * (1L << 30);
        protected const string DefaultTag = "NUnit";
        protected static readonly Guid DefaultId = Guid.NewGuid();

        private readonly Random random = new Random();

        #region RecyclableMemoryManager Tests
        [Test]
        public virtual void RecyclableMemoryManagerUsingMultipleOrExponentialLargeBuffer()
        {
            var memMgr = this.GetMemoryManager();
            Assert.That(memMgr.UseMultipleLargeBuffer, Is.True);
            Assert.That(memMgr.UseExponentialLargeBuffer, Is.False);
        }

        [Test]
        public void RecyclableMemoryManagerThrowsExceptionOnZeroBlockSize()
        {
            Assert.Throws<ArgumentOutOfRangeException>(() => new RecyclableMemoryStreamManager(0, 100, 200, this.UseExponentialLargeBuffer));
            Assert.Throws<ArgumentOutOfRangeException>(() => new RecyclableMemoryStreamManager(-1, 100, 200, this.UseExponentialLargeBuffer));
            Assert.DoesNotThrow(() => new RecyclableMemoryStreamManager(1, 100, 200, this.UseExponentialLargeBuffer));
        }

        [Test]
        public void RecyclableMemoryManagerThrowsExceptionOnZeroLargeBufferMultipleSize()
        {
            Assert.Throws<ArgumentOutOfRangeException>(() => new RecyclableMemoryStreamManager(100, 0, 200, this.UseExponentialLargeBuffer));
            Assert.Throws<ArgumentOutOfRangeException>(() => new RecyclableMemoryStreamManager(100, -1, 200, this.UseExponentialLargeBuffer));
            Assert.DoesNotThrow(() => new RecyclableMemoryStreamManager(100, 100, 200, this.UseExponentialLargeBuffer));
        }

        [Test]
        public void RecyclableMemoryManagerThrowsExceptionOnMaximumBufferSizeLessThanBlockSize()
        {
            Assert.Throws<ArgumentOutOfRangeException>(() => new RecyclableMemoryStreamManager(100, 100, 99, this.UseExponentialLargeBuffer));
            Assert.DoesNotThrow(() => new RecyclableMemoryStreamManager(100, 100, 100, this.UseExponentialLargeBuffer));
        }

        [Test]
        public virtual void RecyclableMemoryManagerThrowsExceptionOnMaximumBufferNotMultipleOrExponentialOfLargeBufferMultiple()
        {
            Assert.Throws<ArgumentException>(() => new RecyclableMemoryStreamManager(100, 1024, 2025, this.UseExponentialLargeBuffer));
            Assert.Throws<ArgumentException>(() => new RecyclableMemoryStreamManager(100, 1024, 2023, this.UseExponentialLargeBuffer));
            Assert.DoesNotThrow(() => new RecyclableMemoryStreamManager(100, 1024, 2048, this.UseExponentialLargeBuffer));
        }

        [Test]
        public void RecyclableMemoryManagerThrowsExceptionOnNegativeMaxFreeSizes()
        {
            Assert.Throws<ArgumentOutOfRangeException>(() => new RecyclableMemoryStreamManager(1, 100, 200, false, -1, 1000));
            Assert.Throws<ArgumentOutOfRangeException>(() => new RecyclableMemoryStreamManager(1, 100, 200, false, 1000, -1));
            Assert.DoesNotThrow(() => new RecyclableMemoryStreamManager(1, 100, 200, false, 1000, 1000));
            Assert.DoesNotThrow(() => new RecyclableMemoryStreamManager(1, 100, 200, false, 0, 0));

        }

        [Test]
        public virtual void GetLargeBufferAlwaysAMultipleOrExponentialOfMegabyteAndAtLeastAsMuchAsRequestedForLargeBuffer()
        {
            const int step = 200000;
            const int start = 1;
            const int end = 16000000;
            var memMgr = this.GetMemoryManager();

            for (var i = start; i <= end; i += step)
            {
                var buffer = memMgr.GetLargeBuffer(i, DefaultId, DefaultTag);
                Assert.That(buffer.Length >= i, Is.True);
                Assert.That((buffer.Length % memMgr.LargeBufferMultiple) == 0, Is.True,
                            "buffer length of {0} is not a multiple of {1}", buffer.Length, memMgr.LargeBufferMultiple);
            }
        }

        [Test]
        public virtual void AllMultiplesOrExponentialUpToMaxCanBePooled()
        {
            const int BlockSize = 100;
            const int LargeBufferMultiple = 1000;
            const int MaxBufferSize = 8000;

            for (var size = LargeBufferMultiple; size <= MaxBufferSize; size += LargeBufferMultiple)
            {
                var memMgr = new RecyclableMemoryStreamManager(BlockSize, LargeBufferMultiple, MaxBufferSize, this.UseExponentialLargeBuffer)
                             {AggressiveBufferReturn = this.AggressiveBufferRelease};
                var buffer = memMgr.GetLargeBuffer(size, DefaultId, DefaultTag);
                Assert.That(memMgr.LargePoolFreeSize, Is.EqualTo(0));
                Assert.That(memMgr.LargePoolInUseSize, Is.EqualTo(size));

                memMgr.ReturnLargeBuffer(buffer, DefaultId, DefaultTag);

                Assert.That(memMgr.LargePoolFreeSize, Is.EqualTo(size));
                Assert.That(memMgr.LargePoolInUseSize, Is.EqualTo(0));
            }
        }

        /*
         * TODO: clocke to release logging libraries to enable some tests.
        [Test]
        public void GetVeryLargeBufferRecordsCallStack()
        {
            var logger = LogManager.CreateMemoryLogger();
            logger.SubscribeToEvents(Events.Writer, EventLevel.Verbose);

            var memMgr = GetMemoryManager();
            memMgr.GenerateCallStacks = true;
            var buffer = memMgr.GetLargeBuffer(memMgr.MaximumBufferSize + 1, DefaultTag);
            // wait for log to flush
            GC.Collect(1);
            GC.WaitForPendingFinalizers();
            Thread.Sleep(250);

            var log = Encoding.UTF8.GetString(logger.Stream.GetBuffer(), 0, (int)logger.Stream.Length);
            Assert.That(log, Is.StringContaining("MemoryStreamNonPooledLargeBufferCreated"));
            Assert.That(log, Is.StringContaining("GetLargeBuffer"));
            Assert.That(log, Is.StringContaining(buffer.Length.ToString()));
        }
        */

        [Test]
        public void ReturnLargerBufferWithNullBufferThrowsException()
        {
            var memMgr = this.GetMemoryManager();
            Assert.Throws<ArgumentNullException>(() => memMgr.ReturnLargeBuffer(null, DefaultId, DefaultTag));
        }

        [Test]
        public void ReturnLargeBufferWithWrongSizedBufferThrowsException()
        {
            var memMgr = this.GetMemoryManager();
            var buffer = new byte[100];
            Assert.Throws<ArgumentException>(() => memMgr.ReturnLargeBuffer(buffer, DefaultId, DefaultTag));
        }

        [Test]
        public void ReturnNullBlockThrowsException()
        {
            var memMgr = this.GetMemoryManager();
            Assert.Throws<ArgumentNullException>(() => memMgr.ReturnBlocks(null, Guid.Empty, string.Empty));
        }

        [Test]
        public void ReturnBlocksWithInvalidBuffersThrowsException()
        {
            var buffers = new byte[3][];
            var memMgr = this.GetMemoryManager();
            buffers[0] = memMgr.GetBlock();
            buffers[1] = new byte[memMgr.BlockSize + 1];
            buffers[2] = memMgr.GetBlock();
            Assert.Throws<ArgumentException>(() => memMgr.ReturnBlocks(buffers, Guid.Empty, string.Empty));
        }

        [Test]
        public virtual void RequestTooLargeBufferAdjustsInUseCounter()
        {
            var memMgr = this.GetMemoryManager();
            var buffer = memMgr.GetLargeBuffer(memMgr.MaximumBufferSize + 1, DefaultId, DefaultTag);
            Assert.That(buffer.Length, Is.EqualTo(memMgr.MaximumBufferSize + memMgr.LargeBufferMultiple));
            Assert.That(memMgr.LargePoolInUseSize, Is.EqualTo(buffer.Length));
        }

        [Test]
        public void ReturnTooLargeBufferDoesNotReturnToPool()
        {
            var memMgr = this.GetMemoryManager();
            var buffer = memMgr.GetLargeBuffer(memMgr.MaximumBufferSize + 1, DefaultId, DefaultTag);

            memMgr.ReturnLargeBuffer(buffer, DefaultId, DefaultTag);
            Assert.That(memMgr.LargePoolInUseSize, Is.EqualTo(0));
            Assert.That(memMgr.LargePoolFreeSize, Is.EqualTo(0));
        }

        [Test]
        public void ReturnZeroLengthBufferThrowsException()
        {
            var memMgr = this.GetMemoryManager();
            var emptyBuffer = new byte[0];
            Assert.Throws<ArgumentException>(() => memMgr.ReturnLargeBuffer(emptyBuffer, DefaultId, DefaultTag));
        }

        [Test]
        public void ReturningBlocksAreDroppedIfEnoughFree()
        {
            var memMgr = this.GetMemoryManager();
            const int MaxFreeBuffersAllowed = 2;
            const int BuffersToTest = MaxFreeBuffersAllowed + 1;

            // Only allow 2 blocks in the free pool at a time
            memMgr.MaximumFreeSmallPoolBytes = MaxFreeBuffersAllowed * memMgr.BlockSize;
            var buffers = new byte[BuffersToTest][];
            for (var i = 0; i < buffers.Length; ++i)
            {
                buffers[i] = memMgr.GetBlock();
            }

            Assert.That(memMgr.SmallPoolFreeSize, Is.EqualTo(0));
            Assert.That(memMgr.SmallPoolInUseSize, Is.EqualTo(BuffersToTest * memMgr.BlockSize));

            // All but one buffer should be returned to pool
            memMgr.ReturnBlocks(buffers, Guid.Empty, string.Empty);
            Assert.That(memMgr.SmallPoolFreeSize, Is.EqualTo(memMgr.MaximumFreeSmallPoolBytes));
            Assert.That(memMgr.SmallPoolInUseSize, Is.EqualTo(0));
        }

        [Test]
        public void ReturningBlocksNeverDroppedIfMaxFreeSizeZero()
        {
            var memMgr = this.GetMemoryManager();

            const int BuffersToTest = 99;

            memMgr.MaximumFreeSmallPoolBytes = 0;
            var buffers = new byte[BuffersToTest][];
            for (var i = 0; i < buffers.Length; ++i)
            {
                buffers[i] = memMgr.GetBlock();
            }

            Assert.That(memMgr.SmallPoolFreeSize, Is.EqualTo(0));
            Assert.That(memMgr.SmallPoolInUseSize, Is.EqualTo(BuffersToTest * memMgr.BlockSize));

            memMgr.ReturnBlocks(buffers, Guid.Empty, string.Empty);
            Assert.That(memMgr.SmallPoolFreeSize, Is.EqualTo(BuffersToTest * memMgr.BlockSize));
            Assert.That(memMgr.SmallPoolInUseSize, Is.EqualTo(0));
        }

        [Test]
        public void ReturningLargeBufferIsDroppedIfEnoughFree()
        {
            this.TestDroppingLargeBuffer(8000);
        }

        [Test]
        public void ReturningLargeBufferNeverDroppedIfMaxFreeSizeZero()
        {
            this.TestDroppingLargeBuffer(0);
        }

        protected virtual void TestDroppingLargeBuffer(long maxFreeLargeBufferSize)
        {
            const int BlockSize = 100;
            const int LargeBufferMultiple = 1000;
            const int MaxBufferSize = 8000;

            for (var size = LargeBufferMultiple; size <= MaxBufferSize; size += LargeBufferMultiple)
            {
                var memMgr = new RecyclableMemoryStreamManager(BlockSize, LargeBufferMultiple, MaxBufferSize, this.UseExponentialLargeBuffer)
                             {
                                 AggressiveBufferReturn = this.AggressiveBufferRelease,
                                 MaximumFreeLargePoolBytes = maxFreeLargeBufferSize
                             };

                var buffers = new List<byte[]>();

                //Get one extra buffer
                var buffersToRetrieve = (maxFreeLargeBufferSize > 0) ? (maxFreeLargeBufferSize / size + 1) : 10;
                for (var i = 0; i < buffersToRetrieve; i++)
                {
                    buffers.Add(memMgr.GetLargeBuffer(size, DefaultId, DefaultTag));
                }
                Assert.That(memMgr.LargePoolInUseSize, Is.EqualTo(size * buffersToRetrieve));
                Assert.That(memMgr.LargePoolFreeSize, Is.EqualTo(0));
                foreach (var buffer in buffers)
                {
                    memMgr.ReturnLargeBuffer(buffer, DefaultId, DefaultTag);
                }
                Assert.That(memMgr.LargePoolInUseSize, Is.EqualTo(0));
                if (maxFreeLargeBufferSize > 0)
                {
                    Assert.That(memMgr.LargePoolFreeSize, Is.LessThanOrEqualTo(maxFreeLargeBufferSize));
                }
                else
                {
                    Assert.That(memMgr.LargePoolFreeSize, Is.EqualTo(buffersToRetrieve * size));
                }
            }
        }

        [Test]
        public void GettingBlockAdjustsFreeAndInUseSize()
        {
            var memMgr = this.GetMemoryManager();
            Assert.That(memMgr.SmallPoolFreeSize, Is.EqualTo(0));
            Assert.That(memMgr.SmallPoolInUseSize, Is.EqualTo(0));

            // This should create a new block
            var block = memMgr.GetBlock();

            Assert.That(memMgr.SmallPoolFreeSize, Is.EqualTo(0));
            Assert.That(memMgr.SmallPoolInUseSize, Is.EqualTo(memMgr.BlockSize));

            memMgr.ReturnBlocks(new List<byte[]> {block}, Guid.Empty, string.Empty);

            Assert.That(memMgr.SmallPoolFreeSize, Is.EqualTo(memMgr.BlockSize));
            Assert.That(memMgr.SmallPoolInUseSize, Is.EqualTo(0));

            // This should get an existing block
            block = memMgr.GetBlock();

            Assert.That(memMgr.SmallPoolFreeSize, Is.EqualTo(0));
            Assert.That(memMgr.SmallPoolInUseSize, Is.EqualTo(memMgr.BlockSize));

            memMgr.ReturnBlocks(new List<byte[]> {block}, Guid.Empty, string.Empty);

            Assert.That(memMgr.SmallPoolFreeSize, Is.EqualTo(memMgr.BlockSize));
            Assert.That(memMgr.SmallPoolInUseSize, Is.EqualTo(0));
        }
        #endregion

        #region GetBuffer/TryGetBuffer Tests
        [Test]
        public void GetBufferReturnsSingleBlockForBlockSize()
        {
            var stream = this.GetDefaultStream();
            var size = stream.MemoryManager.BlockSize;
            var buffer = this.GetRandomBuffer(size);
            stream.Write(buffer, 0, buffer.Length);
            var returnedBuffer = stream.GetBuffer();
            Assert.That(returnedBuffer.Length, Is.EqualTo(stream.MemoryManager.BlockSize));
            RMSAssert.TryGetBufferEqualToGetBuffer(stream);
        }

        [Test]
        public void GetBufferReturnsSingleBlockForLessThanBlockSize()
        {
            var stream = this.GetDefaultStream();
            var size = stream.MemoryManager.BlockSize - 1;
            var buffer = this.GetRandomBuffer(size);
            stream.Write(buffer, 0, buffer.Length);
            var returnedBuffer = stream.GetBuffer();
            Assert.That(returnedBuffer.Length, Is.EqualTo(stream.MemoryManager.BlockSize));
            RMSAssert.TryGetBufferEqualToGetBuffer(stream);
        }

        [Test]
        public void GetBufferReturnsLargeBufferForMoreThanBlockSize()
        {
            var stream = this.GetDefaultStream();
            var size = stream.MemoryManager.BlockSize + 1;
            var buffer = this.GetRandomBuffer(size);
            stream.Write(buffer, 0, buffer.Length);
            var returnedBuffer = stream.GetBuffer();
            Assert.That(returnedBuffer.Length, Is.EqualTo(stream.MemoryManager.LargeBufferMultiple));
            RMSAssert.TryGetBufferEqualToGetBuffer(stream);
        }

        [Test]
        public void GetBufferReturnsSameLarge()
        {
            var stream = this.GetDefaultStream();
            var buffer = this.GetRandomBuffer(stream.MemoryManager.LargeBufferMultiple);
            stream.Write(buffer, 0, buffer.Length);
            var returnedBuffer = stream.GetBuffer();
            var returnedBuffer2 = stream.GetBuffer();
            RMSAssert.BuffersAreEqual(returnedBuffer, returnedBuffer2);
            RMSAssert.TryGetBufferEqualToGetBuffer(stream);
        }

        [Test]
        public void GetBufferAdjustsLargePoolFreeSize()
        {
            var stream = this.GetDefaultStream();
            var memMgr = stream.MemoryManager;
            var bufferLength = stream.MemoryManager.BlockSize * 4;
            var buffer = this.GetRandomBuffer(bufferLength);
            stream.Write(buffer, 0, buffer.Length);

            var newBuffer = stream.GetBuffer();
            RMSAssert.TryGetBufferEqualToGetBuffer(stream);

            stream.Dispose();

            Assert.That(memMgr.LargePoolFreeSize, Is.EqualTo(newBuffer.Length));

            var newStream = new RecyclableMemoryStream(memMgr);
            newStream.Write(buffer, 0, buffer.Length);

            var newBuffer2 = newStream.GetBuffer();
            Assert.That(newBuffer2.Length, Is.EqualTo(newBuffer.Length));
            Assert.That(memMgr.LargePoolFreeSize, Is.EqualTo(0));
            RMSAssert.TryGetBufferEqualToGetBuffer(newStream);
        }

        [Test]
        public void CallingWriteAfterLargeGetBufferDoesNotLoseData()
        {
            var stream = this.GetDefaultStream();
            stream.Capacity = stream.MemoryManager.BlockSize + 1;
            var buffer = stream.GetBuffer();
            buffer[stream.MemoryManager.BlockSize] = 13;

            stream.Position = stream.MemoryManager.BlockSize + 1;
            var bytesToWrite = this.GetRandomBuffer(10);
            stream.Write(bytesToWrite, 0, bytesToWrite.Length);

            buffer = stream.GetBuffer();

            Assert.That(buffer[stream.MemoryManager.BlockSize], Is.EqualTo(13));
            RMSAssert.BuffersAreEqual(buffer, stream.MemoryManager.BlockSize + 1, bytesToWrite, 0, bytesToWrite.Length);
            Assert.That(stream.Position, Is.EqualTo(stream.MemoryManager.BlockSize + 1 + bytesToWrite.Length));
            RMSAssert.TryGetBufferEqualToGetBuffer(stream);
        }

        [Test]
        public void CallingWriteByteAfterLargeGetBufferDoesNotLoseData()
        {
            var stream = this.GetDefaultStream();
            stream.Capacity = stream.MemoryManager.BlockSize + 1;
            var buffer = stream.GetBuffer();
            buffer[stream.MemoryManager.BlockSize] = 13;

            stream.Position = stream.MemoryManager.BlockSize + 1;
            stream.WriteByte(14);

            buffer = stream.GetBuffer();

            Assert.That(buffer[stream.MemoryManager.BlockSize], Is.EqualTo(13));
            Assert.That(buffer[stream.MemoryManager.BlockSize + 1], Is.EqualTo(14));
            Assert.That(stream.Position, Is.EqualTo(stream.MemoryManager.BlockSize + 2));
            RMSAssert.TryGetBufferEqualToGetBuffer(stream);
        }

        [Test]
        public void MaxIntAllocationSucceeds()
        {
            var mgr = new RecyclableMemoryStreamManager();

            for (var i = -1; i < 2; ++i)
            {
                int requestedSize = int.MaxValue - (mgr.BlockSize + i);
                var stream = mgr.GetStream(null, requestedSize) as RecyclableMemoryStream;
                Assert.That(stream.Capacity64, Is.GreaterThanOrEqualTo(requestedSize));
            }

            var maxStream = mgr.GetStream(null, int.MaxValue) as RecyclableMemoryStream;
            Assert.That(maxStream.Capacity64, Is.GreaterThanOrEqualTo(int.MaxValue));
        }
        #endregion

        #region GetSpan/Memory Tests
        [Test]
        public void GetSpanMemoryWithNegativeHintFails()
        {
            var stream = this.GetDefaultStream();
            Assert.Throws<ArgumentOutOfRangeException>(() => stream.GetSpan(-1));
            Assert.Throws<ArgumentOutOfRangeException>(() => stream.GetMemory(-1));
        }

        [Test]
        public void GetSpanMemoryWithTooLargeHintFails()
        {
            var stream = this.GetDefaultStream();
            stream.Position = 1;
            Assert.Throws<OutOfMemoryException>(() => stream.GetSpan(int.MaxValue));
            Assert.Throws<OutOfMemoryException>(() => stream.GetMemory(int.MaxValue));
        }

        [Test]
        public void GetSpanMemoryWithHintLargerThanMaximumStreamCapacityFails()
        {
            var memoryManager = this.GetMemoryManager();
            memoryManager.MaximumStreamCapacity = short.MaxValue;
            var stream = new RecyclableMemoryStream(memoryManager, string.Empty, 0);
            Assert.Throws<OutOfMemoryException>(() => stream.GetSpan(short.MaxValue + 1));
            Assert.Throws<OutOfMemoryException>(() => stream.GetMemory(short.MaxValue + 1));
        }

        [Test]
        public void GetSpanMemoryReturnsSingleBlockWithNoHint()
        {
            var stream = this.GetDefaultStream();
            var buffer = stream.GetBuffer();
            var span = stream.GetSpan();
            var memory = stream.GetMemory();
            MemoryMarshal.TryGetArray(memory, out ArraySegment<byte> arraySegment);
            Assert.AreEqual(buffer, arraySegment.Array);
            Assert.IsTrue(buffer.AsSpan() == span);
        }

        [Test]
        public void GetSpanMemoryReturnsLargeBufferWithNoHint()
        {
            var stream = this.GetDefaultStream();
            stream.Capacity = stream.MemoryManager.BlockSize + 1;
            var buffer = stream.GetBuffer();
            var span = stream.GetSpan();
            var memory = stream.GetMemory();
            MemoryMarshal.TryGetArray(memory, out ArraySegment<byte> arraySegment);
            Assert.AreEqual(buffer, arraySegment.Array);
            Assert.IsTrue(buffer.AsSpan() == span);
        }

        [Test]
        public void GetSpanMemoryReturnsSingleBlockWithNoHintPositionedMidBlock()
        {
            var stream = this.GetDefaultStream();
            stream.Advance(1);
            var buffer = stream.GetBuffer();
            var span = stream.GetSpan();
            var memory = stream.GetMemory();
            MemoryMarshal.TryGetArray(memory, out ArraySegment<byte> arraySegment);
            Assert.AreEqual(buffer, arraySegment.Array);
            Assert.AreEqual(buffer.Length - 1, memory.Length);
            Assert.IsTrue(buffer.AsSpan(1) == span);
        }

        [Test]
        public void GetSpanMemoryReturnsNewBlockWithNoHintPositionedEndOfBlock()
        {
            var stream = this.GetDefaultStream();
            var size = stream.MemoryManager.BlockSize;

            stream.Position = size;
            var span = stream.GetSpan();
            var memory = stream.GetMemory();
            this.GetRandomBuffer(size).AsSpan().CopyTo(span);
            stream.Advance(size);
            MemoryMarshal.TryGetArray(memory, out ArraySegment<byte> arraySegment);
            var memoryArray = arraySegment.Array;

            Assert.IsTrue(span == memory.Span);
            Assert.AreEqual(size, span.Length);
            Assert.AreEqual(size, memoryArray.Length);
            Span<byte> bufferSpan = stream.GetBuffer().AsSpan(size, size);
            Assert.IsTrue(bufferSpan.SequenceEqual(span));
            Assert.IsFalse(bufferSpan == span);
        }

        [Test]
        public void GetSpanMemoryReturnsLargeTempBufferWhenHintIsLongerThanBlock()
        {
            var stream = this.GetDefaultStream();
            var size = stream.MemoryManager.BlockSize + 1;

            var span = stream.GetSpan(size + 1);
            byte[] randomBuffer = this.GetRandomBuffer(size);
            randomBuffer.AsSpan().CopyTo(span);
            stream.Advance(size);

            Span<byte> bufferSpan = stream.GetBuffer().AsSpan(0, size);
            Assert.IsTrue(bufferSpan.SequenceEqual(randomBuffer));
            Assert.IsFalse(bufferSpan == span);
            Assert.AreEqual(stream.MemoryManager.LargeBufferMultiple, span.Length);
        }

        [Test]
        public void GetSpanMemoryReturnsBlockTempBufferWhenHintGoesPastEndOfBlock()
        {
            var stream = this.GetDefaultStream();
            var size = stream.MemoryManager.BlockSize / 2;

            stream.Position = size + 1;
            var span = stream.GetSpan(size);
            byte[] randomBuffer = this.GetRandomBuffer(size);
            randomBuffer.AsSpan().CopyTo(span);
            stream.Advance(size);

            Span<byte> bufferSpan = stream.GetBuffer().AsSpan(size + 1, size);
            Assert.IsTrue(bufferSpan.SequenceEqual(randomBuffer));
            Assert.IsFalse(bufferSpan == span);
            Assert.AreEqual(stream.MemoryManager.BlockSize, span.Length);
        }
        #endregion

        #region GetReadOnlySequence Tests
        [Test]
        public void GetReadOnlySequenceReturnsSingleBlockForBlockSize()
        {
            var stream = this.GetDefaultStream();
            var size = stream.MemoryManager.BlockSize;
            var buffer = this.GetRandomBuffer(size);
            stream.Write(buffer, 0, buffer.Length);
            var returnedSequence = stream.GetReadOnlySequence();
            Assert.That(returnedSequence.IsSingleSegment);
            Assert.That(returnedSequence.Length, Is.EqualTo(stream.MemoryManager.BlockSize));
            Assert.That(returnedSequence.First.Length, Is.EqualTo(stream.MemoryManager.BlockSize));
            Assert.That(MemoryMarshal.TryGetArray(returnedSequence.First, out ArraySegment<byte> arraySegment), Is.True);
            RMSAssert.BuffersAreEqual(arraySegment.Array, stream.GetBuffer(), stream.GetBuffer().Length);
        }

        [Test]
        public void GetReadOnlySequenceReturnsSingleBlockForLessThanBlockSize()
        {
            var stream = this.GetDefaultStream();
            var size = stream.MemoryManager.BlockSize - 1;
            var buffer = this.GetRandomBuffer(size);
            stream.Write(buffer, 0, buffer.Length);
            var returnedSequence = stream.GetReadOnlySequence();
            Assert.That(returnedSequence.IsSingleSegment);
            Assert.That(returnedSequence.Length, Is.EqualTo(size));
            Assert.That(returnedSequence.First.Length, Is.EqualTo(size));
            Assert.That(MemoryMarshal.TryGetArray(returnedSequence.First, out ArraySegment<byte> arraySegment));
            RMSAssert.BuffersAreEqual(arraySegment.Array, stream.GetBuffer(), stream.GetBuffer().Length);
        }

        [Test]
        public void GetReadOnlySequenceReturnsMultipleBuffersForMoreThanBlockSize()
        {
            var stream = this.GetDefaultStream();
            var size = stream.MemoryManager.BlockSize + 1;
            var buffer = this.GetRandomBuffer(size);
            stream.Write(buffer, 0, buffer.Length);
            var returnedSequence = stream.GetReadOnlySequence();
            stream.TryGetBuffer(out ArraySegment<byte> getBufferArraySegment);
            Assert.That(returnedSequence.IsSingleSegment, Is.False);
            Assert.That(returnedSequence.Length, Is.EqualTo(size));
            Assert.That(returnedSequence.First.Length, Is.EqualTo(stream.MemoryManager.BlockSize));
            Assert.That(returnedSequence.Slice(stream.MemoryManager.BlockSize).IsSingleSegment);
            Assert.That(returnedSequence.Slice(stream.MemoryManager.BlockSize).Length, Is.EqualTo(1));
            RMSAssert.BuffersAreEqual(returnedSequence.ToArray(), getBufferArraySegment, (int)returnedSequence.Length);
        }

        [Test]
        public void GetReadOnlySequenceReturnsLargeAfterGetBuffer()
        {
            var stream = this.GetDefaultStream();
            var buffer = this.GetRandomBuffer(stream.MemoryManager.LargeBufferMultiple);
            stream.Write(buffer, 0, buffer.Length);
            stream.TryGetBuffer(out ArraySegment<byte> getBufferArraySegment);
            var returnedSequence = stream.GetReadOnlySequence();
            Assert.That(returnedSequence.IsSingleSegment);
            Assert.That(returnedSequence.Length, Is.EqualTo(stream.MemoryManager.LargeBufferMultiple));
            Assert.That(returnedSequence.First.Length, Is.EqualTo(stream.MemoryManager.LargeBufferMultiple));
            Assert.That(MemoryMarshal.TryGetArray(returnedSequence.First, out ArraySegment<byte> sequenceArraySegment));
            RMSAssert.BuffersAreEqual(returnedSequence.ToArray(), getBufferArraySegment, (int)returnedSequence.Length);
        }

        [Test]
        public void GetReadOnlySequenceReturnsSameLarge()
        {
            var stream = this.GetDefaultStream();
            var buffer = this.GetRandomBuffer(stream.MemoryManager.LargeBufferMultiple);
            stream.Write(buffer, 0, buffer.Length);
            stream.TryGetBuffer(out ArraySegment<byte> arraySegment0);
            var returnedSequence1 = stream.GetReadOnlySequence();
            var returnedSequence2 = stream.GetReadOnlySequence();
            Assert.That(MemoryMarshal.TryGetArray(returnedSequence1.First, out ArraySegment<byte> arraySegment1));
            Assert.That(MemoryMarshal.TryGetArray(returnedSequence2.First, out ArraySegment<byte> arraySegment2));
            RMSAssert.BuffersAreEqual(arraySegment0, arraySegment2);
            RMSAssert.BuffersAreEqual(arraySegment1, arraySegment2);
        }
        #endregion

        #region Constructor tests
        [Test]
        public void StreamHasTagAndGuid()
        {
            const string expectedTag = "Nunit Test";

            var stream = new RecyclableMemoryStream(this.GetMemoryManager(), expectedTag);
            Assert.That(stream.Id, Is.Not.EqualTo(Guid.Empty));
            Assert.That(stream.Tag, Is.EqualTo(expectedTag));
        }

        [Test]
        public void StreamHasDefaultCapacity()
        {
            var memoryManager = this.GetMemoryManager();
            var stream = new RecyclableMemoryStream(memoryManager);
            Assert.That(stream.Capacity, Is.EqualTo(memoryManager.BlockSize));
        }

        [Test]
        public void ActualCapacityAtLeastRequestedCapacityAndMultipleOfBlockSize()
        {
            var memoryManager = this.GetMemoryManager();
            var requestedSize = memoryManager.BlockSize + 1;
            var stream = new RecyclableMemoryStream(memoryManager, string.Empty, requestedSize);
            Assert.That(stream.Capacity, Is.GreaterThanOrEqualTo(requestedSize));
            Assert.That(stream.Capacity % memoryManager.BlockSize == 0, Is.True,
                        "stream capacity is not a multiple of the block size");
        }

        [Test]
        public void AllocationStackIsRecorded()
        {
            var memMgr = this.GetMemoryManager();
            memMgr.GenerateCallStacks = true;

            var stream = new RecyclableMemoryStream(memMgr);

            Assert.That(stream.AllocationStack, Does.Contain("RecyclableMemoryStream..ctor"));
            stream.Dispose();

            memMgr.GenerateCallStacks = false;

            var stream2 = new RecyclableMemoryStream(memMgr);

            Assert.That(stream2.AllocationStack, Is.Null);

            stream2.Dispose();
        }
        #endregion

        #region Write Tests
        [Test]
        public void WriteUpdatesLengthAndPosition()
        {
            const int expectedLength = 100;
            var memoryManager = this.GetMemoryManager();
            var stream = new RecyclableMemoryStream(memoryManager, string.Empty, expectedLength);
            var buffer = this.GetRandomBuffer(expectedLength);
            stream.Write(buffer, 0, buffer.Length);
            Assert.That(stream.Length, Is.EqualTo(expectedLength));
            Assert.That(stream.Position, Is.EqualTo(expectedLength));
        }

        [Test]
        public void WriteInMiddleOfBufferDoesNotChangeLength()
        {
            var stream = this.GetDefaultStream();
            const int expectedLength = 100;
            var buffer = this.GetRandomBuffer(expectedLength);
            stream.Write(buffer, 0, expectedLength);
            Assert.That(stream.Length, Is.EqualTo(expectedLength));
            var smallBufferLength = 25;
            var smallBuffer = this.GetRandomBuffer(smallBufferLength);
            stream.Position = 0;
            stream.Write(smallBuffer, 0, smallBufferLength);
            Assert.That(stream.Length, Is.EqualTo(expectedLength));
        }

        [Test]
        public void WriteSmallBufferStoresDataCorrectly()
        {
            var stream = this.GetDefaultStream();
            var buffer = this.GetRandomBuffer(100);
            stream.Write(buffer, 0, buffer.Length);
            RMSAssert.BuffersAreEqual(buffer, stream.GetBuffer(), buffer.Length);
        }

        [Test]
        public void WriteLargeBufferStoresDataCorrectly()
        {
            var stream = this.GetDefaultStream();
            var buffer = this.GetRandomBuffer(stream.MemoryManager.BlockSize + 1);
            stream.Write(buffer, 0, buffer.Length);
            RMSAssert.BuffersAreEqual(buffer, stream.GetBuffer(), buffer.Length);
        }

        [Test]
        public void WritePastEndIncreasesCapacity()
        {
            var stream = this.GetDefaultStream();
            var buffer = this.GetRandomBuffer(DefaultBlockSize);
            stream.Write(buffer, 0, buffer.Length);
            Assert.That(stream.Capacity, Is.EqualTo(DefaultBlockSize));
            Assert.That(stream.MemoryManager.SmallPoolInUseSize, Is.EqualTo(DefaultBlockSize));
            stream.Write(new byte[] {0}, 0, 1);
            Assert.That(stream.Capacity, Is.EqualTo(2 * DefaultBlockSize));
            Assert.That(stream.MemoryManager.SmallPoolInUseSize, Is.EqualTo(2 * DefaultBlockSize));
        }

        [Test]
        public void WritePastEndOfLargeBufferIncreasesCapacityAndCopiesBuffer()
        {
            var stream = this.GetDefaultStream();
            var buffer = this.GetRandomBuffer(stream.MemoryManager.LargeBufferMultiple);
            stream.Write(buffer, 0, buffer.Length);
            var get1 = stream.GetBuffer();
            Assert.That(get1.Length, Is.EqualTo(stream.MemoryManager.LargeBufferMultiple));
            stream.Write(buffer, 0, 1);
            var get2 = stream.GetBuffer();
            Assert.That(stream.Length, Is.EqualTo(stream.MemoryManager.LargeBufferMultiple + 1));
            Assert.That(get2.Length, Is.EqualTo(stream.MemoryManager.LargeBufferMultiple * 2));
            RMSAssert.BuffersAreEqual(get1, get2, (int)stream.Length - 1);
            Assert.That(get2[stream.MemoryManager.LargeBufferMultiple], Is.EqualTo(buffer[0]));
        }

        [Test]
        public void WriteAfterLargeBufferDoesNotAllocateMoreBlocks()
        {
            var stream = this.GetDefaultStream();
            var buffer = this.GetRandomBuffer(stream.MemoryManager.BlockSize + 1);
            stream.Write(buffer, 0, buffer.Length);
            var inUseBlockBytes = stream.MemoryManager.SmallPoolInUseSize;
            stream.GetBuffer();
            Assert.That(stream.MemoryManager.SmallPoolInUseSize, Is.LessThanOrEqualTo(inUseBlockBytes));
            stream.Write(buffer, 0, buffer.Length);
            Assert.That(stream.MemoryManager.SmallPoolInUseSize, Is.LessThanOrEqualTo(inUseBlockBytes));
            var memMgr = stream.MemoryManager;
            stream.Dispose();
            Assert.That(memMgr.SmallPoolInUseSize, Is.EqualTo(0));
        }

        [Test]
        public void WriteNullBufferThrowsException()
        {
            var stream = this.GetDefaultStream();
            Assert.Throws<ArgumentNullException>(() => stream.Write(null, 0, 0));
        }

        [Test]
        public void WriteStartPastBufferThrowsException()
        {
            var stream = this.GetDefaultStream();
            Assert.Throws<ArgumentException>(() => stream.Write(new byte[] {0, 1}, 2, 1));
        }

        [Test]
        public void WriteStartBeforeBufferThrowsException()
        {
            var stream = this.GetDefaultStream();
            Assert.Throws<ArgumentOutOfRangeException>(() => stream.Write(new byte[] {0, 1}, -1, 0));
        }

        [Test]
        public void WriteNegativeCountThrowsException()
        {
            var stream = this.GetDefaultStream();
            Assert.Throws<ArgumentOutOfRangeException>(() => stream.Write(new byte[] {0, 1}, 0, -1));
        }

        [Test]
        public void WriteCountOutOfRangeThrowsException()
        {
            var stream = this.GetDefaultStream();
            Assert.Throws<ArgumentException>(() => stream.Write(new byte[] {0, 1}, 0, 3));
        }

        // This is a valid test, but it's too resource-intensive to run on a regular basis.
        //[Test]
        //public void WriteOverflowThrowsException()
        //{
        //    var stream = GetDefaultStream();
        //    int divisor = 256;
        //    var buffer = GetRandomBuffer(Int32.MaxValue / divisor);
        //    Assert.Throws<IOException>(() =>
        //    {
        //        for (int i = 0; i < divisor + 1; i++)
        //        {
        //            stream.Write(buffer, 0, buffer.Length);
        //        }
        //    });
        //}

        [Test]
        public void WriteUpdatesPosition()
        {
            var stream = this.GetDefaultStream();
            var bufferLength = stream.MemoryManager.BlockSize / 2 + 1;
            var buffer = this.GetRandomBuffer(bufferLength);

            for (var i = 0; i < 10; ++i)
            {
                stream.Write(buffer, 0, bufferLength);
                Assert.That(stream.Position, Is.EqualTo((i + 1) * bufferLength));
            }
        }

        [Test]
        public void WriteAfterEndIncreasesLength()
        {
            var stream = this.GetDefaultStream();
            const int initialPosition = 13;
            stream.Position = initialPosition;

            var buffer = this.GetRandomBuffer(10);
            stream.Write(buffer, 0, buffer.Length);
            Assert.That(stream.Length, Is.EqualTo(stream.Position));
            Assert.That(stream.Length, Is.EqualTo(initialPosition + buffer.Length));
        }

        #endregion

        #region Write Span Tests
        [Test]
        public void WriteSpanUpdatesLengthAndPosition()
        {
            const int expectedLength = 100;
            var memoryManager = this.GetMemoryManager();
            var stream = new RecyclableMemoryStream(memoryManager, string.Empty, expectedLength);
            var buffer = this.GetRandomBuffer(expectedLength);
            stream.Write(buffer.AsSpan());
            Assert.That(stream.Length, Is.EqualTo(expectedLength));
            Assert.That(stream.Position, Is.EqualTo(expectedLength));
        }

        [Test]
        public void WriteSpanInMiddleOfBufferDoesNotChangeLength()
        {
            var stream = this.GetDefaultStream();
            const int expectedLength = 100;
            var buffer = this.GetRandomBuffer(expectedLength);
            stream.Write(buffer.AsSpan());
            Assert.That(stream.Length, Is.EqualTo(expectedLength));
            var smallBufferLength = 25;
            var smallBuffer = this.GetRandomBuffer(smallBufferLength);
            stream.Position = 0;
            stream.Write(smallBuffer.AsSpan());
            Assert.That(stream.Length, Is.EqualTo(expectedLength));
        }

        [Test]
        public void WriteSpanSmallBufferStoresDataCorrectly()
        {
            var stream = this.GetDefaultStream();
            var buffer = this.GetRandomBuffer(100);
            stream.Write(buffer.AsSpan());
            RMSAssert.BuffersAreEqual(buffer, stream.GetBuffer(), buffer.Length);
        }

        [Test]
        public void WriteSpanLargeBufferStoresDataCorrectly()
        {
            var stream = this.GetDefaultStream();
            var buffer = this.GetRandomBuffer(stream.MemoryManager.BlockSize + 1);
            stream.Write(buffer.AsSpan());
            RMSAssert.BuffersAreEqual(buffer, stream.GetBuffer(), buffer.Length);
        }

        [Test]
        public void WriteSpanPastEndIncreasesCapacity()
        {
            var stream = this.GetDefaultStream();
            var buffer = this.GetRandomBuffer(DefaultBlockSize);
            stream.Write(buffer.AsSpan());
            Assert.That(stream.Capacity, Is.EqualTo(DefaultBlockSize));
            Assert.That(stream.MemoryManager.SmallPoolInUseSize, Is.EqualTo(DefaultBlockSize));
            stream.Write(new byte[] {0}.AsSpan());
            Assert.That(stream.Capacity, Is.EqualTo(2 * DefaultBlockSize));
            Assert.That(stream.MemoryManager.SmallPoolInUseSize, Is.EqualTo(2 * DefaultBlockSize));
        }

        [Test]
        public void WriteSpanPastEndOfLargeBufferIncreasesCapacityAndCopiesBuffer()
        {
            var stream = this.GetDefaultStream();
            var buffer = this.GetRandomBuffer(stream.MemoryManager.LargeBufferMultiple);
            stream.Write(buffer.AsSpan());
            var get1 = stream.GetBuffer();
            Assert.That(get1.Length, Is.EqualTo(stream.MemoryManager.LargeBufferMultiple));
            stream.Write(buffer.AsSpan(0, 1));
            var get2 = stream.GetBuffer();
            Assert.That(stream.Length, Is.EqualTo(stream.MemoryManager.LargeBufferMultiple + 1));
            Assert.That(get2.Length, Is.EqualTo(stream.MemoryManager.LargeBufferMultiple * 2));
            RMSAssert.BuffersAreEqual(get1, get2, (int)stream.Length - 1);
            Assert.That(get2[stream.MemoryManager.LargeBufferMultiple], Is.EqualTo(buffer[0]));
        }

        [Test]
        public void WriteSpanAfterLargeBufferDoesNotAllocateMoreBlocks()
        {
            var stream = this.GetDefaultStream();
            var buffer = this.GetRandomBuffer(stream.MemoryManager.BlockSize + 1);
            stream.Write(buffer.AsSpan());
            var inUseBlockBytes = stream.MemoryManager.SmallPoolInUseSize;
            stream.GetBuffer();
            Assert.That(stream.MemoryManager.SmallPoolInUseSize, Is.LessThanOrEqualTo(inUseBlockBytes));
            stream.Write(buffer.AsSpan());
            Assert.That(stream.MemoryManager.SmallPoolInUseSize, Is.LessThanOrEqualTo(inUseBlockBytes));
            var memMgr = stream.MemoryManager;
            stream.Dispose();
            Assert.That(memMgr.SmallPoolInUseSize, Is.EqualTo(0));
        }

        [Test]
        public void WriteSpanUpdatesPosition()
        {
            var stream = this.GetDefaultStream();
            var bufferLength = stream.MemoryManager.BlockSize / 2 + 1;
            var buffer = this.GetRandomBuffer(bufferLength);

            for (var i = 0; i < 10; ++i)
            {
                stream.Write(buffer.AsSpan());
                Assert.That(stream.Position, Is.EqualTo((i + 1) * bufferLength));
            }
        }

        [Test]
        public void WriteSpanAfterEndIncreasesLength()
        {
            var stream = this.GetDefaultStream();
            const int initialPosition = 13;
            stream.Position = initialPosition;

            var buffer = this.GetRandomBuffer(10);
            stream.Write(buffer.AsSpan());
            Assert.That(stream.Length, Is.EqualTo(stream.Position));
            Assert.That(stream.Length, Is.EqualTo(initialPosition + buffer.Length));
        }

        #endregion

        #region WriteByte tests
        [Test]
        public void WriteByteInMiddleSetsCorrectValue()
        {
            var stream = this.GetDefaultStream();
            var bufferLength = 100;
            var buffer = this.GetRandomBuffer(100);
            stream.Write(buffer, 0, bufferLength);
            stream.Position = 0;

            var buffer2 = this.GetRandomBuffer(100);

            for (var i = 0; i < bufferLength; ++i)
            {
                stream.WriteByte(buffer2[i]);
            }

            var newBuffer = stream.GetBuffer();
            for (var i = 0; i < bufferLength; ++i)
            {
                Assert.That(newBuffer[i], Is.EqualTo(buffer2[i]));
            }
        }

        [Test]
        public void WriteByteAtEndSetsCorrectValue()
        {
            var stream = this.GetDefaultStream();
            var buffer = this.GetRandomBuffer(stream.Capacity);
            stream.Write(buffer, 0, buffer.Length);

            const int testValue = 255;
            stream.WriteByte(testValue);
            stream.WriteByte(testValue);
            var newBuffer = stream.GetBuffer();
            Assert.That(newBuffer[buffer.Length], Is.EqualTo(testValue));
            Assert.That(newBuffer[buffer.Length + 1], Is.EqualTo(testValue));
        }

        [Test]
        public void WriteByteAtEndIncreasesLengthByOne()
        {
            var stream = this.GetDefaultStream();
            stream.WriteByte(255);
            Assert.That(stream.Length, Is.EqualTo(1));

            stream.Position = 0;

            var buffer = this.GetRandomBuffer(stream.Capacity);
            stream.Write(buffer, 0, buffer.Length);
            Assert.That(stream.Length, Is.EqualTo(buffer.Length));
            stream.WriteByte(255);
            Assert.That(stream.Length, Is.EqualTo(buffer.Length + 1));
        }

        [Test]
        public void WriteByteInMiddleDoesNotChangeLength()
        {
            var stream = this.GetDefaultStream();
            const int bufferLength = 100;
            var buffer = this.GetRandomBuffer(bufferLength);
            stream.Write(buffer, 0, bufferLength);
            Assert.That(stream.Length, Is.EqualTo(bufferLength));
            stream.Position = bufferLength / 2;
            stream.WriteByte(255);
            Assert.That(stream.Length, Is.EqualTo(bufferLength));
        }

        [Test]
        public void WriteByteDoesNotIncreaseCapacity()
        {
            var stream = this.GetDefaultStream();
            var bufferLength = stream.Capacity;
            var buffer = this.GetRandomBuffer(bufferLength);
            stream.Write(buffer, 0, bufferLength);
            Assert.That(stream.Capacity, Is.EqualTo(bufferLength));

            stream.Position = bufferLength / 2;
            stream.WriteByte(255);
            Assert.That(stream.Capacity, Is.EqualTo(bufferLength));
        }

        [Test]
        public void WriteByteIncreasesCapacity()
        {
            var stream = this.GetDefaultStream();
            var bufferLength = stream.Capacity;
            var buffer = this.GetRandomBuffer(bufferLength);
            stream.Write(buffer, 0, bufferLength);
            stream.WriteByte(255);
            Assert.That(stream.Capacity, Is.EqualTo(2 * bufferLength));
        }

        [Test]
        public void WriteByteUpdatesPosition()
        {
            var stream = this.GetDefaultStream();
            var end = stream.Capacity + 1;
            for (var i = 0; i < end; i++)
            {
                stream.WriteByte(255);
                Assert.That(stream.Position, Is.EqualTo(i + 1));
            }
        }

        [Test]
        public void WriteByteUpdatesLength()
        {
            var stream = this.GetDefaultStream();
            stream.Position = 13;
            stream.WriteByte(255);
            Assert.That(stream.Length, Is.EqualTo(14));
        }
        #endregion

        #region SafeReadByte Tests
        [Test]
        public void SafeReadByteDoesNotUpdateStreamPosition()
        {
            var stream = this.GetRandomStream();
            for (var i = 0L; i < stream.Length; i++)
            {
                var position = i;
                stream.SafeReadByte(ref position);
                Assert.That(position, Is.EqualTo(i + 1));
                Assert.That(stream.Position, Is.EqualTo(0));
            }
        }

        [Test]
        public void SafeReadByteDoesNotDependOnStreamPosition()
        {
            var stream = this.GetDefaultStream();
            var buffer = this.GetRandomBuffer(stream.Capacity * 2);
            stream.Write(buffer, 0, buffer.Length);

            for (var i = 0L; i < stream.Length; i++)
            {
                stream.Position = this.random.Next(0, buffer.Length - 1);
                var position = i;
                var read = stream.SafeReadByte(ref position);
                Assert.That(read, Is.EqualTo(buffer[i]));
                Assert.That(position, Is.EqualTo(i + 1));
            }
        }

        [Test]
        public void SafeReadByteCanBeUsedInParallel()
        {
            var stream = this.GetDefaultStream();
            var bufferLength = 1000;
            var buffer = this.GetRandomBuffer(bufferLength);
            stream.Write(buffer, 0, bufferLength);

            void read()
            {
                for (var i = 0; i < 1000; i++)
                {
                    var position = this.random.Next(0, bufferLength);
                    var byteRead = stream.SafeReadByte(ref position);

                    Assert.That(byteRead, Is.EqualTo(buffer[position - 1]));
                }
            }

            Parallel.For(0, 100, i => read());
        }
        #endregion

        #region ReadByte Tests
        [Test]
        public void ReadByteUpdatesPosition()
        {
            var stream = this.GetDefaultStream();
            var buffer = this.GetRandomBuffer(stream.Capacity * 2);
            stream.Write(buffer, 0, buffer.Length);
            stream.Position = 0;
            for (var i = 0; i < stream.Length; i++)
            {
                stream.ReadByte();
                Assert.That(stream.Position, Is.EqualTo(i + 1));
            }
        }

        [Test]
        public void ReadByteAtEndReturnsNegOne()
        {
            var stream = this.GetDefaultStream();
            const int bufferLength = 100;
            var buffer = this.GetRandomBuffer(bufferLength);
            stream.Write(buffer, 0, buffer.Length);
            Assert.That(stream.Position, Is.EqualTo(bufferLength));
            Assert.That(stream.ReadByte(), Is.EqualTo(-1));
            Assert.That(stream.Position, Is.EqualTo(bufferLength));
        }

        [Test]
        public void ReadByteReturnsCorrectValueFromBlocks()
        {
            var stream = this.GetDefaultStream();
            var buffer = this.GetRandomBuffer(stream.MemoryManager.BlockSize);
            stream.Write(buffer, 0, buffer.Length);
            stream.Position = 0;
            for (var i = 0; i < stream.Length; i++)
            {
                var b = stream.ReadByte();
                Assert.That(b, Is.EqualTo(buffer[i]));
            }
        }

        [Test]
        public void ReadByteReturnsCorrectValueFromLargeBuffer()
        {
            var stream = this.GetDefaultStream();
            var buffer = this.GetRandomBuffer(stream.MemoryManager.LargeBufferMultiple);
            stream.Write(buffer, 0, buffer.Length);
            stream.Position = 0;
            var copy = new byte[buffer.Length];
            for (var i = 0; i < stream.Length; i++)
            {
                copy[i] = (byte)stream.ReadByte();
            }
            RMSAssert.BuffersAreEqual(buffer, copy);
            RMSAssert.BuffersAreEqual(buffer, stream.GetBuffer(), buffer.Length);
        }
        #endregion

        #region SafeRead Tests
        [Test]
        public void SafeReadDoesNotUpdateStreamPosition()
        {
            var stream = this.GetRandomStream();

            var step = stream.MemoryManager.BlockSize / 2;
            var destBuffer = new byte[step];
            var bytesRead = 0;
            var position = 0L;

            while (position < stream.Length)
            {
                bytesRead += stream.SafeRead(destBuffer, 0, Math.Min(step, (int)stream.Length - bytesRead), ref position);
                Assert.That(position, Is.EqualTo(bytesRead));
                Assert.That(stream.Position, Is.EqualTo(0));
            }
        }

        [Test]
        public void SafeReadDoesNotDependOnStreamPosition()
        {
            var stream = this.GetDefaultStream();
            var bufferLength = 1000000;
            var buffer = this.GetRandomBuffer(bufferLength);
            stream.Write(buffer, 0, bufferLength);

            var step = stream.MemoryManager.BlockSize / 2;
            var destBuffer = new byte[step];
            var expected = new byte[step];
            var bytesRead = 0;
            var position = 0L;

            while (position < stream.Length)
            {
                stream.Position = this.random.Next(0, bufferLength);
                var lastPosition = position;
                var lastRead = stream.SafeRead(destBuffer, 0, Math.Min(step, (int)stream.Length - bytesRead), ref position);
                bytesRead += lastRead;

                Array.Copy(buffer, lastPosition, expected, 0, lastRead);

                Assert.That(position, Is.EqualTo(bytesRead));
                RMSAssert.BuffersAreEqual(destBuffer, expected, lastRead);
            }
        }

        [Test]
        public void SafeReadCallsDontAffectOtherSafeReadCalls()
        {
            var stream = this.GetDefaultStream();
            var bufferLength = 1000000;
            var buffer = this.GetRandomBuffer(bufferLength);
            stream.Write(buffer, 0, bufferLength);

            var stepSlow = stream.MemoryManager.BlockSize / 4;
            var stepFast = stream.MemoryManager.BlockSize / 2;
            var readBuffer = new byte[stepFast];
            var readSlow = new MemoryStream();
            var readFast = new MemoryStream();

            var positionSlow = 0L;
            var positionFast = 0L;

            while (positionFast < stream.Length)
            {
                var read = stream.SafeRead(readBuffer, 0, stepFast, ref positionFast);
                readFast.Write(readBuffer, 0, read);
                read = stream.SafeRead(readBuffer, 0, stepSlow, ref positionSlow);
                readSlow.Write(readBuffer, 0, read);
            }
            while (positionSlow < stream.Length)
            {
                var read = stream.SafeRead(readBuffer, 0, stepSlow, ref positionSlow);
                readSlow.Write(readBuffer, 0, read);
            }

            RMSAssert.BuffersAreEqual(readSlow.ToArray(), buffer);
            RMSAssert.BuffersAreEqual(readFast.ToArray(), buffer);
        }

        [Test]
        public void SafeReadCanBeUsedInParallel()
        {
            var stream = this.GetDefaultStream();
            var bufferLength = 1000000;
            var buffer = this.GetRandomBuffer(bufferLength);
            stream.Write(buffer, 0, bufferLength);

            void read()
            {
                for (var i = 0; i < 5; i++)
                {
                    long position = this.random.Next(0, bufferLength);
                    long startPosition = position;
                    var length = this.random.Next(0, (int)(bufferLength - position));
                    var readBuffer = new byte[length];
                    var bytesRead = stream.SafeRead(readBuffer, 0, length, ref position);

                    RMSAssert.BuffersAreEqual(readBuffer, 0, buffer, (int)startPosition, bytesRead);
                }
            }

            Parallel.For(0, 5, i => read());
        }
        #endregion

        #region SafeRead Span Tests
        [Test]
        public void SafeReadSpanDoesNotUpdateStreamPosition()
        {
            var stream = this.GetRandomStream();

            var step = stream.MemoryManager.BlockSize / 2;
            var destBuffer = new byte[step];
            var bytesRead = 0;
            var position = 0L;

            while (position < stream.Length)
            {
                bytesRead += stream.SafeRead(destBuffer.AsSpan(0, Math.Min(step, (int)stream.Length - bytesRead)), ref position);
                Assert.That(position, Is.EqualTo(bytesRead));
                Assert.That(stream.Position, Is.EqualTo(0));
            }
        }

        [Test]
        public void SafeReadSpanDoesNotDependOnStreamPosition()
        {
            var stream = this.GetDefaultStream();
            var bufferLength = 1000000;
            var buffer = this.GetRandomBuffer(bufferLength);
            stream.Write(buffer, 0, bufferLength);

            var step = stream.MemoryManager.BlockSize / 2;
            var destBuffer = new byte[step];
            var expected = new byte[step];
            var bytesRead = 0;
            var position = 0L;

            while (position < stream.Length)
            {
                stream.Position = this.random.Next(0, bufferLength);
                var lastPosition = position;
                var lastRead = stream.SafeRead(destBuffer.AsSpan(0, Math.Min(step, (int)stream.Length - bytesRead)), ref position);
                bytesRead += lastRead;

                Array.Copy(buffer, lastPosition, expected, 0, lastRead);

                Assert.That(position, Is.EqualTo(bytesRead));
                RMSAssert.BuffersAreEqual(destBuffer, expected, lastRead);
            }
        }

        [Test]
        public void SafeReadSpanCallsDontAffectOtherSafeReadCalls()
        {
            var stream = this.GetDefaultStream();
            var bufferLength = 1000000;
            var buffer = this.GetRandomBuffer(bufferLength);
            stream.Write(buffer, 0, bufferLength);

            var stepSlow = stream.MemoryManager.BlockSize / 4;
            var stepFast = stream.MemoryManager.BlockSize / 2;
            var readBuffer = new byte[stepFast];
            var readSlow = new MemoryStream();
            var readFast = new MemoryStream();

            var positionSlow = 0L;
            var positionFast = 0L;

            while (positionFast < stream.Length)
            {
                var read = stream.SafeRead(readBuffer.AsSpan(0, stepFast), ref positionFast);
                readFast.Write(readBuffer, 0, read);
                read = stream.SafeRead(readBuffer.AsSpan(0, stepSlow), ref positionSlow);
                readSlow.Write(readBuffer, 0, read);
            }
            while (positionSlow < stream.Length)
            {
                var read = stream.SafeRead(readBuffer.AsSpan(0, stepSlow), ref positionSlow);
                readSlow.Write(readBuffer, 0, read);
            }

            RMSAssert.BuffersAreEqual(readSlow.ToArray(), buffer);
            RMSAssert.BuffersAreEqual(readFast.ToArray(), buffer);
        }

        [Test]
        public void SafeReadSpanCanBeUsedInParallel()
        {
            var stream = this.GetDefaultStream();
            var bufferLength = 1000000;
            var buffer = this.GetRandomBuffer(bufferLength);
            stream.Write(buffer, 0, bufferLength);

            void read()
            {
                for (var i = 0; i < 5; i++)
                {
                    var position = this.random.Next(0, bufferLength);
                    var startPosition = position;
                    var length = this.random.Next(0, (int)(bufferLength - position));
                    var readBuffer = new byte[length];
                    var bytesRead = stream.SafeRead(readBuffer.AsSpan(0, length), ref position);

                    RMSAssert.BuffersAreEqual(readBuffer, 0, buffer, (int)startPosition, bytesRead);
                }
            }

            Parallel.For(0, 5, i => read());
        }
        #endregion

        #region Read tests
        [Test]
        public void ReadNullBufferThrowsException()
        {
            var stream = this.GetDefaultStream();
            Assert.Throws<ArgumentNullException>(() => stream.Read(null, 0, 1));
        }

        [Test]
        public void ReadNegativeOffsetThrowsException()
        {
            var bufferLength = 100;
            var stream = this.GetDefaultStream();
            Assert.Throws<ArgumentOutOfRangeException>(() => stream.Read(new byte[bufferLength], -1, 1));
        }

        [Test]
        public void ReadOffsetPastEndThrowsException()
        {
            var bufferLength = 100;
            var stream = this.GetDefaultStream();
            Assert.Throws<ArgumentException>(() => stream.Read(new byte[bufferLength], bufferLength, 1));
        }

        [Test]
        public void ReadNegativeCountThrowsException()
        {
            var bufferLength = 100;
            var stream = this.GetDefaultStream();
            Assert.Throws<ArgumentOutOfRangeException>(() => stream.Read(new byte[bufferLength], 0, -1));
        }

        [Test]
        public void ReadCountOutOfBoundsThrowsException()
        {
            var bufferLength = 100;
            var stream = this.GetDefaultStream();
            Assert.Throws<ArgumentException>(() => stream.Read(new byte[bufferLength], 0, bufferLength + 1));
        }

        [Test]
        public void ReadOffsetPlusCountLargerThanBufferThrowsException()
        {
            var bufferLength = 100;
            var stream1 = this.GetDefaultStream();
            Assert.Throws<ArgumentException>(() => stream1.Read(new byte[bufferLength], bufferLength / 2, bufferLength / 2 + 1));
            var stream2 = this.GetDefaultStream();
            Assert.Throws<ArgumentException>(() => stream2.Read(new byte[bufferLength], bufferLength / 2 + 1, bufferLength / 2));
        }

        [Test]
        public void ReadSingleBlockReturnsCorrectBytesReadAndContentsAreCorrect()
        {
            this.WriteAndReadBytes(DefaultBlockSize);
        }

        [Test]
        public void ReadMultipleBlocksReturnsCorrectBytesReadAndContentsAreCorrect()
        {
            this.WriteAndReadBytes(DefaultBlockSize * 2);
        }

        protected void WriteAndReadBytes(int length)
        {
            var stream = this.GetDefaultStream();
            var buffer = this.GetRandomBuffer(length);
            stream.Write(buffer, 0, buffer.Length);

            stream.Position = 0;

            var newBuffer = new byte[buffer.Length];
            var amountRead = stream.Read(newBuffer, 0, (int)stream.Length);
            Assert.That(amountRead, Is.EqualTo(stream.Length));
            Assert.That(amountRead, Is.EqualTo(buffer.Length));

            RMSAssert.BuffersAreEqual(buffer, newBuffer, buffer.Length);
        }

        [Test]
        public void ReadFromOffsetHasCorrectLengthAndContents()
        {
            var stream = this.GetDefaultStream();
            var buffer = this.GetRandomBuffer(100);
            stream.Write(buffer, 0, buffer.Length);

            stream.Position = buffer.Length / 2;
            var amountToRead = buffer.Length / 4;

            var newBuffer = new byte[amountToRead];
            var amountRead = stream.Read(newBuffer, 0, amountToRead);
            Assert.That(amountRead, Is.EqualTo(amountToRead));
            RMSAssert.BuffersAreEqual(buffer, buffer.Length / 2, newBuffer, 0, amountRead);
        }

        [Test]
        public void ReadToOffsetHasCorrectLengthAndContents()
        {
            var stream = this.GetDefaultStream();
            var buffer = this.GetRandomBuffer(100);
            stream.Write(buffer, 0, buffer.Length);

            stream.Position = 0;
            var newBufferSize = buffer.Length / 2;
            var amountToRead = buffer.Length / 4;
            var offset = newBufferSize - amountToRead;

            var newBuffer = new byte[newBufferSize];
            var amountRead = stream.Read(newBuffer, offset, amountToRead);
            Assert.That(amountRead, Is.EqualTo(amountToRead));
            RMSAssert.BuffersAreEqual(buffer, 0, newBuffer, offset, amountRead);
        }

        [Test]
        public void ReadFromAndToOffsetHasCorrectLengthAndContents()
        {
            var stream = this.GetDefaultStream();
            var buffer = this.GetRandomBuffer(100);
            stream.Write(buffer, 0, buffer.Length);

            stream.Position = buffer.Length / 2;
            var newBufferSize = buffer.Length / 2;
            var amountToRead = buffer.Length / 4;
            var offset = newBufferSize - amountToRead;

            var newBuffer = new byte[newBufferSize];
            var amountRead = stream.Read(newBuffer, offset, amountToRead);
            Assert.That(amountRead, Is.EqualTo(amountToRead));
            RMSAssert.BuffersAreEqual(buffer, buffer.Length / 2, newBuffer, offset, amountRead);
        }

        [Test]
        public void ReadUpdatesPosition()
        {
            var stream = this.GetDefaultStream();
            var bufferLength = 1000000;
            var buffer = this.GetRandomBuffer(bufferLength);
            stream.Write(buffer, 0, bufferLength);

            stream.Position = 0;

            var step = stream.MemoryManager.BlockSize / 2;
            var destBuffer = new byte[step];
            var bytesRead = 0;
            while (stream.Position < stream.Length)
            {
                bytesRead += stream.Read(destBuffer, 0, Math.Min(step, (int)stream.Length - bytesRead));
                Assert.That(stream.Position, Is.EqualTo(bytesRead));
            }
        }

        [Test]
        public void ReadReturnsEarlyIfLackOfData()
        {
            var stream = this.GetDefaultStream();
            var bufferLength = 100;
            var buffer = this.GetRandomBuffer(bufferLength);
            stream.Write(buffer, 0, bufferLength);

            stream.Position = bufferLength / 2;
            var newBuffer = new byte[bufferLength];
            var amountRead = stream.Read(newBuffer, 0, bufferLength);
            Assert.That(amountRead, Is.EqualTo(bufferLength / 2));
        }

        [Test]
        public void ReadPastEndOfLargeBufferIsOk()
        {
            var stream = this.GetDefaultStream();
            var bufferLength = stream.MemoryManager.LargeBufferMultiple;
            var buffer = this.GetRandomBuffer(bufferLength);
            stream.Write(buffer, 0, buffer.Length);

            // Force switch to large buffer
            stream.GetBuffer();

            stream.Position = stream.Length / 2;
            var destBuffer = new byte[bufferLength];
            var amountRead = stream.Read(destBuffer, 0, destBuffer.Length);
            Assert.That(amountRead, Is.EqualTo(stream.Length / 2));
        }

        [Test]
        public void ReadFromPastEndReturnsZero()
        {
            var stream = this.GetDefaultStream();
            const int bufferLength = 100;
            var buffer = this.GetRandomBuffer(bufferLength);
            stream.Write(buffer, 0, bufferLength);
            stream.Position = bufferLength;
            var amountRead = stream.Read(buffer, 0, bufferLength);
            Assert.That(amountRead, Is.EqualTo(0));
        }
        #endregion

        #region Read tests
        [Test]
        public void ReadSpanSingleBlockReturnsCorrectBytesReadAndContentsAreCorrect()
        {
            this.WriteAndReadSpanBytes(DefaultBlockSize);
        }

        [Test]
        public void ReadSpanMultipleBlocksReturnsCorrectBytesReadAndContentsAreCorrect()
        {
            this.WriteAndReadSpanBytes(DefaultBlockSize * 2);
        }

        protected void WriteAndReadSpanBytes(int length)
        {
            var stream = this.GetDefaultStream();
            var buffer = this.GetRandomBuffer(length);
            stream.Write(buffer.AsSpan());

            stream.Position = 0;

            var newBuffer = new byte[buffer.Length];
            var amountRead = stream.Read(newBuffer.AsSpan(0, (int)stream.Length));
            Assert.That(amountRead, Is.EqualTo(stream.Length));
            Assert.That(amountRead, Is.EqualTo(buffer.Length));

            RMSAssert.BuffersAreEqual(buffer, newBuffer, buffer.Length);
        }

        [Test]
        public void ReadSpanFromOffsetHasCorrectLengthAndContents()
        {
            var stream = this.GetDefaultStream();
            var buffer = this.GetRandomBuffer(100);
            stream.Write(buffer.AsSpan());

            stream.Position = buffer.Length / 2;
            var amountToRead = buffer.Length / 4;

            var newBuffer = new byte[amountToRead];
            var amountRead = stream.Read(newBuffer.AsSpan());
            Assert.That(amountRead, Is.EqualTo(amountToRead));
            RMSAssert.BuffersAreEqual(buffer, buffer.Length / 2, newBuffer, 0, amountRead);
        }

        [Test]
        public void ReadSpanToOffsetHasCorrectLengthAndContents()
        {
            var stream = this.GetDefaultStream();
            var buffer = this.GetRandomBuffer(100);
            stream.Write(buffer.AsSpan());

            stream.Position = 0;
            var newBufferSize = buffer.Length / 2;
            var amountToRead = buffer.Length / 4;
            var offset = newBufferSize - amountToRead;

            var newBuffer = new byte[newBufferSize];
            var amountRead = stream.Read(newBuffer.AsSpan(offset, amountToRead));
            Assert.That(amountRead, Is.EqualTo(amountToRead));
            RMSAssert.BuffersAreEqual(buffer, 0, newBuffer, offset, amountRead);
        }

        [Test]
        public void ReadSpanFromAndToOffsetHasCorrectLengthAndContents()
        {
            var stream = this.GetDefaultStream();
            var buffer = this.GetRandomBuffer(100);
            stream.Write(buffer.AsSpan());

            stream.Position = buffer.Length / 2;
            var newBufferSize = buffer.Length / 2;
            var amountToRead = buffer.Length / 4;
            var offset = newBufferSize - amountToRead;

            var newBuffer = new byte[newBufferSize];
            var amountRead = stream.Read(newBuffer.AsSpan(offset, amountToRead));
            Assert.That(amountRead, Is.EqualTo(amountToRead));
            RMSAssert.BuffersAreEqual(buffer, buffer.Length / 2, newBuffer, offset, amountRead);
        }

        [Test]
        public void ReadSpanUpdatesPosition()
        {
            var stream = this.GetDefaultStream();
            var bufferLength = 1000000;
            var buffer = this.GetRandomBuffer(bufferLength);
            stream.Write(buffer.AsSpan());

            stream.Position = 0;

            var step = stream.MemoryManager.BlockSize / 2;
            var destBuffer = new byte[step];
            var bytesRead = 0;
            while (stream.Position < stream.Length)
            {
                bytesRead += stream.Read(destBuffer.AsSpan(0, Math.Min(step, (int)stream.Length - bytesRead)));
                Assert.That(stream.Position, Is.EqualTo(bytesRead));
            }
        }

        [Test]
        public void ReadSpanReturnsEarlyIfLackOfData()
        {
            var stream = this.GetDefaultStream();
            var bufferLength = 100;
            var buffer = this.GetRandomBuffer(bufferLength);
            stream.Write(buffer.AsSpan());

            stream.Position = bufferLength / 2;
            var newBuffer = new byte[bufferLength];
            var amountRead = stream.Read(newBuffer.AsSpan());
            Assert.That(amountRead, Is.EqualTo(bufferLength / 2));
        }

        [Test]
        public void ReadSpanPastEndOfLargeBufferIsOk()
        {
            var stream = this.GetDefaultStream();
            var bufferLength = stream.MemoryManager.LargeBufferMultiple;
            var buffer = this.GetRandomBuffer(bufferLength);
            stream.Write(buffer.AsSpan());

            // Force switch to large buffer
            stream.GetBuffer();

            stream.Position = stream.Length / 2;
            var destBuffer = new byte[bufferLength];
            var amountRead = stream.Read(destBuffer.AsSpan());
            Assert.That(amountRead, Is.EqualTo(stream.Length / 2));
        }

        [Test]
        public void ReadSpanFromPastEndReturnsZero()
        {
            var stream = this.GetDefaultStream();
            const int bufferLength = 100;
            var buffer = this.GetRandomBuffer(bufferLength);
            stream.Write(buffer.AsSpan());
            stream.Position = bufferLength;
            var amountRead = stream.Read(buffer.AsSpan());
            Assert.That(amountRead, Is.EqualTo(0));
        }
        #endregion

        #region Capacity tests
        [Test]
        public void SetCapacityRoundsUp()
        {
            var stream = this.GetDefaultStream();
            const int step = 51001;
            for (var i = 0; i < 100; i++)
            {
                stream.Capacity += step;
                Assert.That(stream.Capacity % stream.MemoryManager.BlockSize, Is.EqualTo(0));
            }
        }

        [Test]
        public void DecreaseCapacityDoesNothing()
        {
            var stream = this.GetDefaultStream();
            var originalCapacity = stream.Capacity;
            stream.Capacity *= 2;
            var newCapacity = stream.Capacity;
            Assert.That(stream.Capacity, Is.GreaterThan(originalCapacity));
            stream.Capacity /= 2;
            Assert.That(stream.Capacity, Is.EqualTo(newCapacity));
        }

        [Test]
        public void CapacityGoesLargeWhenLargeGetBufferCalled()
        {
            var stream = this.GetDefaultStream();
            var buffer = this.GetRandomBuffer(stream.MemoryManager.BlockSize);
            stream.Write(buffer, 0, buffer.Length);
            Assert.That(stream.Capacity, Is.EqualTo(stream.MemoryManager.BlockSize));
            stream.Write(buffer, 0, buffer.Length);
            stream.GetBuffer();
            Assert.That(stream.Capacity, Is.EqualTo(stream.MemoryManager.LargeBufferMultiple));
        }

        [Test]
        public void EnsureCapacityOperatesOnLargeBufferWhenNeeded()
        {
            var stream = this.GetDefaultStream();
            var buffer = this.GetRandomBuffer(stream.MemoryManager.BlockSize);
            stream.Write(buffer, 0, buffer.Length);
            stream.Write(buffer, 0, buffer.Length);
            stream.GetBuffer();

            // At this point, we're not longer using blocks, just large buffers
            Assert.That(stream.Capacity, Is.EqualTo(stream.MemoryManager.LargeBufferMultiple));

            // this should bump up the capacity by the LargeBufferMultiple
            stream.Capacity = stream.MemoryManager.LargeBufferMultiple + 1;

            Assert.That(stream.Capacity, Is.EqualTo(stream.MemoryManager.LargeBufferMultiple * 2));
        }
        #endregion

        #region SetLength Tests
        [Test]
        public void SetLengthThrowsExceptionOnNegativeValue()
        {
            var stream = this.GetDefaultStream();
            Assert.Throws<ArgumentOutOfRangeException>(() => stream.SetLength(-1));
        }

        [Test]
        public void SetLengthSetsLength()
        {
            var stream = this.GetDefaultStream();
            var length = 100;
            stream.SetLength(length);
            Assert.That(stream.Length, Is.EqualTo(length));
        }

        [Test]
        public void SetLengthIncreasesCapacity()
        {
            var stream = this.GetDefaultStream();
            var length = stream.Capacity + 1;
            stream.SetLength(length);
            Assert.That(stream.Capacity, Is.AtLeast(stream.Length));
        }

        [Test]
        public void SetLengthCanSetPosition()
        {
            var stream = this.GetDefaultStream();
            var length = 100;
            stream.SetLength(length);
            stream.Position = length / 2;
            Assert.That(stream.Position, Is.EqualTo(length / 2));
        }

        [Test]
        public void SetLengthDoesNotResetPositionWhenGrowing()
        {
            var stream = this.GetDefaultStream();
            var bufferLength = 100;
            var buffer = this.GetRandomBuffer(bufferLength);
            stream.Write(buffer, 0, bufferLength);
            stream.Position = bufferLength / 4;
            stream.SetLength(bufferLength / 2);
            Assert.That(stream.Position, Is.EqualTo(bufferLength / 4));
        }

        [Test]
        public void SetLengthMovesPositionToBeInBounds()
        {
            var stream = this.GetDefaultStream();
            var bufferLength = 100;
            var buffer = this.GetRandomBuffer(bufferLength);
            stream.Write(buffer, 0, bufferLength);
            Assert.That(stream.Position, Is.EqualTo(bufferLength));
            stream.SetLength(bufferLength / 2);
            Assert.That(stream.Length, Is.EqualTo(bufferLength / 2));
            Assert.That(stream.Position, Is.EqualTo(stream.Length));
        }
        #endregion

        #region ToString Tests
        [Test]
        public void ToStringReturnsHelpfulDebugInfo()
        {
            var tag = "Nunit test";
            var stream = new RecyclableMemoryStream(this.GetMemoryManager(), tag);
            var buffer = this.GetRandomBuffer(1000);
            stream.Write(buffer, 0, buffer.Length);
            var debugInfo = stream.ToString();

            Assert.That(debugInfo, Contains.Substring(stream.Id.ToString()));
            Assert.That(debugInfo, Contains.Substring(tag));
            Assert.That(debugInfo, Contains.Substring(buffer.Length.ToString("N0")));
        }

        [Test]
        public void ToStringWithNullTagIsOk()
        {
            var stream = new RecyclableMemoryStream(this.GetMemoryManager(), null);
            var buffer = this.GetRandomBuffer(1000);
            stream.Write(buffer, 0, buffer.Length);
            var debugInfo = stream.ToString();

            Assert.That(debugInfo, Contains.Substring(stream.Id.ToString()));
            Assert.That(debugInfo, Contains.Substring(buffer.Length.ToString("N0")));
        }
        #endregion

        #region ToArray Tests
        [Test]
        public void ToArrayReturnsDifferentBufferThanGetBufferWithSameContents()
        {
            var stream = this.GetDefaultStream();
            var bufferLength = 100;
            var buffer = this.GetRandomBuffer(bufferLength);

            stream.Write(buffer, 0, bufferLength);

            var getBuffer = stream.GetBuffer();
            var toArrayBuffer = stream.ToArray();
            Assert.That(toArrayBuffer, Is.Not.SameAs(getBuffer));
            RMSAssert.BuffersAreEqual(toArrayBuffer, getBuffer, bufferLength);
        }

        [Test]
        public void ToArrayWithLargeBufferReturnsDifferentBufferThanGetBufferWithSameContents()
        {
            var stream = this.GetDefaultStream();
            var bufferLength = stream.MemoryManager.BlockSize * 2;
            var buffer = this.GetRandomBuffer(bufferLength);

            stream.Write(buffer, 0, bufferLength);

            var getBuffer = stream.GetBuffer();
            var toArrayBuffer = stream.ToArray();
            Assert.That(toArrayBuffer, Is.Not.SameAs(getBuffer));
            RMSAssert.BuffersAreEqual(toArrayBuffer, getBuffer, bufferLength);
        }

        [Test]
        public void ToArrayThrowsExceptionWhenConfigured()
        {
            var stream = this.GetDefaultStream();
            var bufferLength = stream.MemoryManager.BlockSize * 2;
            var buffer = this.GetRandomBuffer(bufferLength);

            stream.Write(buffer, 0, bufferLength);
            
            // Ensure default is false
            Assert.DoesNotThrow(() => stream.ToArray());

            stream.MemoryManager.ThrowExceptionOnToArray = true;
            Assert.Throws<NotSupportedException>(() => stream.ToArray());

            stream.MemoryManager.ThrowExceptionOnToArray = false;
            Assert.DoesNotThrow(() => stream.ToArray());
        }
        #endregion

        #region CanRead, CanSeek, etc. Tests
        [Test]
        public void CanSeekIsTrue()
        {
            Assert.That(this.GetDefaultStream().CanSeek, Is.True);
        }

        [Test]
        public void CanReadIsTrue()
        {
            Assert.That(this.GetDefaultStream().CanRead, Is.True);
        }

        [Test]
        public void CanWriteIsTrue()
        {
            Assert.That(this.GetDefaultStream().CanWrite, Is.True);
        }

        [Test]
        public void CanTimeutIsFalse()
        {
            Assert.That(this.GetDefaultStream().CanTimeout, Is.False);
        }
        #endregion

        #region Seek Tests
        [Test]
        public void SeekFromBeginToBeforeBeginThrowsException()
        {
            var stream = this.GetDefaultStream();
            Assert.Throws<IOException>(() => stream.Seek(-1, SeekOrigin.Begin));
        }

        [Test]
        public void SeekFromCurrentToBeforeBeginThrowsException()
        {
            var stream = this.GetDefaultStream();
            Assert.Throws<IOException>(() => stream.Seek(-1, SeekOrigin.Current));
        }

        [Test]
        public void SeekFromEndToBeforeBeginThrowsException()
        {
            var stream = this.GetDefaultStream();
            Assert.Throws<IOException>(() => stream.Seek(-1, SeekOrigin.End));
        }

        [Test]
        public void SeekWithBadOriginThrowsException()
        {
            var stream = this.GetDefaultStream();
            Assert.Throws<ArgumentException>(() => stream.Seek(1, (SeekOrigin)99));
        }

        [Test]
        public void SeekPastEndOfStreamHasCorrectPosition()
        {
            var stream = this.GetDefaultStream();
            const int expected = 100;
            stream.Seek(expected, SeekOrigin.Begin);
            Assert.That(stream.Position, Is.EqualTo(expected));
            Assert.That(stream.Length, Is.EqualTo(0));
        }

        [Test]
        public void SeekFromBeginningHasCorrectPosition()
        {
            var stream = this.GetDefaultStream();
            var position = 100;
            stream.Seek(position, SeekOrigin.Begin);
            Assert.That(stream.Position, Is.EqualTo(position));
        }

        [Test]
        public void SeekFromCurrentHasCorrectPosition()
        {
            var stream = this.GetDefaultStream();
            var position = 100;
            stream.Seek(position, SeekOrigin.Begin);
            Assert.That(stream.Position, Is.EqualTo(position));

            stream.Seek(-100, SeekOrigin.Current);
            Assert.That(stream.Position, Is.EqualTo(0));
        }

        [Test]
        public void SeekFromEndHasCorrectPosition()
        {
            var stream = this.GetDefaultStream();
            var length = 100;
            stream.SetLength(length);

            stream.Seek(-1, SeekOrigin.End);
            Assert.That(stream.Position, Is.EqualTo(length - 1));
        }

        [Test]
        public void SeekPastEndAndWriteHasCorrectLengthAndPosition()
        {
            var stream = this.GetDefaultStream();
            const int position = 100;
            const int bufferLength = 100;
            stream.Seek(position, SeekOrigin.Begin);
            var buffer = this.GetRandomBuffer(bufferLength);
            stream.Write(buffer, 0, bufferLength);
            Assert.That(stream.Length, Is.EqualTo(position + bufferLength));
            Assert.That(stream.Position, Is.EqualTo(position + bufferLength));
        }
        #endregion

        #region Position Tests
        [Test]
        public void PositionSetToNegativeThrowsException()
        {
            var stream = this.GetDefaultStream();
            Assert.Throws<ArgumentOutOfRangeException>(() => stream.Position = -1);
        }

        [Test]
        public void PositionSetToAnyValue()
        {
            var stream = this.GetDefaultStream();
            var maxValue = Int32.MaxValue;
            var step = maxValue / 32;
            for (long i = 0; i < maxValue; i += step)
            {
                stream.Position = i;
                Assert.That(stream.Position, Is.EqualTo(i));
            }
        }
        #endregion

        #region Advance Tests
        [Test]
        public void AdvanceByNegativeThrowsException()
        {
            var stream = this.GetDefaultStream();
            stream.Position = 10;
            Assert.Throws<ArgumentOutOfRangeException>(() => stream.Advance(-1));
        }

        [Test]
        public void AdvancePastLargerThanMaxStreamLengthThrowsException()
        {
            var stream = this.GetDefaultStream();
            stream.Advance(1);
            Assert.Throws<InvalidOperationException>(() => stream.Advance(Int32.MaxValue));
        }

        [Test]
        public void AdvancePastTempBufferLengthThrowsException()
        {
            var stream = this.GetDefaultStream();
            var memory = stream.GetMemory(stream.MemoryManager.BlockSize + 1);
            Assert.Throws<InvalidOperationException>(() => stream.Advance(memory.Length + 1));
        }

        [Test]
        public void AdvancePastBlockLengthThrowsException()
        {
            var stream = this.GetDefaultStream();
            var memory = stream.GetMemory();
            Assert.Throws<InvalidOperationException>(() => stream.Advance(memory.Length + 1));
        }

        [Test]
        public void AdvancePastLargeBufferLengthThrowsException()
        {
            var stream = this.GetDefaultStream();
            stream.Position = stream.MemoryManager.BlockSize + 1;
            stream.GetBuffer();
            var memory = stream.GetMemory();
            Assert.Throws<InvalidOperationException>(() => stream.Advance(memory.Length + 1));
        }

        [Test]
        public void AdvanceToAnyValue()
        {
            var stream = this.GetDefaultStream();
            var maxValue = Int32.MaxValue;
            var step = maxValue / 32;
            for (int i = 1; i <= 32; i++)
            {
                stream.GetSpan(step);
                stream.Advance(step);
                Assert.That(stream.Position, Is.EqualTo(i * step));
                Assert.That(stream.Length, Is.EqualTo(i * step));
            }

            stream.Position = 0;
            for (int i = 1; i <= 32; i++)
            {
                stream.GetSpan(step);
                stream.Advance(step);
                Assert.That(stream.Position, Is.EqualTo(i * step));
                Assert.That(stream.Length, Is.EqualTo(32 * step));
            }
        }

        [Test]
        public void AdvanceOverTempBufferMakesWritesVisible()
        {
            var stream = this.GetDefaultStream();
            var buffer = this.GetRandomBuffer(32);
            var memory = stream.GetMemory(stream.MemoryManager.BlockSize + 1);
            buffer.CopyTo(memory);
            Assert.That(stream.GetBuffer().AsMemory(0, 32).ToArray(), Is.Not.EquivalentTo(buffer));
            stream.Advance(buffer.Length);
            Assert.That(stream.GetBuffer().AsMemory(0, 32).ToArray(), Is.EquivalentTo(buffer));
        }

        [Test]
        public void AdvanceOverReplacedTempBufferDoesNotMakeWritesVisible()
        {
            var stream = this.GetDefaultStream();
            var buffer1 = this.GetRandomBuffer(32);
            var buffer2 = this.GetRandomBuffer(32);
            var memory = stream.GetMemory(stream.MemoryManager.BlockSize + 1);
            buffer1.CopyTo(memory);
            memory = stream.GetMemory(stream.MemoryManager.BlockSize + 1);
            buffer2.CopyTo(memory);
            stream.Advance(buffer2.Length);
            Assert.That(stream.GetBuffer().AsMemory(0, 32).ToArray(), Is.Not.EquivalentTo(buffer1));
            Assert.That(stream.GetBuffer().AsMemory(0, 32).ToArray(), Is.EquivalentTo(buffer2));
        }
        #endregion

        #region Dispose and Pooling Tests
        [Test]
        public void Pooling_NewMemoryManagerHasZeroFreeAndInUseBytes()
        {
            var memMgr = this.GetMemoryManager();
            Assert.That(memMgr.SmallPoolFreeSize, Is.EqualTo(0));
            Assert.That(memMgr.LargePoolFreeSize, Is.EqualTo(0));

            Assert.That(memMgr.SmallPoolInUseSize, Is.EqualTo(0));
            Assert.That(memMgr.LargePoolInUseSize, Is.EqualTo(0));
        }

        [Test]
        public void Pooling_NewStreamIncrementsInUseBytes()
        {
            var memMgr = this.GetMemoryManager();
            Assert.That(memMgr.SmallPoolInUseSize, Is.EqualTo(0));

            var stream = new RecyclableMemoryStream(memMgr);
            Assert.That(stream.Capacity, Is.EqualTo(memMgr.BlockSize));
            Assert.That(memMgr.SmallPoolInUseSize, Is.EqualTo(memMgr.BlockSize));
            Assert.That(memMgr.SmallPoolFreeSize, Is.EqualTo(0));
        }

        [Test]
        public void Pooling_DisposeOneBlockAdjustsInUseAndFreeBytes()
        {
            var stream = this.GetDefaultStream();
            var memMgr = stream.MemoryManager;
            Assert.That(stream.MemoryManager.SmallPoolInUseSize, Is.EqualTo(stream.Capacity));

            stream.Dispose();
            Assert.That(memMgr.SmallPoolInUseSize, Is.EqualTo(0));
            Assert.That(memMgr.SmallPoolFreeSize, Is.EqualTo(memMgr.BlockSize));
        }

        [Test]
        public void Pooling_DisposeMultipleBlocksAdjustsInUseAndFreeBytes()
        {
            var stream = this.GetDefaultStream();
            var bufferLength = stream.MemoryManager.BlockSize * 4;
            var buffer = this.GetRandomBuffer(bufferLength);
            stream.Write(buffer, 0, buffer.Length);

            Assert.That(stream.MemoryManager.SmallPoolInUseSize, Is.EqualTo(bufferLength));
            Assert.That(stream.MemoryManager.SmallPoolFreeSize, Is.EqualTo(0));
            var memMgr = stream.MemoryManager;
            stream.Dispose();

            Assert.That(memMgr.SmallPoolInUseSize, Is.EqualTo(0));
            Assert.That(memMgr.SmallPoolFreeSize, Is.EqualTo(bufferLength));
        }

        [Test]
        public void Pooling_DisposingFreesBlocks()
        {
            var stream = this.GetDefaultStream();
            const int numBlocks = 4;
            var bufferLength = stream.MemoryManager.BlockSize * numBlocks;
            var buffer = this.GetRandomBuffer(bufferLength);
            stream.Write(buffer, 0, buffer.Length);
            var memMgr = stream.MemoryManager;
            stream.Dispose();
            Assert.That(memMgr.SmallBlocksFree, Is.EqualTo(numBlocks));
        }

        [Test]
        public void DisposeReturnsLargeBuffer()
        {
            var stream = this.GetDefaultStream();
            const int numBlocks = 4;
            var bufferLength = stream.MemoryManager.BlockSize * numBlocks;
            var buffer = this.GetRandomBuffer(bufferLength);
            stream.Write(buffer, 0, buffer.Length);
            var newBuffer = stream.GetBuffer();
            Assert.That(newBuffer.Length, Is.EqualTo(stream.MemoryManager.LargeBufferMultiple));

            Assert.That(stream.MemoryManager.LargeBuffersFree, Is.EqualTo(0));
            Assert.That(stream.MemoryManager.LargePoolFreeSize, Is.EqualTo(0));
            Assert.That(stream.MemoryManager.LargePoolInUseSize, Is.EqualTo(newBuffer.Length));
            var memMgr = stream.MemoryManager;
            stream.Dispose();
            Assert.That(memMgr.LargeBuffersFree, Is.EqualTo(1));
            Assert.That(memMgr.LargePoolFreeSize, Is.EqualTo(newBuffer.Length));
            Assert.That(memMgr.LargePoolInUseSize, Is.EqualTo(0));
        }

        [Test]
        public void DisposeTwiceDoesNotThrowException()
        {
            var stream = this.GetDefaultStream();
            stream.Dispose();
            stream.Dispose();
        }

        [Test]
        public void DisposeReturningATooLargeBufferGetsDropped()
        {
            var stream = this.GetDefaultStream();
            var memMgr = stream.MemoryManager;
            var bufferSize = stream.MemoryManager.MaximumBufferSize + 1;
            var buffer = this.GetRandomBuffer(bufferSize);
            stream.Write(buffer, 0, buffer.Length);
            var newBuffer = stream.GetBuffer();
            Assert.That(stream.MemoryManager.LargePoolInUseSize, Is.EqualTo(newBuffer.Length));
            Assert.That(stream.MemoryManager.LargePoolFreeSize, Is.EqualTo(0));
            stream.Dispose();
            Assert.That(memMgr.LargePoolInUseSize, Is.EqualTo(0));
            Assert.That(memMgr.LargePoolFreeSize, Is.EqualTo(0));
        }

        [Test]
        public void AccessingObjectAfterDisposeThrowsObjectDisposedException()
        {
            var stream = this.GetDefaultStream();
            stream.Dispose();

            var buffer = new byte[100];

            Assert.That(stream.CanRead, Is.False);
            Assert.That(stream.CanSeek, Is.False);
            Assert.That(stream.CanWrite, Is.False);

            Assert.Throws<ObjectDisposedException>(() => { var x = stream.Capacity; });
            Assert.Throws<ObjectDisposedException>(() => { var x = stream.Length; });
            Assert.Throws<ObjectDisposedException>(() => { var x = stream.MemoryManager; });
            Assert.Throws<ObjectDisposedException>(() => { var x = stream.Id; });
            Assert.Throws<ObjectDisposedException>(() => { var x = stream.Tag; });
            Assert.Throws<ObjectDisposedException>(() => { var x = stream.Position; });
            Assert.Throws<ObjectDisposedException>(() => { var x = stream.ReadByte(); });
            Assert.Throws<ObjectDisposedException>(() => { var x = stream.Read(buffer, 0, buffer.Length); });
            Assert.Throws<ObjectDisposedException>(() => { stream.WriteByte(255); });
            Assert.Throws<ObjectDisposedException>(() => { stream.Write(buffer, 0, buffer.Length); });
            Assert.Throws<ObjectDisposedException>(() => { stream.SetLength(100); });
            Assert.Throws<ObjectDisposedException>(() => { stream.Seek(0, SeekOrigin.Begin); });
            Assert.Throws<ObjectDisposedException>(() => { var x = stream.ToArray(); });
            Assert.Throws<ObjectDisposedException>(() => { var x = stream.GetBuffer(); });
        }
        #endregion

        #region GetStream tests
        [Test]
        public void GetStreamReturnsADefaultStream()
        {
            var memMgr = this.GetMemoryManager();
            var stream = memMgr.GetStream();
            Assert.That(stream.Capacity, Is.EqualTo(memMgr.BlockSize));
        }

        [Test]
        public void GetStreamWithTag()
        {
            var memMgr = this.GetMemoryManager();
            var tag = "MyTag";
            var stream = memMgr.GetStream(tag) as RecyclableMemoryStream;
            Assert.That(stream.Capacity, Is.EqualTo(memMgr.BlockSize));
            Assert.That(stream.Tag, Is.EqualTo(tag));
        }

        [Test]
        public void GetStreamWithTagAndRequiredSize()
        {
            var memMgr = this.GetMemoryManager();
            var tag = "MyTag";
            var requiredSize = 13131313;
            var stream = memMgr.GetStream(tag, requiredSize) as RecyclableMemoryStream;
            Assert.That(stream.Capacity, Is.AtLeast(requiredSize));
            Assert.That(stream.Tag, Is.EqualTo(tag));
        }

        [Test]
        public void GetStreamWithTagAndRequiredSizeAndContiguousBuffer()
        {
            var memMgr = this.GetMemoryManager();
            var tag = "MyTag";
            var requiredSize = 13131313;

            var stream = memMgr.GetStream(tag, requiredSize, false) as RecyclableMemoryStream;
            Assert.That(stream.Capacity, Is.AtLeast(requiredSize));
            Assert.That(stream.Tag, Is.EqualTo(tag));

            stream = memMgr.GetStream(tag, requiredSize, true) as RecyclableMemoryStream;
            Assert.That(stream.Capacity, Is.AtLeast(requiredSize));
            Assert.That(stream.Tag, Is.EqualTo(tag));
        }

        [Test]
        public void GetStreamWithBuffer()
        {
            var memMgr = this.GetMemoryManager();
            var buffer = this.GetRandomBuffer(1000);
            var tag = "MyTag";

            var stream = memMgr.GetStream(tag, buffer, 1, buffer.Length - 1) as RecyclableMemoryStream;
            RMSAssert.BuffersAreEqual(buffer, 1, stream.GetBuffer(), 0, buffer.Length - 1);
            Assert.That(buffer, Is.Not.SameAs(stream.GetBuffer()));
            Assert.That(stream.Tag, Is.EqualTo(tag));
        }

        [Test]
        public void GetStreamWithOnlyBuffer()
        {
            var memMgr = this.GetMemoryManager();
            var buffer = this.GetRandomBuffer(1000);

            var stream = memMgr.GetStream(buffer) as RecyclableMemoryStream;
            RMSAssert.BuffersAreEqual(buffer, 0, stream.GetBuffer(), 0, buffer.Length);
            Assert.That(buffer, Is.Not.SameAs(stream.GetBuffer()));
        }

        [Test]
        public void GetStreamWithMemoryBuffer()
        {
            var memMgr = this.GetMemoryManager();
            var buffer = this.GetRandomBuffer(1000).AsMemory();
            var bufferSlice = buffer.Slice(1);
            var tag = "MyTag";

            var stream = memMgr.GetStream(tag, bufferSlice) as RecyclableMemoryStream;
            RMSAssert.BuffersAreEqual(bufferSlice.Span, stream.GetBuffer(), bufferSlice.Length);
            Assert.That(bufferSlice, Is.Not.SameAs(stream.GetBuffer()));
            Assert.That(stream.Tag, Is.EqualTo(tag));
        }

        [Test]
        public void GetStreamWithOnlyMemoryBuffer()
        {
            var memMgr = this.GetMemoryManager();
            var buffer = this.GetRandomBuffer(1000).AsMemory();

            var stream = memMgr.GetStream(buffer) as RecyclableMemoryStream;
            RMSAssert.BuffersAreEqual(buffer.Span, stream.GetBuffer(), buffer.Length);
            Assert.That(buffer, Is.Not.SameAs(stream.GetBuffer()));
        }
        #endregion

        #region WriteTo tests
        [Test]
        public void WriteToNullStreamThrowsException()
        {
            var stream = this.GetDefaultStream();
            Assert.Throws<ArgumentNullException>(() => stream.WriteTo(null));
        }

        [Test]
        public void WriteToOtherStreamHasEqualContents()
        {
            var stream = this.GetDefaultStream();
            var buffer = this.GetRandomBuffer(100);
            stream.Write(buffer, 0, buffer.Length);

            var stream2 = this.GetDefaultStream();
            stream.WriteTo(stream2);

            Assert.That(stream2.Length, Is.EqualTo(stream.Length));
            RMSAssert.BuffersAreEqual(buffer, stream2.GetBuffer(), buffer.Length);
        }

        [Test]
        public void WriteToOtherStreamDoesNotChangePosition()
        {
            var stream = this.GetDefaultStream();
            var buffer = this.GetRandomBuffer(100);
            stream.Write(buffer, 0, buffer.Length);
            stream.Position = buffer.Length / 2;

            var stream2 = this.GetDefaultStream();
            stream.WriteTo(stream2);
            Assert.That(stream.Position, Is.EqualTo(buffer.Length / 2));

            Assert.That(stream2.Length, Is.EqualTo(stream.Length));
            RMSAssert.BuffersAreEqual(buffer, stream2.GetBuffer(), buffer.Length);
        }

        [TestCase(DefaultBlockSize / 2)]
        [TestCase(DefaultBlockSize * 2)]
        public void WriteToOtherStreamOffsetCountHasEqualContentsSubStream(int bufferSize)
        {
            var stream = this.GetDefaultStream();
            var buffer = this.GetRandomBuffer(bufferSize);
            stream.Write(buffer, 0, buffer.Length);

            // force to large buffers if applicable
            stream.GetBuffer();

            var stream2 = this.GetDefaultStream();
            int offset = (int)(bufferSize / 2);
            int length = (int)(bufferSize / 4);

            stream.WriteTo(stream2, offset, length);

            Assert.That(stream2.Length, Is.EqualTo(length));
            RMSAssert.BuffersAreEqual(buffer, offset, stream2.GetBuffer(), 0, length);
        }

        [TestCase(DefaultBlockSize / 2)]
        [TestCase(DefaultBlockSize * 2)]
        public void WriteToOtherStreamOffsetCountHasEqualContentsFullStream(int bufferSize)
        {
            var stream = this.GetDefaultStream();
            var buffer = this.GetRandomBuffer(bufferSize);
            stream.Write(buffer, 0, buffer.Length);

            // force to large buffers if applicable
            stream.GetBuffer();

            var stream2 = this.GetDefaultStream();
            int offset = 0;
            int length = buffer.Length;

            stream.WriteTo(stream2, offset, length);

            Assert.That(stream2.Length, Is.EqualTo(length));
            RMSAssert.BuffersAreEqual(buffer, offset, stream2.GetBuffer(), 0, length);
        }

        [Test]
        public void WriteToOtherStreamOffsetCountThrowException()
        {
            var stream = this.GetDefaultStream();
            Assert.Throws<ArgumentNullException>(() => stream.WriteTo(null, 0, (int)stream.Length));
            Assert.Throws<ArgumentOutOfRangeException>(() => stream.WriteTo(stream, -1, (int)stream.Length));
            Assert.Throws<ArgumentOutOfRangeException>(() => stream.WriteTo(stream, 1, (int)stream.Length));
            Assert.Throws<ArgumentOutOfRangeException>(() => stream.WriteTo(stream, 0, (int)stream.Length + 1));
        }

        [Test]
        public void WriteToByteArray_NullTarget()
        {
            using (var stream = GetDefaultStream())
            {
                Assert.Throws<ArgumentNullException>(() => stream.WriteTo((byte[])null));
            }
        }

        [Test]
        public void WriteToByteArray_FullArray_Small()
        {
            byte[] sourceBuffer = GetRandomBuffer(100);
            using (var stream = GetDefaultStream())
            {
                stream.Write(sourceBuffer);
                byte[] targetBuffer = new byte[sourceBuffer.Length];
                stream.WriteTo(targetBuffer);
                RMSAssert.BuffersAreEqual(sourceBuffer, targetBuffer);
            }
        }

        [Test]
        public void WriteToByteArrayDoesNotChangePosition()
        {
            byte[] sourceBuffer = GetRandomBuffer(100);
            using (var stream = GetDefaultStream())
            {
                stream.Write(sourceBuffer);
                stream.Position = sourceBuffer.Length / 2;
                byte[] targetBuffer = new byte[sourceBuffer.Length];
                stream.WriteTo(targetBuffer);
                Assert.That(stream.Position, Is.EqualTo(sourceBuffer.Length / 2));
                RMSAssert.BuffersAreEqual(sourceBuffer, targetBuffer);
            }
        }

        [Test]
        public void WriteToByteArray_Full_Array_Large()
        {
            byte[] sourceBuffer = GetRandomBuffer(25 * DefaultBlockSize);
            using (var stream = GetDefaultStream())
            {
                stream.Write(sourceBuffer);
                stream.GetBuffer();
                byte[] targetBuffer = new byte[sourceBuffer.Length];
                stream.WriteTo(targetBuffer);
                RMSAssert.BuffersAreEqual(sourceBuffer, targetBuffer);
            }
        }

        [Test]
        public void WriteToByteArray_OffsetCount()
        {
            byte[] sourceBuffer = GetRandomBuffer(100);
            using (var stream = GetDefaultStream())
            {
                stream.Write(sourceBuffer);
                byte[] targetBuffer = new byte[sourceBuffer.Length];
                stream.WriteTo(targetBuffer, sourceBuffer.Length / 2, sourceBuffer.Length / 2);
                RMSAssert.BuffersAreEqual(sourceBuffer, sourceBuffer.Length / 2, targetBuffer, 0, sourceBuffer.Length / 2);
            }
        }

        [Test]
        public void WriteToByteArray_CountLargerThanSourceWithZeroOffset()
        {
            byte[] sourceBuffer = GetRandomBuffer(100);
            using (var stream = GetDefaultStream())
            {
                stream.Write(sourceBuffer);
                byte[] targetBuffer = new byte[sourceBuffer.Length];
                Assert.Throws<ArgumentOutOfRangeException>(()=>stream.WriteTo(targetBuffer, 0, sourceBuffer.Length + 1));                
            }
        }

        [Test]
        public void WriteToByteArray_CountLargerThanSourceWithNonZeroOffset()
        {
            byte[] sourceBuffer = GetRandomBuffer(100);
            using (var stream = GetDefaultStream())
            {
                stream.Write(sourceBuffer);
                byte[] targetBuffer = new byte[sourceBuffer.Length];
                Assert.Throws<ArgumentOutOfRangeException>(() => stream.WriteTo(targetBuffer, 1, sourceBuffer.Length));
            }
        }

        [Test]
        public void WriteToByteArray_CountLargerThanTargetZeroOffset()
        {
            byte[] sourceBuffer = GetRandomBuffer(100);
            using (var stream = GetDefaultStream())
            {
                stream.Write(sourceBuffer);
                byte[] targetBuffer = new byte[sourceBuffer.Length];
                Assert.Throws<ArgumentOutOfRangeException>(() => stream.WriteTo(targetBuffer, 0, sourceBuffer.Length, 1));
            }
        }

        [Test]
        public void WriteToByteArray_CountLargerThanTargetNonZeroOffset()
        {
            byte[] sourceBuffer = GetRandomBuffer(100);
            using (var stream = GetDefaultStream())
            {
                stream.Write(sourceBuffer);
                byte[] targetBuffer = new byte[sourceBuffer.Length];
                Assert.Throws<ArgumentOutOfRangeException>(() => stream.WriteTo(targetBuffer, 1, sourceBuffer.Length - 1, 2));
            }
        }

        [Test]
        public void WriteToByteArray_TargetOffsetLargerThanTarget()
        {
            byte[] sourceBuffer = GetRandomBuffer(100);
            using (var stream = GetDefaultStream())
            {
                stream.Write(sourceBuffer);
                byte[] targetBuffer = new byte[sourceBuffer.Length];
                Assert.Throws<ArgumentOutOfRangeException>(() => stream.WriteTo(targetBuffer, 0, 1, sourceBuffer.Length));
            }
        }

        [Test]
        public void WriteToByteArray_NegativeOffsetThrowsException()
        {
            byte[] sourceBuffer = GetRandomBuffer(100);
            using (var stream = GetDefaultStream())
            {
                stream.Write(sourceBuffer);
                byte[] targetBuffer = new byte[sourceBuffer.Length];
                Assert.Throws<ArgumentOutOfRangeException>(()=>stream.WriteTo(targetBuffer, -1, sourceBuffer.Length));
            }
        }


        [Test]
        public void WriteToByteArray_NegativeTargetOffsetThrowsException()
        {
            byte[] sourceBuffer = GetRandomBuffer(100);
            using (var stream = GetDefaultStream())
            {
                stream.Write(sourceBuffer);
                byte[] targetBuffer = new byte[sourceBuffer.Length];
                Assert.Throws<ArgumentOutOfRangeException>(() => stream.WriteTo(targetBuffer, 0, sourceBuffer.Length, -1));
            }
        }


        #endregion

        #region MaximumStreamCapacityBytes Tests
        [Test]
        public void MaximumStreamCapacity_NoLimit()
        {
            var stream = this.GetDefaultStream();
            stream.MemoryManager.MaximumStreamCapacity = 0;
            stream.Capacity = (DefaultMaximumBufferSize * 2) + 1;
            Assert.That(stream.Capacity, Is.AtLeast((DefaultMaximumBufferSize * 2) + 1));
        }

        [Test]
        public void MaximumStreamCapacity_Limit()
        {
            var stream = this.GetDefaultStream();
            var maxCapacity = DefaultMaximumBufferSize * 2;
            stream.MemoryManager.MaximumStreamCapacity = maxCapacity;
            Assert.DoesNotThrow(() => stream.Capacity = maxCapacity);
            Assert.Throws<OutOfMemoryException>(() => stream.Capacity = maxCapacity + 1);
        }

        [Test]
        public void MaximumStreamCapacity_StreamUnchanged()
        {
            var stream = this.GetDefaultStream();
            var maxCapacity = DefaultMaximumBufferSize * 2;
            stream.MemoryManager.MaximumStreamCapacity = maxCapacity;
            Assert.DoesNotThrow(() => stream.Capacity = maxCapacity);
            var oldCapacity = stream.Capacity;
            Assert.Throws<OutOfMemoryException>(() => stream.Capacity = maxCapacity + 1);
            Assert.That(stream.Capacity, Is.EqualTo(oldCapacity));
        }

        [Test]
        public void MaximumStreamCapacity_StreamUnchangedAfterWriteOverLimit()
        {
            var stream = this.GetDefaultStream();
            var maxCapacity = DefaultMaximumBufferSize * 2;
            stream.MemoryManager.MaximumStreamCapacity = maxCapacity;
            var buffer1 = this.GetRandomBuffer(100);
            stream.Write(buffer1, 0, buffer1.Length);
            var oldLength = stream.Length;
            var oldCapacity = stream.Capacity;
            var oldPosition = stream.Position;
            var buffer2 = this.GetRandomBuffer(maxCapacity);
            Assert.Throws<OutOfMemoryException>(() => stream.Write(buffer2, 0, buffer2.Length));
            Assert.That(stream.Length, Is.EqualTo(oldLength));
            Assert.That(stream.Capacity, Is.EqualTo(oldCapacity));
            Assert.That(stream.Position, Is.EqualTo(oldPosition));
        }
        #endregion

		#region CopyToAsync Tests
        [Test]
        public void CopyToAsyncThrowsOnNullDestination()
        {
            using (var stream = GetDefaultStream())
            {
                Assert.Throws<ArgumentNullException>(()=>stream.CopyToAsync(null, DefaultBlockSize, CancellationToken.None));
            }
        }

        [Test]
        public void CopyToAsyncThrowsIfDisposed()
        {
            var stream = GetDefaultStream();
            using (var otherStream = GetDefaultStream())
            {
                stream.Dispose();
                Assert.Throws<ObjectDisposedException>(() => stream.CopyToAsync(otherStream, DefaultBlockSize, CancellationToken.None));
            }            
        }

        [TestCase(0)]
        [TestCase(100)]
        public void CopyToAsyncSmallerThanBlock(int offset)
        {
            using (var stream = GetDefaultStream())
            {
                var buffer = GetRandomBuffer(DefaultBlockSize / 2);
                stream.Write(buffer, 0, buffer.Length);
                stream.Position = offset;
                var otherStream = GetDefaultStream();
                stream.CopyToAsync(otherStream);
                Assert.That(otherStream.Length, Is.EqualTo(stream.Length - offset));
                RMSAssert.BuffersAreEqual(new ReadOnlySpan<byte>(stream.GetBuffer(), offset, buffer.Length - offset), otherStream.GetBuffer(), buffer.Length - offset);
            }
        }

        [Test]
        public void CopyToAsyncZeroBlocks()
        {
            using (var stream = GetDefaultStream())
            {
                var otherStream = GetDefaultStream();
                stream.CopyToAsync(otherStream);
                Assert.That(otherStream.Length, Is.EqualTo(0));
            }
        }

        [Test]
        public void CopyToAsyncZeroBlocksNonMemoryStream()
        {
            using (var stream = GetDefaultStream())
            {
                var filename = Path.GetRandomFileName();
                using (var fileStream = new FileStream(filename, FileMode.Create, FileAccess.ReadWrite, FileShare.ReadWrite, DefaultBlockSize, FileOptions.Asynchronous))
                {
                    stream.CopyToAsync(fileStream).Wait();
                }
                var otherBuffer = File.ReadAllBytes(filename);
                Assert.That(otherBuffer.Length, Is.EqualTo(0));
            }
        }

        [TestCase(0)]
        [TestCase(100)]
        public void CopyToAsyncOneBlock(int offset)
        {
            using (var stream = GetDefaultStream())
            {
                var buffer = GetRandomBuffer(DefaultBlockSize);
                stream.Write(buffer, 0, buffer.Length);
                stream.Position = offset;
                var otherStream = GetDefaultStream();
                stream.CopyToAsync(otherStream);
                Assert.That(otherStream.Length, Is.EqualTo(stream.Length - offset));
                RMSAssert.BuffersAreEqual(new ReadOnlySpan<byte>(stream.GetBuffer(), offset, buffer.Length - offset), otherStream.GetBuffer(), buffer.Length - offset);
            }
        }

        [TestCase(0)]
        [TestCase(100)]
        public void CopyToAsyncOneBlockNonMemoryStream(int offset)
        {
            using (var stream = GetDefaultStream())
            {
                var buffer = GetRandomBuffer(DefaultBlockSize);
                stream.Write(buffer, 0, buffer.Length);
                stream.Position = offset;
                var filename = Path.GetRandomFileName();
                using (var fileStream = new FileStream(filename, FileMode.Create, FileAccess.ReadWrite, FileShare.ReadWrite, DefaultBlockSize, FileOptions.Asynchronous))
                {
                    stream.CopyToAsync(fileStream).Wait();
                }
                var otherBuffer = File.ReadAllBytes(filename);
                Assert.That(otherBuffer.Length, Is.EqualTo(stream.Length - offset));
                RMSAssert.BuffersAreEqual(new ReadOnlySpan<byte>(stream.GetBuffer(), offset, buffer.Length - offset), otherBuffer, buffer.Length - offset);
            }
        }

        [TestCase(0)]
        [TestCase(100)]
        public void CopyToAsyncMultipleBlocks(int offset)
        {
            using (var stream = GetDefaultStream())
            {
                var buffer = GetRandomBuffer(DefaultBlockSize * 25);
                stream.Write(buffer, 0, buffer.Length);
                stream.Position = offset;
                var otherStream = GetDefaultStream();
                stream.CopyToAsync(otherStream);
                Assert.That(otherStream.Length, Is.EqualTo(stream.Length - offset));
                RMSAssert.BuffersAreEqual(new ReadOnlySpan<byte>(stream.GetBuffer(), offset, buffer.Length - offset), otherStream.GetBuffer(), buffer.Length - offset);
            }
        }

        [TestCase(0)]
        [TestCase(100)]
        public void CopyToAsyncMultipleBlocksNonMemoryStream(int offset)
        {
            using (var stream = GetDefaultStream())
            {
                var buffer = GetRandomBuffer(DefaultBlockSize * 25);
                stream.Write(buffer, 0, buffer.Length);
                stream.Position = offset;
                var filename = Path.GetRandomFileName();
                using (var fileStream = new FileStream(filename, FileMode.Create, FileAccess.ReadWrite, FileShare.ReadWrite, DefaultBlockSize, FileOptions.Asynchronous))
                {
                    stream.CopyToAsync(fileStream).Wait();
                }
                var otherBuffer = File.ReadAllBytes(filename);
                Assert.That(otherBuffer.Length, Is.EqualTo(stream.Length - offset));
                RMSAssert.BuffersAreEqual(new ReadOnlySpan<byte>(stream.GetBuffer(), offset, buffer.Length - offset), otherBuffer, buffer.Length - offset);
            }
        }

        [TestCase(0)]
        [TestCase(100)]
        public void CopyToAsyncLargeBuffer(int offset)
        {
            using (var stream = GetDefaultStream())
            {
                var buffer = GetRandomBuffer(DefaultBlockSize * 25);
                stream.Write(buffer, 0, buffer.Length);
                var otherStream = GetDefaultStream();
                stream.Position = offset;
                stream.GetBuffer();
                stream.CopyToAsync(otherStream);
                Assert.That(otherStream.Length, Is.EqualTo(stream.Length - offset));
                RMSAssert.BuffersAreEqual(new ReadOnlySpan<byte>(stream.GetBuffer(), offset, buffer.Length - offset), otherStream.GetBuffer(), buffer.Length - offset);
            }
        }

        [TestCase(0)]
        [TestCase(100)]
        public void CopyToAsyncLargeBufferNonMemoryStream(int offset)
        {
            using (var stream = GetDefaultStream())
            {
                var buffer = GetRandomBuffer(DefaultBlockSize * 25);
                stream.Write(buffer, 0, buffer.Length);
                stream.GetBuffer();
                stream.Position = offset;
                var filename = Path.GetRandomFileName();
                using (var fileStream = new FileStream(filename, FileMode.Create, FileAccess.Write))
                {
                    stream.CopyToAsync(fileStream).Wait();
                }
                var otherBuffer = File.ReadAllBytes(filename);
                Assert.That(otherBuffer.Length, Is.EqualTo(stream.Length - offset));
                RMSAssert.BuffersAreEqual(new ReadOnlySpan<byte>(stream.GetBuffer(), offset, buffer.Length - offset), otherBuffer, buffer.Length - offset);
            }
        }

        [TestCase(true, false)]
        [TestCase(false, false)]
        [TestCase(true, true)]
        [TestCase(false, true)]
        public void CopyToAsyncChangesSourcePosition(bool filestreamTarget, bool largeBuffer)
        {
            using (var targetStream = filestreamTarget ? (Stream)File.OpenWrite(Path.GetRandomFileName()) : (Stream)new MemoryStream())
            {
                using (var stream = GetDefaultStream())
                {
                    var buffer = GetRandomBuffer(largeBuffer ? DefaultBlockSize * 25 : 100);
                    stream.Write(buffer);
                    Assert.That(stream.Position, Is.EqualTo(buffer.Length));
                    stream.Position = buffer.Length / 2;
                    stream.CopyToAsync(targetStream).Wait();
                    Assert.That(targetStream.Length, Is.EqualTo(buffer.Length / 2));
                    Assert.That(stream.Position, Is.EqualTo(buffer.Length));
                }
            }
        }

        #endregion

        #region Very Large Buffer Tests (> 2 GB)
        [Test]
        public void VeryLargeStream_Write()
        {
            var stream = GetMultiGBStream();
            Assert.That(stream.Capacity64, Is.GreaterThanOrEqualTo(DefaultVeryLargeStreamSize));
            var buffer = GetRandomBuffer(1 << 20);
            while (stream.Length < DefaultVeryLargeStreamSize)
            {
                stream.Write(buffer);
            }

            Assert.That(stream.Length, Is.EqualTo(DefaultVeryLargeStreamSize));

            // It takes a VERY long time to check 3 GB byte-by-byte, so
            // just check final 100 MB
            byte[] checkBuffer = new byte[buffer.Length];
            stream.Seek(-checkBuffer.Length, SeekOrigin.End);
            stream.Read(checkBuffer, 0, checkBuffer.Length);

            RMSAssert.BuffersAreEqual(buffer, checkBuffer, buffer.Length);            
        }

        [Test]
        public void VeryLargeStream_WriteOffsetCount()
        {
            var stream = GetMultiGBStream();
            Assert.That(stream.Capacity64, Is.GreaterThanOrEqualTo(DefaultVeryLargeStreamSize));
            var buffer = GetRandomBuffer(1 << 20);
            while (stream.Length < DefaultVeryLargeStreamSize)
            {
                stream.Write(buffer, 0, buffer.Length);
            }

            Assert.That(stream.Length, Is.EqualTo(DefaultVeryLargeStreamSize));

            // It takes a VERY long time to check 3 GB byte-by-byte, so
            // just check final 100 MB
            byte[] checkBuffer = new byte[buffer.Length];
            stream.Seek(-checkBuffer.Length, SeekOrigin.End);
            stream.Read(checkBuffer, 0, checkBuffer.Length);

            RMSAssert.BuffersAreEqual(buffer, checkBuffer, buffer.Length);
        }

        [Test]
        public void VeryLargeStream_SetLength()
        {
            var stream = GetMultiGBStream();
            stream.SetLength(DefaultVeryLargeStreamSize);
            Assert.That(stream.Length, Is.EqualTo(DefaultVeryLargeStreamSize));
            Assert.That(stream.Capacity64, Is.AtLeast(DefaultVeryLargeStreamSize));
            stream.SetLength(DefaultVeryLargeStreamSize * 2);
            Assert.That(stream.Length, Is.EqualTo(2 * DefaultVeryLargeStreamSize));
            Assert.That(stream.Capacity64, Is.AtLeast(2 * DefaultVeryLargeStreamSize));
        }

        [Test]
        public void VeryLargeStream_ExistingLargeBufferThrowsOnMultiGBLength()
        {
            var stream = GetDefaultStream();
            var data = GetRandomBuffer(1 << 20);
            stream.Write(data);
            var buffer = stream.GetBuffer();
            Assert.Throws<OutOfMemoryException>(() => stream.SetLength(DefaultVeryLargeStreamSize));
        }

        [Test]
        public void VeryLargeStream_GetBufferThrows()
        {
            var stream = GetMultiGBStream();
            Assert.Throws<OutOfMemoryException>(() => stream.GetBuffer());
        }

        [Test]
        public void VeryLargeStream_SetPositionThrowsIfLargeBuffer()
        {
            var stream = GetDefaultStream();
            stream.SetLength(1 << 20);
            var buffer = stream.GetBuffer();
            Assert.Throws<InvalidOperationException>(() => stream.Position = DefaultVeryLargeStreamSize);
        }

        [Test]
        public void VeryLargeStream_WriteByte()
        {
            var stream = GetMultiGBStream();
            var buffer = GetRandomBuffer(100 << 20);
            while (stream.Length < DefaultVeryLargeStreamSize)
            {
                stream.Write(buffer);
            }

            var startingLength = stream.Length;
            Assert.That(startingLength, Is.GreaterThan(int.MaxValue));
            stream.WriteByte(13);
            Assert.That(stream.Length, Is.EqualTo(startingLength + 1));
        }

        [Test]
        public void VeryLargeStream_GetReadOnlySequence()
        {
            var stream = GetMultiGBStream();
            var buffer = GetRandomBuffer(100 << 20);
            while (stream.Length < DefaultVeryLargeStreamSize)
            {
                stream.Write(buffer);
            }
            
            var sequence = new SequenceReader<byte>(stream.GetReadOnlySequence());
            Assert.That(sequence.Length, Is.EqualTo(stream.Length));

            while (sequence.Remaining != 0)
            {
                Assert.That(sequence.IsNext(buffer, true), Is.True);
            }
        }

        private RecyclableMemoryStream GetMultiGBStream()
        {
            return new RecyclableMemoryStream(this.GetMemoryManager(), "GetMultiGBStream", DefaultVeryLargeStreamSize);
        }

        #endregion

        #region Event Tests
        [Test]
        public void EventStreamCreated()
        {
            var mgr = GetMemoryManager();
            bool raised = false;
            mgr.StreamCreated += (obj, args) => 
            {
                Assert.That(args.Id, Is.Not.EqualTo(Guid.Empty));
                Assert.That(args.Tag, Is.EqualTo("UnitTest"));
                Assert.That(args.RequestedSize, Is.EqualTo(13));
                raised = true;
            };
            var stream = mgr.GetStream("UnitTest", 13);
            Assert.That(raised, Is.True);
        }

        [Test]
        public void EventStreamDisposed()
        {
            var mgr = GetMemoryManager();
            mgr.GenerateCallStacks = true;
            bool raised = false;
            mgr.StreamDisposed += (obj, args) =>
            {
                Assert.That(args.Id, Is.Not.EqualTo(Guid.Empty));
                Assert.That(args.Tag, Is.EqualTo("UnitTest"));
                Assert.That(args.AllocationStack, Contains.Substring("Microsoft.IO.RecyclableMemoryStream..ctor"));
                Assert.That(args.DisposeStack, Contains.Substring("Microsoft.IO.RecyclableMemoryStream.Dispose"));
                raised = true;
            };
            var stream = mgr.GetStream("UnitTest", 13);
            stream.Dispose();
            Assert.That(raised, Is.True);
        }

        [Test]
        public void EventStreamDoubleDisposed()
        {
            var mgr = GetMemoryManager();
            mgr.GenerateCallStacks = true;
            bool raised = false;
            mgr.StreamDoubleDisposed += (obj, args) =>
            {
                Assert.That(args.Id, Is.Not.EqualTo(Guid.Empty));
                Assert.That(args.Tag, Is.EqualTo("UnitTest"));
                Assert.That(args.AllocationStack, Contains.Substring("Microsoft.IO.RecyclableMemoryStream..ctor"));
                Assert.That(args.DisposeStack1, Contains.Substring("Microsoft.IO.RecyclableMemoryStream.Dispose"));
                Assert.That(args.DisposeStack2, Contains.Substring("Microsoft.IO.RecyclableMemoryStream.Dispose"));
                raised = true;
            };
            var stream = mgr.GetStream("UnitTest", 13);
            stream.Dispose();
            stream.Dispose();
            Assert.That(raised, Is.True);
        }

        [Test]
        public void EventStreamConvertedToArray()
        {
            var mgr = GetMemoryManager();
            mgr.GenerateCallStacks = true;
            bool raised = false;
            mgr.StreamConvertedToArray += (obj, args) =>
            {
                Assert.That(args.Id, Is.Not.EqualTo(Guid.Empty));
                Assert.That(args.Tag, Is.EqualTo("UnitTest"));
                Assert.That(args.Stack, Contains.Substring("Microsoft.IO.RecyclableMemoryStream.ToArray"));
                Assert.That(args.Length, Is.EqualTo(1));
                raised = true;
            };
            var stream = mgr.GetStream("UnitTest", 13);
            stream.WriteByte(1);
            stream.ToArray();
            Assert.That(raised, Is.True);
        }

        [Test]
        public void EventStreamOverCapacity()
        {
            var mgr = GetMemoryManager();
            mgr.MaximumStreamCapacity = mgr.BlockSize;
            mgr.GenerateCallStacks = true;
            bool raised = false;
            mgr.StreamOverCapacity += (obj, args) =>
            {
                Assert.That(args.Id, Is.Not.EqualTo(Guid.Empty));
                Assert.That(args.Tag, Is.EqualTo("UnitTest"));
                Assert.That(args.AllocationStack, Contains.Substring("Microsoft.IO.RecyclableMemoryStream..ctor"));
                Assert.That(args.RequestedCapacity, Is.EqualTo(mgr.BlockSize * 2));
                Assert.That(args.MaximumCapacity, Is.EqualTo(mgr.BlockSize));
                raised = true;
            };
            var stream = mgr.GetStream("UnitTest", 13);
            
            Assert.Throws<OutOfMemoryException>(()=>stream.Capacity = mgr.BlockSize * 2);
            Assert.That(raised, Is.True);
        }

        [Test]
        public void EventBlockCreated()
        {
            var mgr = GetMemoryManager();
            bool raised = false;
            mgr.BlockCreated += (obj, args) =>
            {
                Assert.That(args.SmallPoolInUse, Is.EqualTo(mgr.BlockSize));
                raised = true;
            };
            var stream = mgr.GetStream("UnitTest", 13);
            Assert.That(raised, Is.True);
        }

        [Test]
        public void EventLargeBufferCreated()
        {
            var mgr = GetMemoryManager();
            bool raised = false;
            long requestedSize = mgr.LargeBufferMultiple;
            mgr.LargeBufferCreated += (obj, args) =>
            {
                Assert.That(args.Id, Is.Not.EqualTo(Guid.Empty));
                Assert.That(args.Tag, Is.EqualTo("UnitTest"));
                Assert.That(args.Pooled, Is.True);
                Assert.That(args.RequiredSize, Is.EqualTo(requestedSize));
                Assert.That(args.LargePoolInUse, Is.EqualTo(mgr.LargeBufferMultiple));
                Assert.That(args.CallStack, Is.Null);

                raised = true;
            };
            var stream = mgr.GetStream("UnitTest", 13);
            var buffer = GetRandomBuffer((int)requestedSize);
            stream.Write(buffer);
            var buf2 = stream.GetBuffer();
            Assert.That(raised, Is.True);
        }

        [Test]
        public void EventUnpooledLargeBufferCreated()
        {
            var mgr = GetMemoryManager();
            mgr.GenerateCallStacks = true;
            bool raised = false;
            long requestedSize = mgr.MaximumBufferSize + 1;
            mgr.LargeBufferCreated += (obj, args) =>
            {
                Assert.That(args.Id, Is.Not.EqualTo(Guid.Empty));
                Assert.That(args.Tag, Is.EqualTo("UnitTest"));
                Assert.That(args.Pooled, Is.False);
                Assert.That(args.RequiredSize, Is.AtLeast(requestedSize));
                Assert.That(args.LargePoolInUse, Is.AtLeast(requestedSize));
                Assert.That(args.CallStack, Is.Not.EqualTo(null));

                raised = true;
            };
            var stream = mgr.GetStream("UnitTest", 13);
            var buffer = GetRandomBuffer((int)requestedSize);
            stream.Write(buffer);
            var buf2 = stream.GetBuffer();
            Assert.That(raised, Is.True);
        }

        [Test]
        public void EventBlockDiscarded()
        {
            var mgr = GetMemoryManager();
            mgr.MaximumFreeSmallPoolBytes = mgr.BlockSize;
            int raisedCount = 0;
            long requestedSize = mgr.BlockSize;
            mgr.BufferDiscarded += (obj, args) =>
            {
                Assert.That(args.Id, Is.Not.EqualTo(Guid.Empty));
                Assert.That(args.Tag, Is.EqualTo("UnitTest"));
                Assert.That(args.BufferType, Is.EqualTo(RecyclableMemoryStreamManager.Events.MemoryStreamBufferType.Small));
                Assert.That(args.Reason, Is.EqualTo(RecyclableMemoryStreamManager.Events.MemoryStreamDiscardReason.EnoughFree));

                raisedCount++;
            };
            var stream1 = mgr.GetStream("UnitTest", 13);
            var stream2 = mgr.GetStream("UnitTest", 13);
            var buffer = GetRandomBuffer((int)requestedSize);
            stream1.Write(buffer);
            stream2.Write(buffer);
            stream1.Dispose();
            stream2.Dispose();
            Assert.That(raisedCount, Is.EqualTo(1));
        }

        [Test]
        public void EventLargeBufferDiscardedEnoughFree()
        {
            var mgr = GetMemoryManager();
            mgr.MaximumFreeLargePoolBytes = mgr.LargeBufferMultiple;
            int raisedCount = 0;
            long requestedSize = mgr.LargeBufferMultiple;
            mgr.BufferDiscarded += (obj, args) =>
            {
                Assert.That(args.Id, Is.Not.EqualTo(Guid.Empty));
                Assert.That(args.Tag, Is.EqualTo("UnitTest"));
                Assert.That(args.BufferType, Is.EqualTo(RecyclableMemoryStreamManager.Events.MemoryStreamBufferType.Large));
                Assert.That(args.Reason, Is.EqualTo(RecyclableMemoryStreamManager.Events.MemoryStreamDiscardReason.EnoughFree));
                
                raisedCount++;
            };
            var stream1 = mgr.GetStream("UnitTest", 13);
            var stream2 = mgr.GetStream("UnitTest", 13);
            var buffer = GetRandomBuffer((int)requestedSize);
            stream1.Write(buffer);
            stream2.Write(buffer);
            stream1.GetBuffer();
            stream2.GetBuffer();
            stream1.Dispose();
            stream2.Dispose();
            Assert.That(raisedCount, Is.EqualTo(1));
        }

        [Test]
        public void EventLargeBufferDiscardedTooLarge()
        {
            var mgr = GetMemoryManager();
            
            int raisedCount = 0;
            long requestedSize = mgr.MaximumBufferSize + 1;
            mgr.BufferDiscarded += (obj, args) =>
            {
                Assert.That(args.Id, Is.Not.EqualTo(Guid.Empty));
                Assert.That(args.Tag, Is.EqualTo("UnitTest"));
                Assert.That(args.BufferType, Is.EqualTo(RecyclableMemoryStreamManager.Events.MemoryStreamBufferType.Large));
                Assert.That(args.Reason, Is.EqualTo(RecyclableMemoryStreamManager.Events.MemoryStreamDiscardReason.TooLarge));

                raisedCount++;
            };
            var stream = mgr.GetStream("UnitTest", 13);
            
            var buffer = GetRandomBuffer((int)requestedSize);
            stream.Write(buffer);
            stream.GetBuffer();
            stream.Dispose();
            
            Assert.That(raisedCount, Is.EqualTo(1));
        }

        [Test]
        public void EventUsageReport()
        {
            var mgr = GetMemoryManager();

            int raisedCount = 0;
            long requestedSize = mgr.BlockSize;
            mgr.UsageReport += (obj, args) =>
            {
                Assert.That(args.SmallPoolFreeBytes, Is.EqualTo(mgr.BlockSize));
                Assert.That(args.SmallPoolInUseBytes, Is.EqualTo(0));
                Assert.That(args.LargePoolFreeBytes, Is.EqualTo(0));
                Assert.That(args.LargePoolInUseBytes, Is.EqualTo(0));

                raisedCount++;
            };
            var stream = mgr.GetStream("UnitTest", 13);

            var buffer = GetRandomBuffer((int)requestedSize);
            stream.Write(buffer);
            stream.GetBuffer();
            stream.Dispose();

            Assert.That(raisedCount, Is.EqualTo(1));
        }

        #endregion

        #region Test Helpers
        protected RecyclableMemoryStream GetDefaultStream()
        {
            return new RecyclableMemoryStream(this.GetMemoryManager());
        }

        protected byte[] GetRandomBuffer(int length)
        {
            var buffer = new byte[length];
            random.NextBytes(buffer);
            return buffer;
        }

        protected virtual RecyclableMemoryStreamManager GetMemoryManager()
        {
            return new RecyclableMemoryStreamManager(DefaultBlockSize, DefaultLargeBufferMultiple,
                                                     DefaultMaximumBufferSize, this.UseExponentialLargeBuffer)
                   {
                       AggressiveBufferReturn = this.AggressiveBufferRelease,
                   };
        }

        private RecyclableMemoryStream GetRandomStream()
        {
            var stream = this.GetDefaultStream();
            var buffer = this.GetRandomBuffer(stream.Capacity * 2);
            stream.Write(buffer, 0, buffer.Length);
            stream.Position = 0;
            return stream;
        }
        #endregion

        #region Bug Reports
        // Issue #176 - SmallPoolInUseSize, SmallPoolFreeSize
        [Test]
        public void Issue176_PoolInUseSizeDoesNotDecrease()
        {
            long maximumFreeSmallPoolBytes = 32000L * 128000; //4096000000
            long maximumFreeLargePoolBytes = UInt32.MaxValue;
            int blockSize = 128000;

            var mgr = new RecyclableMemoryStreamManager(blockSize, 1<<20, 8 * (1<<20),
                                              maximumFreeSmallPoolBytes, maximumFreeLargePoolBytes);

            MemoryStream fillStream = mgr.GetStream("pool", requiredSize: 128000, asContiguousBuffer: true);
            byte[] block1 = new byte[128000];
            long test1 = 4096000000;
            int test2 = 128000;
            for (int i = 0; i < 32000; i++)
            {
                fillStream.Write(block1, 0, 128000);
                test1 -= test2;
            }

            Assert.That(test1, Is.EqualTo(0));
            Assert.That(mgr.SmallPoolInUseSize, Is.EqualTo(maximumFreeSmallPoolBytes));
            fillStream.Dispose();
            Assert.That(mgr.SmallPoolInUseSize, Is.EqualTo(0));
        }
        #endregion

        protected abstract bool AggressiveBufferRelease { get; }

        protected virtual bool UseExponentialLargeBuffer
        {
            get { return false; }
        }

        protected static class RMSAssert
        {
            /// <summary>
            /// Asserts that two array segments are equal
            /// </summary>
            internal static void BuffersAreEqual(ArraySegment<byte> seg1, ArraySegment<byte> seg2)
            {
                Assert.That(seg1.Count, Is.EqualTo(seg2.Count));
                BuffersAreEqual(seg1, seg2, seg1.Count);
            }

            /// <summary>
            /// Asserts that two buffers are euqual, up to the given count
            /// </summary>
            internal static void BuffersAreEqual(ReadOnlySpan<byte> buffer1, ReadOnlySpan<byte> buffer2, int count)
            {
                BuffersAreEqual(buffer1, 0, buffer2, 0, count);
            }

            /// <summary>
            /// Asserts that two buffers are equal, up to the given count, starting at the specific offsets for each buffer
            /// </summary>
            internal static void BuffersAreEqual(ReadOnlySpan<byte> buffer1, int offset1, ReadOnlySpan<byte> buffer2, int offset2, int count,
                                                 double tolerance = 0.0)
            {
                if (buffer1 == null && buffer2 == null)
                {
                    //If both null, it's ok
                    return;
                }

                // If either one is null, we fail
                Assert.That((buffer1 != null) && (buffer2 != null), Is.True);

                Assert.That(buffer1.Length - offset1 >= count);

                Assert.That(buffer2.Length - offset2 >= count);

                var errors = 0;
                for (int i1 = offset1, i2 = offset2; i1 < offset1 + count; ++i1, ++i2)
                {
                    if (tolerance == 0.0)
                    {
                        if (buffer1[i1] != buffer2[i2])
                        {
                            Assert.Fail(string.Format("Buffers are different. buffer1[{0}]=={1}, buffer2[{2}]=={3}", i1,
                                                  buffer1[i1], i2, buffer2[i2]));
                        }
                    }
                    else
                    {
                        if (buffer1[i1] != buffer2[i2])
                        {
                            errors++;
                        }
                    }
                }
                var rate = (double)errors / count;
                Assert.That(rate, Is.AtMost(tolerance), "Too many errors. Buffers can differ to a tolerance of {0:F4}",
                            tolerance);
            }

            internal static void TryGetBufferEqualToGetBuffer(RecyclableMemoryStream stream)
            {
                var buffer = stream.GetBuffer();
                
                Assert.That(stream.TryGetBuffer(out ArraySegment<Byte> segment), Is.True);
                Assert.That(segment.Offset, Is.Zero);
                Assert.That(segment.Count, Is.EqualTo(stream.Length));
                RMSAssert.BuffersAreEqual(segment.Array, buffer, buffer.Length);
            }

            /// <summary>
            /// Ensures that stream contains multiple exact copies of the passed buffer
            /// </summary>
            internal static void StreamContainsExactCopies(RecyclableMemoryStream stream, ReadOnlySpan<byte> buffer)
            {
                byte[] temp = new byte[buffer.Length];
                stream.Position = 0;
                while (stream.Read(temp) > 0)
                {
                    BuffersAreEqual(buffer, temp, temp.Length);
                }
            }
        }
    }

    [TestFixture]
    public sealed class RecyclableMemoryStreamTestsWithPassiveBufferRelease : BaseRecyclableMemoryStreamTests
    {
        protected override bool AggressiveBufferRelease
        {
            get { return false; }
        }

        [Test]
        public void OldBuffersAreKeptInStreamUntilDispose()
        {
            var stream = this.GetDefaultStream();
            var memMgr = stream.MemoryManager;
            var buffer = this.GetRandomBuffer(stream.MemoryManager.LargeBufferMultiple);
            stream.Write(buffer, 0, buffer.Length);
            stream.GetBuffer();

            Assert.That(memMgr.LargePoolInUseSize, Is.EqualTo(memMgr.LargeBufferMultiple * (1)));
            Assert.That(memMgr.LargePoolFreeSize, Is.EqualTo(0));
            Assert.That(memMgr.SmallPoolFreeSize, Is.EqualTo(0));
            Assert.That(memMgr.SmallPoolInUseSize, Is.EqualTo(memMgr.LargeBufferMultiple));

            stream.Write(buffer, 0, buffer.Length);

            Assert.That(memMgr.LargePoolFreeSize, Is.EqualTo(0));
            Assert.That(memMgr.LargePoolInUseSize, Is.EqualTo(memMgr.LargeBufferMultiple * (1 + 2)));
            Assert.That(memMgr.SmallPoolFreeSize, Is.EqualTo(0));
            Assert.That(memMgr.SmallPoolInUseSize, Is.EqualTo(memMgr.LargeBufferMultiple));

            stream.Write(buffer, 0, buffer.Length);

            Assert.That(memMgr.LargePoolFreeSize, Is.EqualTo(0));
            Assert.That(memMgr.LargePoolInUseSize, Is.EqualTo(memMgr.LargeBufferMultiple * (1 + 2 + 3)));
            Assert.That(memMgr.SmallPoolFreeSize, Is.EqualTo(0));
            Assert.That(memMgr.SmallPoolInUseSize, Is.EqualTo(memMgr.LargeBufferMultiple));

            stream.Dispose();

            Assert.That(memMgr.LargePoolFreeSize, Is.EqualTo(memMgr.LargeBufferMultiple * (1 + 2 + 3)));
            Assert.That(memMgr.LargePoolInUseSize, Is.EqualTo(0));
            Assert.That(memMgr.SmallPoolFreeSize, Is.EqualTo(memMgr.LargeBufferMultiple));
            Assert.That(memMgr.SmallPoolInUseSize, Is.EqualTo(0));
        }
    }

    [TestFixture]
    public sealed class RecyclableMemoryStreamTestsWithAggressiveBufferRelease : BaseRecyclableMemoryStreamTests
    {
        protected override bool AggressiveBufferRelease
        {
            get { return true; }
        }
    }

    public abstract class BaseRecyclableMemoryStreamTestsUsingExponentialLargeBuffer : BaseRecyclableMemoryStreamTests
    {
        protected override bool UseExponentialLargeBuffer
        {
            get { return true; }
        }

        [Test]
        public override void RecyclableMemoryManagerUsingMultipleOrExponentialLargeBuffer()
        {
            var memMgr = this.GetMemoryManager();
            Assert.That(memMgr.UseMultipleLargeBuffer, Is.False);
            Assert.That(memMgr.UseExponentialLargeBuffer, Is.True);
        }

        [Test]
        public override void RecyclableMemoryManagerThrowsExceptionOnMaximumBufferNotMultipleOrExponentialOfLargeBufferMultiple()
        {
            Assert.Throws<ArgumentException>(() => new RecyclableMemoryStreamManager(100, 1024, 2025, this.UseExponentialLargeBuffer));
            Assert.Throws<ArgumentException>(() => new RecyclableMemoryStreamManager(100, 1024, 2023, this.UseExponentialLargeBuffer));
            Assert.Throws<ArgumentException>(() => new RecyclableMemoryStreamManager(100, 1024, 3072, this.UseExponentialLargeBuffer));
            Assert.DoesNotThrow(() => new RecyclableMemoryStreamManager(100, 1024, 2048, this.UseExponentialLargeBuffer));
            Assert.DoesNotThrow(() => new RecyclableMemoryStreamManager(100, 1024, 4096, this.UseExponentialLargeBuffer));
        }

        [Test]
        public override void GetLargeBufferAlwaysAMultipleOrExponentialOfMegabyteAndAtLeastAsMuchAsRequestedForLargeBuffer()
        {
            const int step = 200000;
            const int start = 1;
            const int end = 16000000;
            var memMgr = this.GetMemoryManager();

            for (var i = start; i <= end; i += step)
            {
                var buffer = memMgr.GetLargeBuffer(i, DefaultId, DefaultTag);
                Assert.That(buffer.Length >= i, Is.True);
                Assert.That(memMgr.LargeBufferMultiple * (int)Math.Pow(2, Math.Floor(Math.Log(buffer.Length / memMgr.LargeBufferMultiple, 2))) == buffer.Length, Is.True,
                            "buffer length of {0} is not a exponential of {1}", buffer.Length, memMgr.LargeBufferMultiple);
            }
        }

        [Test]
        public override void AllMultiplesOrExponentialUpToMaxCanBePooled()
        {
            const int BlockSize = 100;
            const int LargeBufferMultiple = 1000;
            const int MaxBufferSize = 8000;

            for (var size = LargeBufferMultiple; size <= MaxBufferSize; size *= 2)
            {
                var memMgr = new RecyclableMemoryStreamManager(BlockSize, LargeBufferMultiple, MaxBufferSize, this.UseExponentialLargeBuffer)
                             { AggressiveBufferReturn = this.AggressiveBufferRelease };
                var buffer = memMgr.GetLargeBuffer(size, DefaultId, DefaultTag);
                Assert.That(memMgr.LargePoolFreeSize, Is.EqualTo(0));
                Assert.That(memMgr.LargePoolInUseSize, Is.EqualTo(size));

                memMgr.ReturnLargeBuffer(buffer, DefaultId, DefaultTag);

                Assert.That(memMgr.LargePoolFreeSize, Is.EqualTo(size));
                Assert.That(memMgr.LargePoolInUseSize, Is.EqualTo(0));
            }
        }

        // Issue #171 - Infinite Loop when particular values are chosen causing an int overflow during
        // validation of buffer sizes.
        // https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/issues/171
        [Test, Timeout(10000)]
        public void InvalidLargeBufferSizeDoesNotCauseOverflow()
        {
            const int BlockSize = 128;
            const int LargeBufferMultiple = 1024;
            const int MaxBufferSize = int.MaxValue;

            Assert.Throws<ArgumentException>(()=>new RecyclableMemoryStreamManager(BlockSize, LargeBufferMultiple, MaxBufferSize, this.UseExponentialLargeBuffer) { AggressiveBufferReturn = this.AggressiveBufferRelease });
        }

        [Test]
        public override void RequestTooLargeBufferAdjustsInUseCounter()
        {
            var memMgr = this.GetMemoryManager();
            var buffer = memMgr.GetLargeBuffer(memMgr.MaximumBufferSize + 1, DefaultId, DefaultTag);
            Assert.That(buffer.Length, Is.EqualTo(memMgr.MaximumBufferSize * 2));
            Assert.That(memMgr.LargePoolInUseSize, Is.EqualTo(buffer.Length));
        }

        protected override void TestDroppingLargeBuffer(long maxFreeLargeBufferSize)
        {
            const int BlockSize = 100;
            const int LargeBufferMultiple = 1000;
            const int MaxBufferSize = 8000;

            for (var size = LargeBufferMultiple; size <= MaxBufferSize; size *= 2)
            {
                var memMgr = new RecyclableMemoryStreamManager(BlockSize, LargeBufferMultiple, MaxBufferSize, this.UseExponentialLargeBuffer)
                             {
                                 AggressiveBufferReturn = this.AggressiveBufferRelease,
                                 MaximumFreeLargePoolBytes = maxFreeLargeBufferSize
                             };

                var buffers = new List<byte[]>();

                //Get one extra buffer
                var buffersToRetrieve = (maxFreeLargeBufferSize > 0) ? (maxFreeLargeBufferSize / size + 1) : 10;
                for (var i = 0; i < buffersToRetrieve; i++)
                {
                    buffers.Add(memMgr.GetLargeBuffer(size, DefaultId, DefaultTag));
                }
                Assert.That(memMgr.LargePoolInUseSize, Is.EqualTo(size * buffersToRetrieve));
                Assert.That(memMgr.LargePoolFreeSize, Is.EqualTo(0));
                foreach (var buffer in buffers)
                {
                    memMgr.ReturnLargeBuffer(buffer, DefaultId, DefaultTag);
                }
                Assert.That(memMgr.LargePoolInUseSize, Is.EqualTo(0));
                if (maxFreeLargeBufferSize > 0)
                {
                    Assert.That(memMgr.LargePoolFreeSize, Is.LessThanOrEqualTo(maxFreeLargeBufferSize));
                }
                else
                {
                    Assert.That(memMgr.LargePoolFreeSize, Is.EqualTo(buffersToRetrieve * size));
                }
            }
        }
    }

    [TestFixture]
    public sealed class RecyclableMemoryStreamTestsWithPassiveBufferReleaseUsingExponentialLargeBuffer : BaseRecyclableMemoryStreamTestsUsingExponentialLargeBuffer
    {
        protected override bool AggressiveBufferRelease
        {
            get { return false; }
        }

        [Test]
        public void OldBuffersAreKeptInStreamUntilDispose()
        {
            var stream = this.GetDefaultStream();
            var memMgr = stream.MemoryManager;
            var buffer = this.GetRandomBuffer(stream.MemoryManager.LargeBufferMultiple);
            stream.Write(buffer, 0, buffer.Length);
            stream.GetBuffer();

            Assert.That(memMgr.LargePoolInUseSize, Is.EqualTo(memMgr.LargeBufferMultiple * (1)));
            Assert.That(memMgr.LargePoolFreeSize, Is.EqualTo(0));
            Assert.That(memMgr.SmallPoolFreeSize, Is.EqualTo(0));
            Assert.That(memMgr.SmallPoolInUseSize, Is.EqualTo(memMgr.LargeBufferMultiple));

            stream.Write(buffer, 0, buffer.Length);

            Assert.That(memMgr.LargePoolFreeSize, Is.EqualTo(0));
            Assert.That(memMgr.LargePoolInUseSize, Is.EqualTo(memMgr.LargeBufferMultiple * (1 + 2)));
            Assert.That(memMgr.SmallPoolFreeSize, Is.EqualTo(0));
            Assert.That(memMgr.SmallPoolInUseSize, Is.EqualTo(memMgr.LargeBufferMultiple));

            stream.Write(buffer, 0, buffer.Length);

            Assert.That(memMgr.LargePoolFreeSize, Is.EqualTo(0));
            Assert.That(memMgr.LargePoolInUseSize, Is.EqualTo(memMgr.LargeBufferMultiple * (1 + 2 + 4)));
            Assert.That(memMgr.SmallPoolFreeSize, Is.EqualTo(0));
            Assert.That(memMgr.SmallPoolInUseSize, Is.EqualTo(memMgr.LargeBufferMultiple));

            stream.Dispose();

            Assert.That(memMgr.LargePoolFreeSize, Is.EqualTo(memMgr.LargeBufferMultiple * (1 + 2 + 4)));
            Assert.That(memMgr.LargePoolInUseSize, Is.EqualTo(0));
            Assert.That(memMgr.SmallPoolFreeSize, Is.EqualTo(memMgr.LargeBufferMultiple));
            Assert.That(memMgr.SmallPoolInUseSize, Is.EqualTo(0));
        }
    }

    [TestFixture]
    public sealed class RecyclableMemoryStreamTestsWithAggressiveBufferReleaseUsingExponentialLargeBuffer : BaseRecyclableMemoryStreamTestsUsingExponentialLargeBuffer
    {
        protected override bool AggressiveBufferRelease
        {
            get { return true; }
        }
    }
}
