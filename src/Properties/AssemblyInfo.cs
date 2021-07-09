using System;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;
using System.Security;

#if !NOFRIENDASSEMBLY
[assembly: InternalsVisibleTo("Microsoft.IO.RecyclableMemoryStream.UnitTests")]
#endif

[assembly: CLSCompliant(true)]
[assembly: AllowPartiallyTrustedCallers]
[assembly: SecurityRules(SecurityRuleSet.Level1)]

// Setting ComVisible to false makes the types in this assembly not visible 
// to COM components.  If you need to access a type in this assembly from 
// COM, set the ComVisible attribute to true on that type.
[assembly: ComVisible(false)]