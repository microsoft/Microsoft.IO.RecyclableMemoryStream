using BenchmarkDotNet.Attributes;
using Microsoft.IO;

namespace BenchmarkTests
{
    public class Position
    {
        private RecyclableMemoryStream? stream;
        private RecyclableMemoryStream? streamLargeBuffer;
        const int BufferSize = RecyclableMemoryStreamManager.DefaultBlockSize * 10;
        private byte[] buffer = new byte[BufferSize];

        [GlobalSetup]
        public void GlobalSetup()
        {
            Random.Shared.NextBytes(this.buffer);

            var manager = new RecyclableMemoryStreamManager();

            this.stream = new RecyclableMemoryStream(manager);
            this.stream.Write(this.buffer);

            this.streamLargeBuffer = new RecyclableMemoryStream(manager);
            this.streamLargeBuffer.Write(this.buffer);

            _ = this.streamLargeBuffer.GetBuffer();            
        }

        [IterationSetup]
        public void IterationSetup()
        {
            this.stream!.Position = 0;
            this.streamLargeBuffer!.Position = 0;
        }

        [Benchmark]
        public void UpdatePosition_Blocks()
        {
            for (int i=0;i < this.stream!.Length;i++)
            {
                this.stream.Position += 1;
            }
        }

        [Benchmark]
        public void UpdatePosition_LargeBuffer()
        {
            for (int i = 0; i < this.streamLargeBuffer!.Length; i++)
            {
                this.streamLargeBuffer.Position += 1;
            }
        }
    }
}
