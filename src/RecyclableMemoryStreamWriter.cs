// The MIT License (MIT)
//
// Copyright (c) 2017 Microsoft
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

namespace Microsoft.IO
{
    using System;
    using System.Diagnostics;
    using System.IO;
    using System.Text;
    using System.Threading;
    using System.Threading.Tasks;

    /// <summary>
    /// Implements a <see cref="TextWriter"/> for writing data to the <see cref="RecyclableMemoryStream"/>.<br/>
    /// It provides some performance benefits over the standard <see cref="StreamWriter"/> by encoding
    /// data directly to the <see cref="RecyclableMemoryStream"/>'s internal buffer, avoding using
    /// the temporary <c>byte[]</c> for encoder output whenever possible.
    /// </summary>
    /// <seealso href="https://referencesource.microsoft.com/#mscorlib/system/io/streamwriter.cs"/>
    /// <seealso href="https://referencesource.microsoft.com/#mscorlib/system/io/textwriter.cs"/>
    public class RecyclableMemoryStreamWriter : TextWriter
    {
        /// <summary>
        /// The size of the buffer, in number of 16-bit characters, used to cache the data before it's fed to the encoder.
        /// </summary>
        private const int DefaultBufferSize = 1 * 1024;
        private const int MinBufferSize = 128;

        // Used by the WriteSubstringAsync method.
        private static Action<object> writeSubstringDelegate = state =>
        {
            var tuple = (Tuple<RecyclableMemoryStreamWriter, string, int, int>)state;
            tuple.Item1.WriteSubstring(tuple.Item2, tuple.Item3, tuple.Item4);
        };

        private readonly bool leaveOpen;

        private RecyclableMemoryStream stream;
        private Encoding encoding;
        private Encoder encoder;
        private char[] charBuffer;
        private int charLen;
        private int charPos;
        private bool preambleWritten;
        private bool autoFlush;

        // This buffer is used if we don't have enough free space left in the current block
        // to encode the charBuffer contents, and we need to split writes across multiple blocks.
        private byte[] byteBuffer;

        #region Constructors
        /// <summary>
        /// Initializes a new instance of the <see cref="RecyclableMemoryStreamWriter"/> class for the specified stream
        /// by using UTF-8 encoding and the default buffer size.
        /// </summary>
        /// <param name="stream">The stream to write to.</param>
        /// <remarks>
        /// This constructor creates a <see cref="RecyclableMemoryStreamWriter"/> with UTF-8 encoding without a
        /// Byte-Order Mark (BOM), so its <see cref="Encoding.GetPreamble"/> method returns an empty byte array.
        /// The default UTF-8 encoding for this constructor throws an exception on invalid bytes.
        /// This behavior is different from the behavior provided by the encoding object in the <see cref="Encoding.UTF8"/>
        /// To specify whether an exception is thrown on invalid bytes, use a constructor that accepts an encoding
        /// object as a parameter, such as <see cref="RecyclableMemoryStreamWriter(RecyclableMemoryStream, Encoding)"/>.
        /// The <see cref="BaseStream"/> property is initialized using the <paramref name="stream"/> parameter.
        /// The position of the stream is not reset.
        /// </remarks>
        /// <exception cref="ArgumentNullException"><paramref name="stream"/> is <c>null</c>.</exception>
        /// <exception cref="ArgumentException"><paramref name="stream"/> is not readable, writable, or seekable.</exception>
        public RecyclableMemoryStreamWriter(RecyclableMemoryStream stream)
            : this(stream, new UTF8Encoding(false, true), DefaultBufferSize, false) { }

        /// <summary>
        /// Initializes a new instance of the <see cref="RecyclableMemoryStreamWriter"/> class for the specified stream
        /// by using the specified encoding and the default buffer size.
        /// </summary>
        /// <param name="stream">The stream to write to.</param>
        /// <param name="encoding">The character encoding to use.</param>
        /// <remarks>
        /// This constructor initializes the <see cref="Encoding"/> property using the <paramref name="encoding"/> parameter,
        /// and the <see cref="BaseStream"/> property using the <paramref name="stream"/> parameter.
        /// The position of the stream is not reset.
        /// </remarks>
        /// <exception cref="ArgumentNullException"><paramref name="stream"/> or <paramref name="encoding"/> is <c>null</c>.</exception>
        /// <exception cref="ArgumentException"><paramref name="stream"/> is not readable, writable, or seekable.</exception>
        public RecyclableMemoryStreamWriter(RecyclableMemoryStream stream, Encoding encoding)
            : this(stream, encoding, DefaultBufferSize, false) { }

        /// <summary>
        /// Initializes a new instance of the <see cref="RecyclableMemoryStreamWriter"/> class for the specified stream
        /// by using the specified encoding and buffer size.
        /// </summary>
        /// <param name="stream">The stream to write to.</param>
        /// <param name="encoding">The character encoding to use.</param>
        /// <param name="bufferSize">The buffer size, in number of 16-bit characters.</param>
        /// <remarks>
        /// This constructor initializes the <see cref="Encoding"/> property using the <paramref name="encoding"/> parameter,
        /// and the <see cref="BaseStream"/> property using the <paramref name="stream"/> parameter.
        /// The position of the stream is not reset.
        /// </remarks>
        /// <exception cref="ArgumentNullException"><paramref name="stream"/> or <paramref name="encoding"/> is <c>null</c>.</exception>
        /// <exception cref="ArgumentException"><paramref name="stream"/> is not readable, writable, or seekable.</exception>
        /// <exception cref="ArgumentOutOfRangeException"><paramref name="bufferSize"/> is zero or negative.</exception>
        public RecyclableMemoryStreamWriter(RecyclableMemoryStream stream, Encoding encoding, int bufferSize)
            : this(stream, encoding, bufferSize, false) { }

        /// <summary>
        /// Initializes a new instance of the <see cref="RecyclableMemoryStreamWriter"/> class for the specified stream
        /// by using the specified encoding and buffer size, and optionally leaves the stream open.
        /// </summary>
        /// <param name="stream">The stream to write to.</param>
        /// <param name="encoding">The character encoding to use.</param>
        /// <param name="bufferSize">The buffer size, in number of 16-bit characters.</param>
        /// <param name="leaveOpen">
        /// <c>true</c> to leave the stream open after the <see cref="MemoryStreamWriter"/> object is disposed; otherwise, <c>false</c>.
        /// </param>
        /// <remarks>
        /// Unless you set the <paramref name="leaveOpen"/> parameter to <c>true</c>, the <see cref="RecyclableMemoryStream"/>
        /// object calls <see cref="RecyclableMemoryStream.Dispose"/> on the provided <paramref name="stream"/> object when
        /// <see cref="TextWriter.Dispose"/> is called.
        /// This constructor initializes the <see cref="Encoding"/> property using the <paramref name="encoding"/> parameter,
        /// and the <see cref="BaseStream"/> property using the <paramref name="stream"/> parameter.
        /// The position of the stream is not reset.
        /// </remarks>
        /// <exception cref="ArgumentNullException"><paramref name="stream"/> or <paramref name="encoding"/> is <c>null</c>.</exception>
        /// <exception cref="ArgumentOutOfRangeException"><paramref name="bufferSize"/> is zero or negative.</exception>
        public RecyclableMemoryStreamWriter(RecyclableMemoryStream stream, Encoding encoding, int bufferSize, bool leaveOpen)
            : base(null)
        {
            if (stream == null)
            {
                throw new ArgumentNullException(nameof(stream));
            }

            if (encoding == null)
            {
                throw new ArgumentNullException(nameof(encoding));
            }

            if (bufferSize <= 0)
            {
                throw new ArgumentOutOfRangeException(nameof(bufferSize), bufferSize, "Buffer size should be greater than zero");
            }

            this.stream = stream;
            this.leaveOpen = leaveOpen;
            this.encoding = encoding;
            this.encoder = encoding.GetEncoder();

            this.charLen = Math.Max(bufferSize, MinBufferSize);
            this.charBuffer = new char[this.charLen];
            this.byteBuffer = new byte[this.encoding.GetMaxByteCount(this.charLen)];

            // If we're appending to a stream that already has data, don't write the preamble.
            this.preambleWritten = (this.encoding.GetPreamble().Length == 0) || (this.stream.Position > 0);
        }
        #endregion

        #region Dispose and Finalize
        ~RecyclableMemoryStreamWriter()
        {
            this.Dispose(false);
            GC.SuppressFinalize(this);
        }

        protected override void Dispose(bool disposing)
        {
            if (this.stream == null)
            {
                return;
            }

            try
            {
                // We need to flush any buffered data if we are being closed/disposed.
                if (this.stream != null && (disposing || this.leaveOpen))
                {
                    this.Flush(flushEncoder: true);
                }
            }
            finally
            {
                try
                {
                    if (this.stream != null && !this.leaveOpen)
                    {
                        // Attempt to close the stream even if there was an IO error from flushing.
                        this.stream.Close();
                    }
                }
                finally
                {
                    this.stream = null;
                    this.encoding = null;
                    this.encoder = null;
                    this.charBuffer = null;
                    this.byteBuffer = null;

                    base.Dispose(disposing);
                }
            }
        }
        #endregion

        #region Properties
        /// <summary>
        /// Gets the <see cref="System.Text.Encoding"/> in which the output is written.
        /// </summary>
        public override Encoding Encoding
        {
            get
            {
                this.CheckDisposed();
                return this.encoding;
            }
        }

        /// <summary>
        /// Gets the underlying stream that interfaces with a backing store.
        /// </summary>
        public virtual RecyclableMemoryStream BaseStream
        {
            get
            {
                this.CheckDisposed();
                return this.stream;
            }
        }

        /// <summary>
        /// Gets or sets a value indicating whether the <see cref="RecyclableMemoryStreamWriter"/> will flush
        /// its buffer to the underlying stream after every call to <see cref="RecyclableMemoryStream.Write(byte[], int, int)"/>.
        /// </summary>
        public virtual bool AutoFlush
        {
            get
            {
                this.CheckDisposed();
                return this.autoFlush;
            }

            set
            {
                this.CheckDisposed();

                this.autoFlush = value;

                if (value)
                {
                    this.Flush(flushEncoder: false);
                }
            }
        }
        #endregion

        #region TextWriter overrides
        public override void Flush()
        {
            this.CheckDisposed();
            this.Flush(flushEncoder: true);
        }

        public override void Write(char value)
        {
            this.CheckDisposed();

            if (this.charPos == this.charLen)
            {
                this.Flush(flushEncoder: false);
            }

            this.charBuffer[this.charPos] = value;
            this.charPos++;

            if (this.autoFlush)
            {
                this.Flush(flushEncoder: false);
            }
        }

        public override void Write(char[] buffer)
        {
            this.CheckDisposed();

            if (buffer == null)
            {
                return;
            }

            this.InternalWrite(buffer, 0, buffer.Length);
        }

        public override void Write(char[] buffer, int index, int count)
        {
            this.CheckDisposed();

            if (buffer == null)
            {
                throw new ArgumentNullException(nameof(buffer));
            }

            if (index < 0)
            {
                throw new ArgumentOutOfRangeException(nameof(index));
            }

            if (count < 0)
            {
                throw new ArgumentOutOfRangeException(nameof(count));
            }

            if (index + count > buffer.Length)
            {
                throw new ArgumentException($"'{nameof(index)}' + '{nameof(count)}' should be smaller than the '{nameof(buffer)}' length");
            }

            this.InternalWrite(buffer, index, count);
        }

        public override void Write(string value)
        {
            this.CheckDisposed();

            if (value == null)
            {
                return;
            }

            this.InternalWrite(value, 0, value.Length);
        }
        #endregion

        #region New public methods
        /// <summary>
        /// Writes a subtring to the stream.
        /// </summary>
        /// <param name="value">String that contains data to write.</param>
        /// <param name="index">The character position in the string at which to start reading data.</param>
        /// <param name="count">The maximum number of characters to write.</param>
        /// <exception cref="ArgumentNullException"><paramref name="value"/> is <c>null</c>.</exception>
        /// <exception cref="ArgumentException">The string length minus <paramref name="index"/> is less than <paramref name="count"/>.</exception>
        /// <exception cref="ArgumentOutOfRangeException"><paramref name="index"/> or <paramref name="count"/> is negative.</exception>
        /// <exception cref="ObjectDisposedException">The current writer or the <see cref="BaseStream"/> is closed.</exception>
        public virtual void WriteSubstring(string value, int index, int count)
        {
            this.CheckDisposed();

            if (value == null)
            {
                throw new ArgumentNullException(nameof(value));
            }

            if (index < 0)
            {
                throw new ArgumentOutOfRangeException(nameof(index));
            }

            if (count < 0)
            {
                throw new ArgumentOutOfRangeException(nameof(count));
            }

            if (index + count > value.Length)
            {
                throw new ArgumentException($"'{nameof(index)}' + '{nameof(count)}' should be smaller than the '{nameof(value)}' length");
            }

            this.InternalWrite(value, index, count);
        }

        /// <summary>
        /// Writes a subtring to the stream asynchronously.
        /// </summary>
        /// <param name="value">String that contains data to write.</param>
        /// <param name="index">The character position in the string at which to start reading data.</param>
        /// <param name="count">The maximum number of characters to write.</param>
        /// <returns>A task that represents the asynchronous write operation.</returns>
        /// <exception cref="ArgumentNullException"><paramref name="value"/> is <c>null</c>.</exception>
        /// <exception cref="ArgumentException">The string length minus <paramref name="index"/> is less than <paramref name="count"/>.</exception>
        /// <exception cref="ArgumentOutOfRangeException"><paramref name="index"/> or <paramref name="count"/> is negative.</exception>
        /// <exception cref="ObjectDisposedException">The current writer or the <see cref="BaseStream"/> is closed.</exception>
        public virtual Task WriteSubstringAsync(string value, int index, int count)
        {
            var tuple = new Tuple<RecyclableMemoryStreamWriter, string, int, int>(this, value, index, count);
#if NET40
            return Task.Factory.StartNew(writeSubstringDelegate, tuple, CancellationToken.None, TaskCreationOptions.None, TaskScheduler.Default);
#else
            return Task.Factory.StartNew(writeSubstringDelegate, tuple, CancellationToken.None, TaskCreationOptions.DenyChildAttach, TaskScheduler.Default);
#endif
        }
        #endregion

        #region Helper methods
        /// <summary>
        /// Throws the <see cref="ObjectDisposedException"/> if the current instance is disposed.
        /// </summary>
        protected void CheckDisposed()
        {
            if (this.stream == null)
            {
                throw new ObjectDisposedException(nameof(RecyclableMemoryStreamWriter) + " is already disposed.");
            }
        }

        /// <summary>
        /// Writes the array of characters to the stream without input parameter validation.
        /// </summary>
        protected void InternalWrite(char[] buffer, int index, int count)
        {
            Debug.Assert(buffer != null);
            Debug.Assert(index >= 0);
            Debug.Assert(count >= 0);
            Debug.Assert(index + count <= buffer.Length);

            while (count > 0)
            {
                if (this.charPos == this.charLen)
                {
                    this.Flush(flushEncoder: false);
                }

                int charsToWrite = this.charLen - this.charPos;

                if (charsToWrite > count)
                {
                    charsToWrite = count;
                }

                Debug.Assert(charsToWrite > 0);
                Buffer.BlockCopy(buffer, index * sizeof(char), this.charBuffer, this.charPos * sizeof(char), charsToWrite * sizeof(char));

                this.charPos += charsToWrite;
                index += charsToWrite;
                count -= charsToWrite;
            }

            if (this.autoFlush)
            {
                this.Flush(flushEncoder: false);
            }
        }

        /// <summary>
        /// Writes the string to the stream without input parameter validation.
        /// </summary>
        protected void InternalWrite(string value, int index, int count)
        {
            Debug.Assert(value != null);
            Debug.Assert(index >= 0);
            Debug.Assert(count >= 0);
            Debug.Assert(index + count <= value.Length);

            while (count > 0)
            {
                if (this.charPos == this.charLen)
                {
                    this.Flush(flushEncoder: false);
                }

                int charsToWrite = this.charLen - this.charPos;

                if (charsToWrite > count)
                {
                    charsToWrite = count;
                }

                Debug.Assert(charsToWrite > 0);
                value.CopyTo(index, this.charBuffer, this.charPos, charsToWrite);

                this.charPos += charsToWrite;
                index += charsToWrite;
                count -= charsToWrite;
            }

            if (this.autoFlush)
            {
                this.Flush(flushEncoder: false);
            }
        }

        private void Flush(bool flushEncoder)
        {
            // Flush can be called from the Dispose() method, so no CheckDisposed() calls here.
            if (this.stream == null)
            {
                throw new ObjectDisposedException(nameof(RecyclableMemoryStreamWriter) + " is already disposed.");
            }

            // Performance boost for flush on non-dirty writer.
            if (this.charPos == 0 && !flushEncoder)
            {
                return;
            }

            if (!this.preambleWritten)
            {
                this.preambleWritten = true;

                byte[] preamble = this.encoding.GetPreamble();

                if (preamble.Length > 0)
                {
                    this.stream.Write(preamble, 0, preamble.Length);
                }
            }

            // Figure out whether we have enough free space left in the current block to encode the entire buffer.
            int maxBytesToWrite = this.encoding.GetMaxByteCount(this.charPos);

            // blockBuffer can be null after this call, if the stream is currently full.
            int blockBufferOffset;
            byte[] blockBuffer = this.stream.GetCurrentBlockAndRelativeOffset(out blockBufferOffset);

            int freeBytesInBlock = blockBuffer != null ? (blockBuffer.Length - blockBufferOffset) : 0;

            if (freeBytesInBlock >= maxBytesToWrite)
            {
                // There is enough space in the current block, use it directly.
                int bytesWritten = this.encoder.GetBytes(this.charBuffer, 0, this.charPos, blockBuffer, blockBufferOffset, flush: flushEncoder);

                if (bytesWritten > 0)
                {
                    this.stream.Seek(bytesWritten, SeekOrigin.Current);
                    this.stream.SetLength(this.stream.Position);
                }
            }
            else
            {
                // The current block might not fit the encoded data, use the temporary buffer first and
                // then copy the result to the stream, like the standard StreamWriter does.
                int bytesWritten = this.encoder.GetBytes(this.charBuffer, 0, this.charPos, this.byteBuffer, 0, flush: flushEncoder);

                if (bytesWritten > 0)
                {
                    this.stream.Write(this.byteBuffer, 0, bytesWritten);
                }
            }

            this.charPos = 0;
        }
        #endregion
    }
}
