using BenchmarkDotNet.Attributes;
using Microsoft.IO;

namespace BenchmarkTests
{
    public class WriteTest
    {
        private RecyclableMemoryStream? subject;
        private RecyclableMemoryStream? subjectLargeBuffer;
        private readonly byte[] bytes = [1, 2, 3, 4, 5, 6];

        [IterationSetup]
        public void IterationSetup()
        {
            var manager = new RecyclableMemoryStreamManager();
            this.subject = new RecyclableMemoryStream(manager);
            this.subjectLargeBuffer = new RecyclableMemoryStream(manager, string.Empty, RecyclableMemoryStreamManager.DefaultBlockSize * 10);
        }

        [Benchmark]
        public void WriteByte_Blocks()
        {
            for (int i = 0; i < 100_000_000; i++)
            {
                this.subject!.WriteByte(1);
            }
        }

        [Benchmark]
        public void WriteByte_LargeBuffer()
        {
            for (int i = 0; i < 100_000_000; i++)
            {
                this.subjectLargeBuffer!.WriteByte(1);
            }
        }

        [Benchmark]
        public void WriteSpan_Blocks()
        {
            for (int i = 0; i < 100_000_000; i++)
            {
                this.subject!.Write(this.bytes.AsSpan());
            }
        }

        [Benchmark]
        public void WriteSpan_LargeBuffer()
        {
            for (int i = 0; i < 100_000_000; i++)
            {
                this.subject!.Write(this.bytes.AsSpan());
            }
        }
    }
}
