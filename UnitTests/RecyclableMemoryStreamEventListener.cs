using System.Diagnostics.Tracing;
using System.Threading;

namespace Microsoft.IO.UnitTests
{
    public class RecyclableMemoryStreamEventListener : EventListener
    {
        private const int MemoryStreamDisposed = 2;
        private const int MemoryStreamDoubleDispose = 3;

        public bool MemoryStreamDoubleDisposeCalled { get; private set; }

        public RecyclableMemoryStreamEventListener()
        {
            this.EnableEvents(RecyclableMemoryStreamManager.Events.Write, EventLevel.Verbose);
        }

        protected override void OnEventWritten(EventWrittenEventArgs eventData)
        {
            const int TagIndex = 1;
            this.EventWritten(eventData.EventId, (string)eventData.Payload[TagIndex]);
        }

        public virtual void EventWritten(int eventId, string tag)
        {
            switch (eventId)
            {
                case MemoryStreamDisposed:
                    {
                        Thread.Sleep(10);
                        break;
                    }
                case MemoryStreamDoubleDispose:
                    {
                        MemoryStreamDoubleDisposeCalled = true;
                        break;
                    }
            }
        }
    }
}