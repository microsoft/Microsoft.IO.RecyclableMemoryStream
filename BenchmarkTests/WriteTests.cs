using BenchmarkDotNet.Attributes;
using Microsoft.IO;

namespace BenchmarkTests
{
    public class WriteTest
    {
        private RecyclableMemoryStream? subject;
        private RecyclableMemoryStream? subjectLargeBuffer;
        private byte[]? bytes;
        private const int BufferSize = 1024;
        private const int BytesToWrite = RecyclableMemoryStreamManager.DefaultBlockSize * 10;
        private const int LoopIterations = BytesToWrite / BufferSize;

        [GlobalSetup]
        public void GlobalSetup()
        {
            this.bytes = new byte[BufferSize];
            Random.Shared.NextBytes(this.bytes);

            var manager = new RecyclableMemoryStreamManager();
            this.subject = new RecyclableMemoryStream(manager);
            this.subjectLargeBuffer = new RecyclableMemoryStream(manager, string.Empty, BytesToWrite);
            _ = this.subjectLargeBuffer.GetBuffer();
        }

        [IterationSetup]
        public void IterationSetup()
        {
            this.subject!.Position = 0;
            this.subjectLargeBuffer!.Position = 0;
        }

        [Benchmark]
        public void WriteByte_Blocks()
        {
            for (int i = 0; i < BytesToWrite; i++)
            {
                this.subject!.WriteByte(1);
            }
        }

        [Benchmark]
        public void WriteByte_LargeBuffer()
        {
            for (int i = 0; i < BytesToWrite; i++)
            {
                this.subjectLargeBuffer!.WriteByte(1);
            }
        }

        [Benchmark]
        public void WriteBuffer_Blocks()
        {
            for (int i = 0; i < LoopIterations; i++)
            {
                this.subject!.Write(this.bytes!, 0, this.bytes!.Length);
            }
        }

        [Benchmark]
        public void WriteBuffer_LargeBuffer()
        {
            for (int i = 0; i < LoopIterations; i++)
            {
                this.subjectLargeBuffer!.Write(this.bytes!, 0, this.bytes!.Length);
            }
        }
    }
}
