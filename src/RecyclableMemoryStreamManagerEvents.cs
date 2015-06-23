namespace Microsoft.IO
{
    /// <summary>
    /// RecyclableMemoryStreamManager event handler definitions.
    /// </summary>
    public static class RecyclableMemoryStreamManagerEvents
    {
        /// <summary>
        /// Generic delegate for handling events without any arguments.
        /// </summary>
        public delegate void EventHandler();

        /// <summary>
        /// Delegate for handling large buffer discard reports.
        /// </summary>
        /// <param name="reason">Reason the buffer was discarded.</param>
        public delegate void LargeBufferDiscardedEventHandler(MemoryStreamDiscardReason reason);

        /// <summary>
        /// Delegate for handling reports of stream size when streams are allocated
        /// </summary>
        /// <param name="bytes">Bytes allocated.</param>
        public delegate void StreamLengthReportHandler(long bytes);

        /// <summary>
        /// Delegate for handling periodic reporting of memory use statistics.
        /// </summary>
        /// <param name="smallPoolInUseBytes">Bytes currently in use in the small pool.</param>
        /// <param name="smallPoolFreeBytes">Bytes currently free in the small pool.</param>
        /// <param name="largePoolInUseBytes">Bytes currently in use in the large pool.</param>
        /// <param name="largePoolFreeBytes">Bytes currently free in the large pool.</param>
        public delegate void UsageReportEventHandler(
            long smallPoolInUseBytes, long smallPoolFreeBytes, long largePoolInUseBytes, long largePoolFreeBytes);

        /// <summary>
        /// Reason for discarding buffer.
        /// </summary>
        public enum MemoryStreamDiscardReason
        {
            /// <summary>
            /// Buffer is too large.
            /// </summary>
            TooLarge,
            /// <summary>
            /// There are enough free buffers.
            /// </summary>
            EnoughFree
        }
    }
}