// ---------------------------------------------------------------------
// Copyright 2015 Microsoft
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ---------------------------------------------------------------------

namespace Microsoft.IO
{
    using System;
    using System.Diagnostics.Tracing;

    public sealed partial class RecyclableMemoryStreamManager
    {
        [EventSource(Name = "Microsoft-IO-RecyclableMemoryStream", Guid = "{B80CD4E4-890E-468D-9CBA-90EB7C82DFC7}")]
        public sealed class Events : EventSource
        {
            public static Events Write = new Events();

            public enum MemoryStreamBufferType
            {
                Small,
                Large
            }

            public enum MemoryStreamDiscardReason
            {
                TooLarge,
                EnoughFree
            }

            [Event(1, Level = EventLevel.Verbose)]
            public void MemoryStreamCreated(Guid guid, string tag, int requestedSize)
            {
                if (this.IsEnabled(EventLevel.Verbose, EventKeywords.None))
                {
                    WriteEvent(1, guid, tag ?? string.Empty, requestedSize);
                }
            }

            [Event(2, Level = EventLevel.Verbose)]
            public void MemoryStreamDisposed(Guid guid, string tag)
            {
                if (this.IsEnabled(EventLevel.Verbose, EventKeywords.None))
                {
                    WriteEvent(2, guid, tag ?? string.Empty);
                }
            }

            [Event(3, Level = EventLevel.Critical)]
            public void MemoryStreamDoubleDispose(Guid guid, string tag, string allocationStack, string disposeStack1,
                                                  string disposeStack2)
            {
                if (this.IsEnabled())
                {
                    this.WriteEvent(3, guid, tag ?? string.Empty, allocationStack ?? string.Empty,
                                    disposeStack1 ?? string.Empty, disposeStack2 ?? string.Empty);
                }
            }

            [Event(4, Level = EventLevel.Error)]
            public void MemoryStreamFinalized(Guid guid, string tag, string allocationStack)
            {
                if (this.IsEnabled())
                {
                    WriteEvent(4, guid, tag ?? string.Empty, allocationStack ?? string.Empty);
                }
            }

            [Event(5, Level = EventLevel.Verbose)]
            public void MemoryStreamToArray(Guid guid, string tag, string stack, int size)
            {
                if (this.IsEnabled(EventLevel.Verbose, EventKeywords.None))
                {
                    WriteEvent(5, guid, tag ?? string.Empty, stack ?? string.Empty, size);
                }
            }

            [Event(6, Level = EventLevel.Informational)]
            public void MemoryStreamManagerInitialized(int blockSize, int largeBufferMultiple, int maximumBufferSize)
            {
                if (this.IsEnabled())
                {
                    WriteEvent(6, blockSize, largeBufferMultiple, maximumBufferSize);
                }
            }

            [Event(7, Level = EventLevel.Verbose)]
            public void MemoryStreamNewBlockCreated(long smallPoolInUseBytes)
            {
                if (this.IsEnabled(EventLevel.Verbose, EventKeywords.None))
                {
                    WriteEvent(7, smallPoolInUseBytes);
                }
            }

            [Event(8, Level = EventLevel.Verbose)]
            public void MemoryStreamNewLargeBufferCreated(int requiredSize, long largePoolInUseBytes)
            {
                if (this.IsEnabled(EventLevel.Verbose, EventKeywords.None))
                {
                    WriteEvent(8, requiredSize, largePoolInUseBytes);
                }
            }

            [Event(9, Level = EventLevel.Verbose)]
            public void MemoryStreamNonPooledLargeBufferCreated(int requiredSize, string tag, string allocationStack)
            {
                if (this.IsEnabled(EventLevel.Verbose, EventKeywords.None))
                {
                    WriteEvent(9, requiredSize, tag ?? string.Empty, allocationStack ?? string.Empty);
                }
            }

            [Event(10, Level = EventLevel.Warning)]
            public void MemoryStreamDiscardBuffer(MemoryStreamBufferType bufferType, string tag,
                                                  MemoryStreamDiscardReason reason)
            {
                if (this.IsEnabled())
                {
                    WriteEvent(10, bufferType, tag ?? string.Empty, reason);
                }
            }

            [Event(11, Level = EventLevel.Error)]
            public void MemoryStreamOverCapacity(int requestedCapacity, long maxCapacity, string tag,
                                                 string allocationStack)
            {
                if (this.IsEnabled())
                {
                    WriteEvent(11, requestedCapacity, maxCapacity, tag ?? string.Empty, allocationStack ?? string.Empty);
                }
            }
        }
    }
}
