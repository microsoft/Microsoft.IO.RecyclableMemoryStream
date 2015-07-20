// ---------------------------------------------------------------------
// Copyright (c) 2015 Microsoft
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
// ---------------------------------------------------------------------

namespace Microsoft.IO
{
	using System;

	public sealed partial class RecyclableMemoryStreamManager
	{
		public sealed class Events
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

			public void MemoryStreamCreated(Guid guid, string tag, int requestedSize) { }

			public void MemoryStreamDisposed(Guid guid, string tag) { }

			public void MemoryStreamDoubleDispose(Guid guid, string tag, string allocationStack, string disposeStack1,
				string disposeStack2) { }

			public void MemoryStreamFinalized(Guid guid, string tag, string allocationStack) { }

			public void MemoryStreamToArray(Guid guid, string tag, string stack, int size) { }

			public void MemoryStreamManagerInitialized(int blockSize, int largeBufferMultiple, int maximumBufferSize) { }

			public void MemoryStreamNewBlockCreated(long smallPoolInUseBytes) { }

			public void MemoryStreamNewLargeBufferCreated(int requiredSize, long largePoolInUseBytes) { }

			public void MemoryStreamNonPooledLargeBufferCreated(int requiredSize, string tag, string allocationStack) { }

			public void MemoryStreamDiscardBuffer(MemoryStreamBufferType bufferType, string tag,
				MemoryStreamDiscardReason reason) { }

			public void MemoryStreamOverCapacity(int requestedCapacity, long maxCapacity, string tag,
				string allocationStack) { }
		}
	}
}
