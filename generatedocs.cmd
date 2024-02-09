@ECHO OFF
ECHO ===========================================================
ECHO Using xmldocmd from https://github.com/ejball/XmlDocMarkdown
ECHO ===========================================================

del /q /s docs\*

xmldocmd .\src\bin\Release\netstandard2.1\Microsoft.IO.RecyclableMemoryStream.dll .\docs --obsolete --clean

ECHO Done.