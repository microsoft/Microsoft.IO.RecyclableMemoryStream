@ECHO OFF
ECHO ===========================================================
ECHO Using xmldocmd from https://github.com/ejball/XmlDocMarkdown
ECHO ===========================================================

where xmldocmd >nul 2>nul
IF ERRORLEVEL 1 (
    ECHO xmldocmd not found. Installing...
    dotnet tool install xmldocmd -g
    IF ERRORLEVEL 1 (
        ECHO Failed to install xmldocmd.
        EXIT /B 1
    )
)

del /q /s docs\*

xmldocmd .\src\bin\Release\netstandard2.1\Microsoft.IO.RecyclableMemoryStream.dll .\docs --obsolete --clean

ECHO Done.