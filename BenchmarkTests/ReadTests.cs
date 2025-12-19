using BenchmarkDotNet.Attributes;
using Microsoft.IO;

namespace BenchmarkTests
{
    public class ReadTests
    {
        private RecyclableMemoryStream? subject;
        private RecyclableMemoryStream? subjectLargeBuffer;
        private byte[] buffer = new byte[1024];
        private const int LoopIterations = 1000;

        [GlobalSetup]
        public void GlobalSetup()
        {
            var manager = new RecyclableMemoryStreamManager();

            var byteContent = new byte[LoopIterations * this.buffer.Length];
            Random.Shared.NextBytes(byteContent);

            this.subject = new RecyclableMemoryStream(manager);
            this.subjectLargeBuffer = new RecyclableMemoryStream(manager, string.Empty, RecyclableMemoryStreamManager.DefaultBlockSize * 10);
            _ = this.subjectLargeBuffer.GetBuffer();

            this.subject.Write(byteContent, 0, byteContent.Length);
            this.subjectLargeBuffer.Write(byteContent, 0, byteContent.Length);
        }

        [IterationSetup]
        public void IterationSetup()
        {
            this.subject!.Position = 0;
            this.subjectLargeBuffer!.Position = 0;
        }

        [Benchmark]
        public void ReadByte_Blocks()
        {
            for (int i = 0; i < this.subject!.Length; i++)
            {
                _ = this.subject!.ReadByte();
            }
        }

        [Benchmark]
        public void ReadByte_LargeBuffer()
        {
            for (int i = 0; i < this.subject!.Length; i++)
            {
                _ = this.subjectLargeBuffer!.ReadByte();
            }
        }

        [Benchmark]
        public void ReadBuffer_Blocks()
        {
            for (int i = 0; i < LoopIterations; i++)
            {                
                this.subject!.Read(this.buffer, 0, this.buffer.Length);
            }
        }

        [Benchmark]
        public void ReadBuffer_LargeBuffer()
        {
            for (int i = 0; i < LoopIterations; i++)
            {
                this.subjectLargeBuffer!.Read(this.buffer, 0, this.buffer.Length);
            }
        }
    }
}
