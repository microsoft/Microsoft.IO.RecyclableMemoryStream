using Microsoft.VisualBasic;
using System.Numerics;
using System.Security.Cryptography;

namespace Microsoft.IO.RecyclableMemoryStream.Examples;

class Program
{
    private static readonly RecyclableMemoryStreamManager manager = new RecyclableMemoryStreamManager();

    static void Main(string[] args)
    {
        var sourceBuffer = new byte[] { 0, 1, 2, 3, 4, 5, 6, 7 };

        using (var stream = manager.GetStream())
        {
            stream.Write(sourceBuffer, 0, sourceBuffer.Length);
        }
    }
}

internal class WriteExample
{
    RecyclableMemoryStreamManager manager = new RecyclableMemoryStreamManager();
    byte[] sourceBuffer = new byte[100];
    internal void Example()
    {
        // Writing an buffer to a stream
        // START EXAMPLE
        using (var stream = manager.GetStream("Program.Main"))
        {
            stream.Write(sourceBuffer, 0, sourceBuffer.Length);
        }
        // END EXAMPLE

        // Provide buffer in GetStream

        // START EXAMPLE
        using (var stream = manager.GetStream("Program.Main", sourceBuffer,
                             0, sourceBuffer.Length))
        {

        }
        // END EXAMPLE
    }
}

internal class PoolParameters
{
    internal void Example()
    {
        // START EXAMPLE
        var options = new RecyclableMemoryStreamManager.Options()
        {
            BlockSize = 1024,
            LargeBufferMultiple = 1024 * 1024,
            MaximumBufferSize = 16 * 1024 * 1024,
            GenerateCallStacks = true,
            AggressiveBufferReturn = true,
            MaximumLargePoolFreeBytes = 16 * 1024 * 1024 * 4,
            MaximumSmallPoolFreeBytes = 100 * 1024,
        };

        var manager = new RecyclableMemoryStreamManager(options);
        // END EXAMPLE
    }
}

internal class IBufferWriterExample
{
    RecyclableMemoryStreamManager manager = new RecyclableMemoryStreamManager();

    internal void Example()
    {
        // START EXAMPLE
        var bigInt = BigInteger.Parse("123456789013374299100987654321");

        using (var stream = manager.GetStream())
        {
            Span<byte> buffer = stream.GetSpan(bigInt.GetByteCount());
            bigInt.TryWriteBytes(buffer, out int bytesWritten);
            stream.Advance(bytesWritten);
        }
        //END EXAMPLE
    }
}

internal class GetReadOnlySequenceExample
{
    RecyclableMemoryStreamManager manager = new RecyclableMemoryStreamManager();

    internal void Example()
    {
        // START EXAMPLE
        using (var stream = manager.GetStream())
        using (var sha256Hasher = IncrementalHash.CreateHash(HashAlgorithmName.SHA256))
        {
            foreach (var memory in stream.GetReadOnlySequence())
            {
                sha256Hasher.AppendData(memory.Span);
            }

            sha256Hasher.GetHashAndReset();
        }
        //END EXAMPLE
    }
}
