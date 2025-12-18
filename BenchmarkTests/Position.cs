using BenchmarkDotNet.Attributes;
using Microsoft.IO;

namespace BenchmarkTests
{
    public class Position
    {
        private RecyclableMemoryStream? stream;
        private RecyclableMemoryStream? streamLargeBuffer;
        const int BufferSize = 100_000_000;
        private byte[] buffer = new byte[BufferSize];

        [IterationSetup]
        public void IterationSetup()
        {
            var manager = new RecyclableMemoryStreamManager();

            this.stream = new RecyclableMemoryStream(manager);

            this.streamLargeBuffer = new RecyclableMemoryStream(manager);
            this.streamLargeBuffer.GetBuffer();

            this.stream.Write(this.buffer);
            this.stream.Position = 0;

            this.streamLargeBuffer.Write(this.buffer);
            this.streamLargeBuffer.Position = 0;
        }

        [Benchmark]
        public void UpdatePositions_Blocks()
        {
            for (int i=0;i < this.stream!.Length;i++)
            {
                this.stream.Position += 1;
            }
        }

        [Benchmark]
        public void UpdatePositions_LargeBuffer()
        {
            for (int i = 0; i < this.streamLargeBuffer!.Length; i++)
            {
                this.streamLargeBuffer.Position += 1;
            }
        }
    }
}
