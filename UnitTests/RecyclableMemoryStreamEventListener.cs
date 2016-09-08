using System.Diagnostics.Tracing;

namespace Microsoft.IO.UnitTests
{
    public class RecyclableMemoryStreamEventListener : EventListener
    {
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
    
        }
    }
}