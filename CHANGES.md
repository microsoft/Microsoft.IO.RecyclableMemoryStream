# Version 1.2.0
- Bugs fixed when allocating very large streams.
- Concurrent methods for reading from a single stream added.
- Support for .NET 4.0 (without ETW instrumentation).
- It is now safe to call Dispose from multiple threads on the same object.

# Version 1.1.0
- Binaries on nuget.org are now signed through Microsoft.
- Some documentation enhancements and typo-cleanup.
- Some minor performance improvements.
- Fix behavior of Dispose() to be safe on double-dispose.

# Version 1.0.0
- Initial release.
