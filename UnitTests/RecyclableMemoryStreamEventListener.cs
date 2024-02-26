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

        private const int NumEvents = 12;

        public int[] EventCounts { get; } = new int[NumEvents];

        public RecyclableMemoryStreamEventListener()
        {
            this.EnableEvents(RecyclableMemoryStreamManager.Events.Writer, EventLevel.Verbose);
        }

        public bool MemoryStreamDoubleDisposeCalled { get; private set; }

        protected override void OnEventWritten(EventWrittenEventArgs eventData)
        {
            this.EventWritten(eventData.EventId);
        }

        public new virtual void EventWritten(int eventId)
        {
            this.EventCounts[eventId]++;

            switch (eventId)
            {
                case MemoryStreamDisposed:
                    Thread.Sleep(10);
                    break;
                case MemoryStreamDoubleDispose:
                    this.MemoryStreamDoubleDisposeCalled = true;
                    break;
            }
        }
    }
}
