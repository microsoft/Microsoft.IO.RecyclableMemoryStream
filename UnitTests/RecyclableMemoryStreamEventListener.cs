// The MIT License (MIT)
// 
// Copyright (c) 2015-2016 Microsoft
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

namespace Microsoft.IO.UnitTests
{
    using System.Diagnostics.Tracing;
    using System.Threading;

    public class RecyclableMemoryStreamEventListener : EventListener
    {
        private const int MemoryStreamDisposed = 2;
        private const int MemoryStreamDoubleDispose = 3;

        public RecyclableMemoryStreamEventListener()
        {
            this.EnableEvents(RecyclableMemoryStreamManager.Events.Write, EventLevel.Verbose);
        }

        public bool MemoryStreamDoubleDisposeCalled { get; private set; }

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
                Thread.Sleep(10);
                break;
            case MemoryStreamDoubleDispose:
                MemoryStreamDoubleDisposeCalled = true;
                break;
            }
        }
    }
}