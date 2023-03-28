window.BENCHMARK_DATA = {
  "lastUpdate": 1680023886383,
  "repoUrl": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "lechu445@users.noreply.github.com",
            "name": "Leszek B",
            "username": "lechu445"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8650db096e1b22ae63d5071298bba5c88b29b11f",
          "message": "Add continuous benchmarking (#286)\n\n* Add continuous benchmarking\r\n\r\n* add info to readme\r\n\r\n---------\r\n\r\nCo-authored-by: lechu445 <xxx@example.com>",
          "timestamp": "2023-03-23T10:42:02-07:00",
          "tree_id": "0cde90123ca2f13a98ea4b00ac118ca6e56d97e6",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/8650db096e1b22ae63d5071298bba5c88b29b11f"
        },
        "date": 1679593395914,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 71862511.66666667,
            "unit": "ns",
            "range": "± 304733.98232080264"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 204736578.13636363,
            "unit": "ns",
            "range": "± 9648306.495287245"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechu445@users.noreply.github.com",
            "name": "Leszek B",
            "username": "lechu445"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "36012b2c188139716c746099163a471b4c63a318",
          "message": "Remove redundant int overloads (#280)\n\nContributes #256\r\n\r\nCo-authored-by: lechu445 <xxx@example.com>",
          "timestamp": "2023-03-23T10:42:31-07:00",
          "tree_id": "6b56c6a1632e26bedf4fd45dc56608d61e6a2745",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/36012b2c188139716c746099163a471b4c63a318"
        },
        "date": 1679593414152,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 135508034.6,
            "unit": "ns",
            "range": "± 82347.9424470165"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 383381971.3,
            "unit": "ns",
            "range": "± 8580804.680891052"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechu445@users.noreply.github.com",
            "name": "Leszek B",
            "username": "lechu445"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "897a510c3d5d6811bd8bd7b5393bea5104c669c5",
          "message": "Remove obsolete overloads (#279)\n\nContributes to #256\r\n\r\nCo-authored-by: lechu445 <xxx@example.com>",
          "timestamp": "2023-03-23T10:43:44-07:00",
          "tree_id": "6a74b6ab3f490043f980cb97965f21cbd986334a",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/897a510c3d5d6811bd8bd7b5393bea5104c669c5"
        },
        "date": 1679593482951,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 73230355.64285715,
            "unit": "ns",
            "range": "± 318733.9086384434"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 194573799.08333334,
            "unit": "ns",
            "range": "± 6443395.211303274"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "622a422a296157ea2fbbe89ca34dad1435095d6e",
          "message": "Bump actions/setup-dotnet from 1 to 3 (#288)\n\nBumps [actions/setup-dotnet](https://github.com/actions/setup-dotnet) from 1 to 3.\r\n- [Release notes](https://github.com/actions/setup-dotnet/releases)\r\n- [Commits](https://github.com/actions/setup-dotnet/compare/v1...v3)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: actions/setup-dotnet\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-major\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-03-28T09:13:00-07:00",
          "tree_id": "2dfbe66d92d961d6bd689ca4236148d514fa8585",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/622a422a296157ea2fbbe89ca34dad1435095d6e"
        },
        "date": 1680020223835,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 70869832.28571428,
            "unit": "ns",
            "range": "± 291597.5305866286"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 195317095.42857143,
            "unit": "ns",
            "range": "± 6337312.486415837"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "58041f200ce16b3f768f12e688189bbdd1c4d916",
          "message": "Bump actions/checkout from 2 to 3 (#289)\n\nBumps [actions/checkout](https://github.com/actions/checkout) from 2 to 3.\r\n- [Release notes](https://github.com/actions/checkout/releases)\r\n- [Changelog](https://github.com/actions/checkout/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/actions/checkout/compare/v2...v3)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: actions/checkout\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-major\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-03-28T10:16:43-07:00",
          "tree_id": "e8b88eea82d9ab3de38611b9c3fbd2310f740530",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/58041f200ce16b3f768f12e688189bbdd1c4d916"
        },
        "date": 1680023885416,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 133345958.26666667,
            "unit": "ns",
            "range": "± 200362.54784495983"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 379102217.90909094,
            "unit": "ns",
            "range": "± 9107940.451201143"
          }
        ]
      }
    ]
  }
}