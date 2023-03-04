using System.IO;
using System.Linq;
using System.Text.Json.Nodes;

string resultsDir = "./BenchmarkDotNet.Artifacts/results";
string resultsFile = "Combined.Benchmarks";
string searchPattern = "*-report-full-compressed.json";

var resultsPath = Path.Combine(resultsDir, resultsFile + ".json");

if (!Directory.Exists(resultsDir))
{
	throw new DirectoryNotFoundException($"Directory not found '{resultsDir}'");
}

if (File.Exists(resultsPath))
{
	File.Delete(resultsPath);
}

var reports = Directory
	.GetFiles(resultsDir, searchPattern, SearchOption.TopDirectoryOnly)
	.ToArray();
if (!reports.Any())
{
	throw new FileNotFoundException($"Reports not found '{searchPattern}'");
}

var combinedReport = JsonNode.Parse(File.ReadAllText(reports.First()))!;
var title = combinedReport["Title"]!;
var benchmarks = combinedReport["Benchmarks"]!.AsArray();
// Rename title whilst keeping original timestamp
combinedReport["Title"] = $"{resultsFile}{title.GetValue<string>()[^16..]}";

foreach (var report in reports.Skip(1))
{
	var array = JsonNode.Parse(File.ReadAllText(report))!["Benchmarks"]!.AsArray();
	foreach (var benchmark in array)
	{
		// Double parse avoids "The node already has a parent" exception
		benchmarks.Add(JsonNode.Parse(benchmark!.ToJsonString())!);
	}
}

File.WriteAllText(resultsPath, combinedReport.ToString());
