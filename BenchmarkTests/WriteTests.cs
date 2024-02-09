using BenchmarkDotNet.Attributes;
using Microsoft.IO;

namespace BenchmarkTests
{
    public class WriteTest
    {
        private RecyclableMemoryStream? subject;
        private readonly byte[] bytes = [1, 2, 3, 4, 5, 6];

        [IterationSetup]
        public void IterationSetup()
        {
            var manager = new RecyclableMemoryStreamManager();
            this.subject = new RecyclableMemoryStream(manager);
        }

        [Benchmark]
        public void WriteByte()
        {
            for (int i = 0; i < 10_000_000; i++)
            {
                this.subject!.WriteByte(1);
            }
        }

        [Benchmark]
        public void WriteSpan()
        {
            for (int i = 0; i < 10_000_000; i++)
            {
                this.subject!.Write(this.bytes.AsSpan());
            }
        }
    }
}
