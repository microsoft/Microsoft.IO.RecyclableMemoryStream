window.BENCHMARK_DATA = {
  "lastUpdate": 1724344349591,
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
          "id": "0f1d8590b987a69101e5c74785b5c62f1eb81f4a",
          "message": "Enable nullable annotations and warnings (#274)\n\n* Enable nullable annotations and warnings\r\n\r\nResolves #254\r\n\r\n* Annotate remaining tag parameters\r\n\r\n---------\r\n\r\nCo-authored-by: lechu445 <xxx@example.com>",
          "timestamp": "2023-03-30T09:29:48-07:00",
          "tree_id": "aa670708f31c78ad8a6581b774e8eaeaccb7c685",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/0f1d8590b987a69101e5c74785b5c62f1eb81f4a"
        },
        "date": 1680193869828,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 156811725.1860465,
            "unit": "ns",
            "range": "± 5788981.723887204"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 428776469.05128205,
            "unit": "ns",
            "range": "± 15008337.188845173"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "470455+paulomorgado@users.noreply.github.com",
            "name": "Paulo Morgado",
            "username": "paulomorgado"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "482acea112007d6d6bf3a96a3e693c64bb4541bd",
          "message": "Add suport policy (#291)",
          "timestamp": "2023-04-06T09:57:00-07:00",
          "tree_id": "34f765025ddc80742ec9626afd738f87f233f21f",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/482acea112007d6d6bf3a96a3e693c64bb4541bd"
        },
        "date": 1680800281904,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 73451506.28571428,
            "unit": "ns",
            "range": "± 396571.54321963695"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 198001904.7647059,
            "unit": "ns",
            "range": "± 5840282.047850196"
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
          "id": "df68bd349c97bb7bc20c02d99b2139aa09b04687",
          "message": "Change RecylableMemoryStreamManager.GetStream to return RecylableMemoryStream (#281)\n\nresolves #165\r\n\r\nCo-authored-by: lechu445 <xxx@example.com>",
          "timestamp": "2023-04-06T13:00:15-07:00",
          "tree_id": "0202b1954da4fce1f99ed1cc6927db328b01cdf9",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/df68bd349c97bb7bc20c02d99b2139aa09b04687"
        },
        "date": 1680811276188,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 74103445.8,
            "unit": "ns",
            "range": "± 593373.7072652805"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 202109189.83333334,
            "unit": "ns",
            "range": "± 5151257.251376706"
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
          "id": "685333cddbbe033a55a79c45765fb739ebaf6de6",
          "message": "Bump Microsoft.NET.Test.Sdk from 17.5.0 to 17.6.0 in /UnitTests (#296)\n\nBumps [Microsoft.NET.Test.Sdk](https://github.com/microsoft/vstest) from 17.5.0 to 17.6.0.\r\n- [Release notes](https://github.com/microsoft/vstest/releases)\r\n- [Changelog](https://github.com/microsoft/vstest/blob/main/docs/releases.md)\r\n- [Commits](https://github.com/microsoft/vstest/compare/v17.5.0...v17.6.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: Microsoft.NET.Test.Sdk\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-05-18T14:25:28-07:00",
          "tree_id": "876971b6b6e3b912c597d4eb53750f9147ac022a",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/685333cddbbe033a55a79c45765fb739ebaf6de6"
        },
        "date": 1684445205837,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 189408100.92307693,
            "unit": "ns",
            "range": "± 3101316.797146078"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 468530251.4583333,
            "unit": "ns",
            "range": "± 11581530.366066061"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "48418168+lklein53@users.noreply.github.com",
            "name": "lklein53",
            "username": "lklein53"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "841e73dbc34d3e0bd6beea15393275e06cb88a74",
          "message": "Add possibility to zero out memory before returning it to the pool (#270)\n\n* Add possibility to zero out memory before returning it to the pool\r\n\r\n* Zero initialize buffers if ZeroOutBuffer is set\r\n\r\n* Update README\r\n\r\n* Add test cases for ZeroOutBuffer functionality\r\n\r\n* fixup! Add possibility to zero out memory before returning it to the pool\r\n\r\n* Skip VeryLarge stream tests if ZeroOutBuffer is on\r\n\r\nIncreased memory requirement made the tests fail on the current Gitlab\r\nrunner hardware.",
          "timestamp": "2023-06-08T10:10:54-07:00",
          "tree_id": "034c07fe66ce41e175141f86045443f884643a9e",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/841e73dbc34d3e0bd6beea15393275e06cb88a74"
        },
        "date": 1686244323717,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 199847711.52941176,
            "unit": "ns",
            "range": "± 3913156.1159513257"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 511024145.75,
            "unit": "ns",
            "range": "± 9311723.011227258"
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
          "id": "9082bec9a29f122af17ebef674b553b46b9f2598",
          "message": "Bump NUnit3TestAdapter from 4.4.2 to 4.5.0 in /UnitTests (#298)\n\nBumps [NUnit3TestAdapter](https://github.com/nunit/nunit3-vs-adapter) from 4.4.2 to 4.5.0.\r\n- [Release notes](https://github.com/nunit/nunit3-vs-adapter/releases)\r\n- [Commits](https://github.com/nunit/nunit3-vs-adapter/compare/V4.4.2...V4.5.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: NUnit3TestAdapter\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-08T10:11:43-07:00",
          "tree_id": "fbc298e8e01999dab07e085b7c4446a5052d4ce5",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/9082bec9a29f122af17ebef674b553b46b9f2598"
        },
        "date": 1686244395591,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 171700072.41666666,
            "unit": "ns",
            "range": "± 4365338.9090462215"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 427466111.37333333,
            "unit": "ns",
            "range": "± 21423211.948783793"
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
          "id": "aa237cd19a6cb398117b27ba4a7b9e2b421cae88",
          "message": "Bump Microsoft.NET.Test.Sdk from 17.6.0 to 17.6.2 in /UnitTests (#300)\n\nBumps [Microsoft.NET.Test.Sdk](https://github.com/microsoft/vstest) from 17.6.0 to 17.6.2.\r\n- [Release notes](https://github.com/microsoft/vstest/releases)\r\n- [Changelog](https://github.com/microsoft/vstest/blob/main/docs/releases.md)\r\n- [Commits](https://github.com/microsoft/vstest/compare/v17.6.0...v17.6.2)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: Microsoft.NET.Test.Sdk\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-08T10:19:33-07:00",
          "tree_id": "00a930f986afb8d312128652dcebfb4f746c9ea2",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/aa237cd19a6cb398117b27ba4a7b9e2b421cae88"
        },
        "date": 1686244838963,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 135788685.07142857,
            "unit": "ns",
            "range": "± 100071.33412295626"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 387743114.6363636,
            "unit": "ns",
            "range": "± 9490246.521077584"
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
          "id": "ba4ace7df774bf677e174c9fae57a99e1c6c2a4d",
          "message": "Bump Microsoft.NET.Test.Sdk from 17.6.3 to 17.7.1 in /UnitTests (#303)\n\nBumps [Microsoft.NET.Test.Sdk](https://github.com/microsoft/vstest) from 17.6.3 to 17.7.1.\r\n- [Release notes](https://github.com/microsoft/vstest/releases)\r\n- [Changelog](https://github.com/microsoft/vstest/blob/main/docs/releases.md)\r\n- [Commits](https://github.com/microsoft/vstest/compare/v17.6.3...v17.7.1)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: Microsoft.NET.Test.Sdk\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-08-17T10:16:24-07:00",
          "tree_id": "5e333479a36f59809f9490f98ae1ee0f82ec1fdf",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/ba4ace7df774bf677e174c9fae57a99e1c6c2a4d"
        },
        "date": 1692292648227,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 135896855.7142857,
            "unit": "ns",
            "range": "± 350072.6514351488"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 385223786.6666667,
            "unit": "ns",
            "range": "± 9876098.592965437"
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
          "id": "3b3562171c13679fad5c64c74eccd3be89f34ef6",
          "message": "Bump Microsoft.NET.Test.Sdk from 17.7.1 to 17.7.2 in /UnitTests (#304)\n\nBumps [Microsoft.NET.Test.Sdk](https://github.com/microsoft/vstest) from 17.7.1 to 17.7.2.\r\n- [Release notes](https://github.com/microsoft/vstest/releases)\r\n- [Changelog](https://github.com/microsoft/vstest/blob/main/docs/releases.md)\r\n- [Commits](https://github.com/microsoft/vstest/compare/v17.7.1...v17.7.2)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: Microsoft.NET.Test.Sdk\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-08-31T09:29:53-07:00",
          "tree_id": "ae76ae9e2e0ef5297fc7558553744b580253c826",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/3b3562171c13679fad5c64c74eccd3be89f34ef6"
        },
        "date": 1693499453265,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 72537906.8,
            "unit": "ns",
            "range": "± 300622.45720343076"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 204489533.12121212,
            "unit": "ns",
            "range": "± 9617752.32509825"
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
          "id": "298da03c1fbaaee1948565b8aa060b59ce488515",
          "message": "Bump actions/checkout from 3 to 4 (#305)\n\nBumps [actions/checkout](https://github.com/actions/checkout) from 3 to 4.\r\n- [Release notes](https://github.com/actions/checkout/releases)\r\n- [Changelog](https://github.com/actions/checkout/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/actions/checkout/compare/v3...v4)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: actions/checkout\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-major\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-09-21T09:54:24-07:00",
          "tree_id": "14db6922ad3cb549d800fff85fc88b4f9298919a",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/298da03c1fbaaee1948565b8aa060b59ce488515"
        },
        "date": 1695315331224,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 135352464,
            "unit": "ns",
            "range": "± 146475.22270482668"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 388904478.88,
            "unit": "ns",
            "range": "± 10249763.52730999"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kerams@users.noreply.github.com",
            "name": "kerams",
            "username": "kerams"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8356bf5bfb79c91a4ddd3c3f3afc51b952e5fff2",
          "message": "Remove empty array instance (#306)",
          "timestamp": "2023-09-21T10:03:38-07:00",
          "tree_id": "953067bce216ef4ed808aeac0675b97b8d362747",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/8356bf5bfb79c91a4ddd3c3f3afc51b952e5fff2"
        },
        "date": 1695315883142,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 71114464,
            "unit": "ns",
            "range": "± 437420.23376741825"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 196296434.1395349,
            "unit": "ns",
            "range": "± 7217182.69733879"
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
          "id": "54f23c1b19cdacf52cf1f366f77a2919ae56a759",
          "message": "Bump Microsoft.NET.Test.Sdk from 17.7.2 to 17.8.0 in /UnitTests (#309)\n\nBumps [Microsoft.NET.Test.Sdk](https://github.com/microsoft/vstest) from 17.7.2 to 17.8.0.\r\n- [Release notes](https://github.com/microsoft/vstest/releases)\r\n- [Changelog](https://github.com/microsoft/vstest/blob/main/docs/releases.md)\r\n- [Commits](https://github.com/microsoft/vstest/compare/v17.7.2...v17.8.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: Microsoft.NET.Test.Sdk\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-11-14T13:13:26-08:00",
          "tree_id": "1abca28edb25fb0f67e80d19b3aaf1eaf13720c2",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/54f23c1b19cdacf52cf1f366f77a2919ae56a759"
        },
        "date": 1699996461755,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 71701274.75,
            "unit": "ns",
            "range": "± 285750.2831062385"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 145859077.35714287,
            "unit": "ns",
            "range": "± 7087101.459732405"
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
          "id": "9675dc4ec362abc4ebc8f95f8dc5eb2ccb7219ef",
          "message": "Bump nunit from 3.13.3 to 3.14.0 in /UnitTests (#308)\n\nBumps [nunit](https://github.com/nunit/nunit) from 3.13.3 to 3.14.0.\r\n- [Release notes](https://github.com/nunit/nunit/releases)\r\n- [Changelog](https://github.com/nunit/nunit/blob/master/CHANGES.md)\r\n- [Commits](https://github.com/nunit/nunit/compare/v3.13.3...v3.14.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: nunit\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-11-14T13:13:49-08:00",
          "tree_id": "c63d90a4874f0322272b1de3c92c17f8b6f5fd0c",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/9675dc4ec362abc4ebc8f95f8dc5eb2ccb7219ef"
        },
        "date": 1699996485561,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 71924215.91666667,
            "unit": "ns",
            "range": "± 552682.7315254629"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 146509206.74626866,
            "unit": "ns",
            "range": "± 6930144.992772065"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benmwatson@users.noreply.github.com",
            "name": "Ben",
            "username": "benmwatson"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ebc9cdac3bf22fa63895e9349c06656082ba5850",
          "message": "Update RMS to version 3.0.0, remove obsolete .NET targets, update package dependency versions (#310)\n\n* Update RMS to version 3.0.0, remove obsolete .NET versions, update package dependencies\r\n\r\n* Update assembly version info to 3.0.0.0\r\n\r\n---------\r\n\r\nCo-authored-by: Ben Watson <bewatson@microsoft.com>",
          "timestamp": "2023-11-20T10:59:15-08:00",
          "tree_id": "0f1e3ee00a2a56ae5c6af6d5d689c0a45a7db97e",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/ebc9cdac3bf22fa63895e9349c06656082ba5850"
        },
        "date": 1700506822776,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 71706760.6923077,
            "unit": "ns",
            "range": "± 278143.9047116272"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 150578739.66393444,
            "unit": "ns",
            "range": "± 6783087.694592712"
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
          "id": "fccb18cee90063dee5dff3bbf7e0640d75316952",
          "message": "Bump Microsoft.SourceLink.GitHub from 1.1.1 to 8.0.0 in /src (#311)\n\nBumps [Microsoft.SourceLink.GitHub](https://github.com/dotnet/sourcelink) from 1.1.1 to 8.0.0.\r\n- [Release notes](https://github.com/dotnet/sourcelink/releases)\r\n- [Commits](https://github.com/dotnet/sourcelink/commits)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: Microsoft.SourceLink.GitHub\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-major\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-11-20T11:44:37-08:00",
          "tree_id": "010d3dceb3a70cb0c83abc01849dfaf0ca161413",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/fccb18cee90063dee5dff3bbf7e0640d75316952"
        },
        "date": 1700509539750,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 69104180.42857143,
            "unit": "ns",
            "range": "± 126304.04951450978"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 151367958.37096775,
            "unit": "ns",
            "range": "± 6889781.088785005"
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
          "id": "f78ff2c7ea9719d1569e274bb79834d7ac8bf4b0",
          "message": "Bump Microsoft.SourceLink.GitHub from 1.1.1 to 8.0.0 in /UnitTests (#312)\n\nBumps [Microsoft.SourceLink.GitHub](https://github.com/dotnet/sourcelink) from 1.1.1 to 8.0.0.\r\n- [Release notes](https://github.com/dotnet/sourcelink/releases)\r\n- [Commits](https://github.com/dotnet/sourcelink/commits)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: Microsoft.SourceLink.GitHub\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-major\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-11-20T11:45:02-08:00",
          "tree_id": "010d3dceb3a70cb0c83abc01849dfaf0ca161413",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/f78ff2c7ea9719d1569e274bb79834d7ac8bf4b0"
        },
        "date": 1700509561418,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 69407024.35714285,
            "unit": "ns",
            "range": "± 163450.15486726182"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 151259715.6451613,
            "unit": "ns",
            "range": "± 6817090.601026656"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benmwatson@users.noreply.github.com",
            "name": "Ben",
            "username": "benmwatson"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9995e7d983ea55b2fd19f6ec19b4d97fb82001f5",
          "message": "Introduce an Options class for managing RMSManager settings (#315)\n\n* Introduce an Options struct for managing RMSManager settings. Mostly just refactoring existing code. Improve code coverage for some areas.\r\n\r\n* Make options readonly\r\n\r\n* Change Options to a class\r\n\r\n---------\r\n\r\nCo-authored-by: Ben Watson <bewatson@microsoft.com>",
          "timestamp": "2023-11-29T08:58:27-08:00",
          "tree_id": "553fbb2ce8b176efab806b55cce02b9af64fbbff",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/9995e7d983ea55b2fd19f6ec19b4d97fb82001f5"
        },
        "date": 1701277174844,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 86450517.71428572,
            "unit": "ns",
            "range": "± 129898.08150722721"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 156615635.3559322,
            "unit": "ns",
            "range": "± 6924344.554362256"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benmwatson@users.noreply.github.com",
            "name": "Ben",
            "username": "benmwatson"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6e154ddedb4971ac718efff86caf934beab021d5",
          "message": "Code cleanup + NUnit4 (#317)\n\n* Fit & Finish. Use latest syntax, fix spelling, update to NUnit4 (with accompanying assert style changes)\r\n\r\n* Update documentation\r\n\r\n* Update SDK to v8.0.100\r\n\r\n* Update SDK in global.json\r\n\r\n* Remove unnecessary casts\r\n\r\n---------\r\n\r\nCo-authored-by: Ben Watson <bewatson@microsoft.com>",
          "timestamp": "2023-12-06T09:49:29-08:00",
          "tree_id": "23223a132da5a1bf93c24fe04facbf04f2ef884e",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/6e154ddedb4971ac718efff86caf934beab021d5"
        },
        "date": 1701885036329,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 88800746.16666667,
            "unit": "ns",
            "range": "± 172159.3138207692"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 156248364.85,
            "unit": "ns",
            "range": "± 6965592.667966163"
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
          "id": "de1bb71942a7de6a794a128cd957e6203d791ecb",
          "message": "Bump nunit from 3.14.0 to 4.0.1 in /UnitTests (#318)\n\nBumps [nunit](https://github.com/nunit/nunit) from 3.14.0 to 4.0.1.\r\n- [Release notes](https://github.com/nunit/nunit/releases)\r\n- [Changelog](https://github.com/nunit/nunit/blob/master/CHANGES.md)\r\n- [Commits](https://github.com/nunit/nunit/compare/v3.14.0...v4.0.1)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: nunit\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-major\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-12-06T09:59:44-08:00",
          "tree_id": "babd90186f9fa0edfa33188f4e67fc9feeac49e8",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/de1bb71942a7de6a794a128cd957e6203d791ecb"
        },
        "date": 1701885642117,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 88769714.07142857,
            "unit": "ns",
            "range": "± 59298.89643118196"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 157143852.2761194,
            "unit": "ns",
            "range": "± 7438125.576942604"
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
          "id": "2dbbc0713628c2a7963a04cb92b420024445e81c",
          "message": "Bump actions/setup-dotnet from 3 to 4 (#319)\n\nBumps [actions/setup-dotnet](https://github.com/actions/setup-dotnet) from 3 to 4.\r\n- [Release notes](https://github.com/actions/setup-dotnet/releases)\r\n- [Commits](https://github.com/actions/setup-dotnet/compare/v3...v4)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: actions/setup-dotnet\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-major\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-12-11T13:02:16-08:00",
          "tree_id": "bc94a6d5213b4076ef2e45b6131252ed3f2c3ef4",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/2dbbc0713628c2a7963a04cb92b420024445e81c"
        },
        "date": 1702328590884,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 88978007.64285715,
            "unit": "ns",
            "range": "± 129009.0594091433"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 157237538.25,
            "unit": "ns",
            "range": "± 7259021.13706497"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benmwatson@users.noreply.github.com",
            "name": "Ben",
            "username": "benmwatson"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3ce325224eee6f727beab3c3f64b03102bdb63e2",
          "message": "Fix spurious path (#320)\n\nCo-authored-by: Ben Watson <bewatson@microsoft.com>",
          "timestamp": "2023-12-11T15:49:09-08:00",
          "tree_id": "e71babb71e4df7072dbefcf6a0b3645679112812",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/3ce325224eee6f727beab3c3f64b03102bdb63e2"
        },
        "date": 1702338602804,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 89013346.42857143,
            "unit": "ns",
            "range": "± 105906.93530386027"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 158951091.6625,
            "unit": "ns",
            "range": "± 8272666.54748404"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benmwatson@users.noreply.github.com",
            "name": "Ben",
            "username": "benmwatson"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8e05fcc339943bfacbfccf0a4a15505284dc838e",
          "message": "Update readme, changes list, and add a project containing the readme examples for future updates. (#321)\n\nCo-authored-by: Ben Watson <bewatson@microsoft.com>",
          "timestamp": "2023-12-12T13:34:10-08:00",
          "tree_id": "b4592acadc65d7b17cbbc1a9413685a747d9ae95",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/8e05fcc339943bfacbfccf0a4a15505284dc838e"
        },
        "date": 1702416910158,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 89509008.57142857,
            "unit": "ns",
            "range": "± 110516.65973784174"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 156388377.44262296,
            "unit": "ns",
            "range": "± 7014375.0024385555"
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
          "id": "018e5c620fe1397e95499b775b428c147053ee54",
          "message": "Bump github/codeql-action from 2 to 3 (#322)\n\nBumps [github/codeql-action](https://github.com/github/codeql-action) from 2 to 3.\r\n- [Release notes](https://github.com/github/codeql-action/releases)\r\n- [Changelog](https://github.com/github/codeql-action/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/github/codeql-action/compare/v2...v3)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: github/codeql-action\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-major\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-04T10:47:14-08:00",
          "tree_id": "c72ef9384d2f9c1c992b3528e33a87a7299be19f",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/018e5c620fe1397e95499b775b428c147053ee54"
        },
        "date": 1704394093353,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 89259690.53333333,
            "unit": "ns",
            "range": "± 321143.8086498381"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 160788535.58235294,
            "unit": "ns",
            "range": "± 8636400.646710357"
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
          "id": "81c37b5a4b21084acd77fadcd2539dddcec04d55",
          "message": "Bump actions/upload-artifact from 3 to 4 (#323)\n\nBumps [actions/upload-artifact](https://github.com/actions/upload-artifact) from 3 to 4.\r\n- [Release notes](https://github.com/actions/upload-artifact/releases)\r\n- [Commits](https://github.com/actions/upload-artifact/compare/v3...v4)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: actions/upload-artifact\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-major\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-04T10:46:50-08:00",
          "tree_id": "41a0816c8791e3e8a2f21256bdb29e9a2ce6b32b",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/81c37b5a4b21084acd77fadcd2539dddcec04d55"
        },
        "date": 1704394163083,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 86350581.78571428,
            "unit": "ns",
            "range": "± 73984.44510782039"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 156345713.47457626,
            "unit": "ns",
            "range": "± 6868596.830335762"
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
          "id": "d7acbe973b6c0d259654bc57318b00fc955bf8f7",
          "message": "Bump NUnit.Analyzers from 3.10.0 to 4.0.0 in /UnitTests (#327)\n\nBumps [NUnit.Analyzers](https://github.com/nunit/nunit.analyzers) from 3.10.0 to 4.0.0.\r\n- [Release notes](https://github.com/nunit/nunit.analyzers/releases)\r\n- [Changelog](https://github.com/nunit/nunit.analyzers/blob/master/CHANGES.txt)\r\n- [Commits](https://github.com/nunit/nunit.analyzers/compare/3.10.0...4.0.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: NUnit.Analyzers\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-major\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-30T10:03:46-08:00",
          "tree_id": "f83d9d892199c8cf3d222e5b8ed45cff249d0df8",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/d7acbe973b6c0d259654bc57318b00fc955bf8f7"
        },
        "date": 1706637887398,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 89429082.5,
            "unit": "ns",
            "range": "± 220161.3336704959"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 156759621.02307692,
            "unit": "ns",
            "range": "± 7315043.1912262365"
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
          "id": "d61325ad4fae3cd8602b3669f6bf3209231b4819",
          "message": "Bump NUnit.Analyzers from 4.0.0 to 4.0.1 in /UnitTests (#329)\n\nBumps [NUnit.Analyzers](https://github.com/nunit/nunit.analyzers) from 4.0.0 to 4.0.1.\r\n- [Release notes](https://github.com/nunit/nunit.analyzers/releases)\r\n- [Changelog](https://github.com/nunit/nunit.analyzers/blob/master/CHANGES.txt)\r\n- [Commits](https://github.com/nunit/nunit.analyzers/compare/4.0.0...4.0.1)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: NUnit.Analyzers\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-08T09:55:37-08:00",
          "tree_id": "f6a8f4e874b51163761d4ade22b5efca86667bed",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/d61325ad4fae3cd8602b3669f6bf3209231b4819"
        },
        "date": 1707415001160,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 88772131.26666667,
            "unit": "ns",
            "range": "± 156453.69624701227"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 155499860.4,
            "unit": "ns",
            "range": "± 7213221.582222223"
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
          "id": "6a2bb1f1d0a807818e3c1e5f0a6039bbcc515e42",
          "message": "Bump Microsoft.NET.Test.Sdk from 17.8.0 to 17.9.0 in /UnitTests (#331)\n\nBumps [Microsoft.NET.Test.Sdk](https://github.com/microsoft/vstest) from 17.8.0 to 17.9.0.\r\n- [Release notes](https://github.com/microsoft/vstest/releases)\r\n- [Changelog](https://github.com/microsoft/vstest/blob/main/docs/releases.md)\r\n- [Commits](https://github.com/microsoft/vstest/compare/v17.8.0...v17.9.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: Microsoft.NET.Test.Sdk\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-08T10:04:29-08:00",
          "tree_id": "b08766d4fabe3e4e56cacd06a8e2ee9d71915a92",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/6a2bb1f1d0a807818e3c1e5f0a6039bbcc515e42"
        },
        "date": 1707415530366,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 88820546.96666667,
            "unit": "ns",
            "range": "± 108162.79007117444"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 156584735.16101694,
            "unit": "ns",
            "range": "± 6867499.555421942"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benmwatson@users.noreply.github.com",
            "name": "Ben",
            "username": "benmwatson"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "27782968eef0bd85b984e1956ff3edfb03dd3008",
          "message": "Remove obsolete documentation (#332)\n\n* Delete obsolete docs\r\n\r\n* Update generatedocs.cmd to clean out docs folder before regenerating\r\n\r\n---------\r\n\r\nCo-authored-by: Ben Watson <bewatson@microsoft.com>",
          "timestamp": "2024-02-08T10:44:29-08:00",
          "tree_id": "a98c4d257f635052944e988731fc0bdf7e0a105b",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/27782968eef0bd85b984e1956ff3edfb03dd3008"
        },
        "date": 1707417939872,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 91723747.28571428,
            "unit": "ns",
            "range": "± 817334.1780675835"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 156698405.52173913,
            "unit": "ns",
            "range": "± 7524410.508524775"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benmwatson@users.noreply.github.com",
            "name": "Ben",
            "username": "benmwatson"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d6b2b0907d04d6ba6e3481f74424f1e05aec64c",
          "message": "Add correct permissions to code-ql workflow (#333)\n\n* Add read-all permissions to code-ql workflow\r\n\r\n* Set permissions to recommended values for codeql\r\n\r\n---------\r\n\r\nCo-authored-by: Ben Watson <bewatson@microsoft.com>",
          "timestamp": "2024-02-08T11:16:45-08:00",
          "tree_id": "fbc5d89e6ef59119a684c1ed0930d9f8968073ca",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/3d6b2b0907d04d6ba6e3481f74424f1e05aec64c"
        },
        "date": 1707420009924,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 88079808.33333333,
            "unit": "ns",
            "range": "± 136338.33031242885"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 177120669.1868687,
            "unit": "ns",
            "range": "± 15774303.180366345"
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
          "id": "5e7b845b64060473491313febff16941580fdcba",
          "message": "Bump nunit from 4.0.1 to 4.1.0 in /UnitTests (#335)\n\nBumps [nunit](https://github.com/nunit/nunit) from 4.0.1 to 4.1.0.\r\n- [Release notes](https://github.com/nunit/nunit/releases)\r\n- [Changelog](https://github.com/nunit/nunit/blob/master/CHANGES.md)\r\n- [Commits](https://github.com/nunit/nunit/compare/v4.0.1...4.1.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: nunit\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-26T09:57:23-08:00",
          "tree_id": "943b52b3a32600d6650d0c28e53a31b2622457ac",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/5e7b845b64060473491313febff16941580fdcba"
        },
        "date": 1708970307340,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 88229360.16666667,
            "unit": "ns",
            "range": "± 652524.1665343752"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 163178667.9939759,
            "unit": "ns",
            "range": "± 8684346.789279925"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sungam3r@yandex.ru",
            "name": "Ivan Maximov",
            "username": "sungam3r"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "93628852a6b5775d812e986c613e3840e824ae58",
          "message": "Code cleanup (#325)\n\n* Code cleanup\r\n\r\n* spelling\r\n\r\n* codeql format\r\n\r\n* change conventions\r\n\r\n* spaces\r\n\r\n* Add this\r\n\r\n* events",
          "timestamp": "2024-02-26T10:01:52-08:00",
          "tree_id": "ce59b68d99a7f311348e2477d71ea469358aa676",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/93628852a6b5775d812e986c613e3840e824ae58"
        },
        "date": 1708970567023,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 58139735.7,
            "unit": "ns",
            "range": "± 284451.6809430281"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 125358369.75581396,
            "unit": "ns",
            "range": "± 6810126.755832794"
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
          "id": "d5d69d8c921aded24edcf9f4037d0514082fe811",
          "message": "Bump NUnit.Analyzers from 4.0.1 to 4.1.0 in /UnitTests (#337)\n\nBumps [NUnit.Analyzers](https://github.com/nunit/nunit.analyzers) from 4.0.1 to 4.1.0.\r\n- [Release notes](https://github.com/nunit/nunit.analyzers/releases)\r\n- [Changelog](https://github.com/nunit/nunit.analyzers/blob/master/CHANGES.txt)\r\n- [Commits](https://github.com/nunit/nunit.analyzers/compare/4.0.1...4.1.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: NUnit.Analyzers\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-18T12:45:10-07:00",
          "tree_id": "6ceac42330df8798cf8ff9b0a2a53888c42ac3b8",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/d5d69d8c921aded24edcf9f4037d0514082fe811"
        },
        "date": 1710791171849,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 59982514.07692308,
            "unit": "ns",
            "range": "± 321620.54433277465"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 126715097.98888889,
            "unit": "ns",
            "range": "± 7042617.027032123"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andre.postiga@msn.com",
            "name": "Andre Felipe Brasil Postiga",
            "username": "AndrePostiga"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe17175ce894f5974a90990b64d14fe6f6ac5734",
          "message": "Add important note to avoid memory leak by wrong usage of the lib (#338)\n\n* Add important note to avoid memory leak by wrong usage of the lib\r\n\r\n* fix: sentence with double dots",
          "timestamp": "2024-03-21T11:04:56-07:00",
          "tree_id": "b66d657b1b02e3e896015cc3f9ff094107177e66",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/fe17175ce894f5974a90990b64d14fe6f6ac5734"
        },
        "date": 1711044384454,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 58234810.307692304,
            "unit": "ns",
            "range": "± 217469.46626227195"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 127991506.86170213,
            "unit": "ns",
            "range": "± 7270319.787490661"
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
          "id": "31978c7ee7701424ecbbcc9fa52a1bc88185ee74",
          "message": "Bump NUnit.Analyzers from 4.1.0 to 4.2.0 in /UnitTests (#341)\n\nBumps [NUnit.Analyzers](https://github.com/nunit/nunit.analyzers) from 4.1.0 to 4.2.0.\r\n- [Release notes](https://github.com/nunit/nunit.analyzers/releases)\r\n- [Changelog](https://github.com/nunit/nunit.analyzers/blob/master/CHANGES.md)\r\n- [Commits](https://github.com/nunit/nunit.analyzers/compare/4.1.0...4.2.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: NUnit.Analyzers\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-04-25T14:34:06-07:00",
          "tree_id": "331c3dff678903208e71965550487a3306d71520",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/31978c7ee7701424ecbbcc9fa52a1bc88185ee74"
        },
        "date": 1714080905892,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 58160066.461538464,
            "unit": "ns",
            "range": "± 293620.5699931504"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 126700756.65,
            "unit": "ns",
            "range": "± 7646708.945075561"
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
          "id": "5c59e931d1d41d7e43356826d568b691fe67b581",
          "message": "Bump Microsoft.NET.Test.Sdk from 17.9.0 to 17.10.0 in /UnitTests (#343)\n\nBumps [Microsoft.NET.Test.Sdk](https://github.com/microsoft/vstest) from 17.9.0 to 17.10.0.\r\n- [Release notes](https://github.com/microsoft/vstest/releases)\r\n- [Changelog](https://github.com/microsoft/vstest/blob/main/docs/releases.md)\r\n- [Commits](https://github.com/microsoft/vstest/compare/v17.9.0...v17.10.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: Microsoft.NET.Test.Sdk\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-05-23T08:36:27-07:00",
          "tree_id": "c36d7bf7acc7e0a0806044b5f734021a2b5a926b",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/5c59e931d1d41d7e43356826d568b691fe67b581"
        },
        "date": 1716478653545,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 58367028.28571428,
            "unit": "ns",
            "range": "± 512524.3170860554"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 126301809.98314607,
            "unit": "ns",
            "range": "± 6990232.713537535"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benmwatson@users.noreply.github.com",
            "name": "Ben",
            "username": "benmwatson"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7a74201d071e5ea993e0379ba8885615fe8c0850",
          "message": "Resolving infinite loop with buffers longer than MaxArrayLength (#345)\n\n* Fix Issue 344 by resolving infinite loop with buffers longer than MaxArrayLength.\r\n\r\n* Remove unnecessary documentation (design changed)\r\n\r\n---------\r\n\r\nCo-authored-by: Ben Watson <bewatson@microsoft.com>",
          "timestamp": "2024-06-11T08:57:53-07:00",
          "tree_id": "d52a6f7098cf4c97b62be627a9c1dd5277d4f159",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/7a74201d071e5ea993e0379ba8885615fe8c0850"
        },
        "date": 1718121535424,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 57904438.928571425,
            "unit": "ns",
            "range": "± 825435.3787321493"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 126582095.74157304,
            "unit": "ns",
            "range": "± 7011895.511010465"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bewatson@microsoft.com",
            "name": "Ben Watson"
          },
          "committer": {
            "email": "bewatson@microsoft.com",
            "name": "Ben Watson"
          },
          "distinct": true,
          "id": "e4a19b7c62b2fae3df24a3dab4ef6fe5b26c5f71",
          "message": "Update version for 3.0.1 release",
          "timestamp": "2024-06-11T13:13:28-07:00",
          "tree_id": "05ab4e12b5f81c3231afb779c7882c0e108b4783",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/e4a19b7c62b2fae3df24a3dab4ef6fe5b26c5f71"
        },
        "date": 1718136870710,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 58176523,
            "unit": "ns",
            "range": "± 199316.80871130046"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 128352730.44680852,
            "unit": "ns",
            "range": "± 7320737.3470066665"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bewatson@microsoft.com",
            "name": "Ben Watson"
          },
          "committer": {
            "email": "bewatson@microsoft.com",
            "name": "Ben Watson"
          },
          "distinct": true,
          "id": "e29a28387da9018fa9605a1dcb3f7a0435aa9974",
          "message": "fix typo in CHANGES.md",
          "timestamp": "2024-06-11T13:15:47-07:00",
          "tree_id": "f1a61796d194d85ed646abafd8cbe5f0cbc97577",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/e29a28387da9018fa9605a1dcb3f7a0435aa9974"
        },
        "date": 1718137020025,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 58211118.928571425,
            "unit": "ns",
            "range": "± 216132.30492934512"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 126922585.33333333,
            "unit": "ns",
            "range": "± 7038710.898951693"
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
          "id": "31012b5668657ca50d0ca4efc33d3f908f488359",
          "message": "Bump NUnit3TestAdapter from 4.5.0 to 4.6.0 in /UnitTests (#347)\n\nBumps [NUnit3TestAdapter](https://github.com/nunit/nunit3-vs-adapter) from 4.5.0 to 4.6.0.\r\n- [Release notes](https://github.com/nunit/nunit3-vs-adapter/releases)\r\n- [Commits](https://github.com/nunit/nunit3-vs-adapter/compare/V4.5.0...V4.6.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: NUnit3TestAdapter\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-08-01T09:26:45-07:00",
          "tree_id": "1c603b5bf9841c4633fa6d180e29934812ce9339",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/31012b5668657ca50d0ca4efc33d3f908f488359"
        },
        "date": 1722529664541,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 58063619.692307696,
            "unit": "ns",
            "range": "± 198183.74418343222"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 126320212,
            "unit": "ns",
            "range": "± 6781045.3822866455"
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
          "id": "916723bfe33be5286937e4546e23af0f74a1db99",
          "message": "Bump NUnit.Analyzers from 4.2.0 to 4.3.0 in /UnitTests (#348)\n\nBumps [NUnit.Analyzers](https://github.com/nunit/nunit.analyzers) from 4.2.0 to 4.3.0.\r\n- [Release notes](https://github.com/nunit/nunit.analyzers/releases)\r\n- [Changelog](https://github.com/nunit/nunit.analyzers/blob/master/CHANGES.md)\r\n- [Commits](https://github.com/nunit/nunit.analyzers/compare/4.2.0...4.3.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: NUnit.Analyzers\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-08-12T09:22:53-07:00",
          "tree_id": "8f0d223a5faadd13ece0323132d807f24f81d0ee",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/916723bfe33be5286937e4546e23af0f74a1db99"
        },
        "date": 1723479829641,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 58274868.5,
            "unit": "ns",
            "range": "± 187677.7965614309"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 130977071.69,
            "unit": "ns",
            "range": "± 8904761.707470417"
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
          "id": "c58d8bfaa83e705d3acf33730602bb9a470f0256",
          "message": "Bump Microsoft.NET.Test.Sdk from 17.10.0 to 17.11.0 in /UnitTests (#350)\n\nBumps [Microsoft.NET.Test.Sdk](https://github.com/microsoft/vstest) from 17.10.0 to 17.11.0.\r\n- [Release notes](https://github.com/microsoft/vstest/releases)\r\n- [Changelog](https://github.com/microsoft/vstest/blob/main/docs/releases.md)\r\n- [Commits](https://github.com/microsoft/vstest/compare/v17.10.0...v17.11.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: Microsoft.NET.Test.Sdk\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-08-22T09:31:28-07:00",
          "tree_id": "77680ef7ad1eee7f18691303d6797f568fc82d3f",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/c58d8bfaa83e705d3acf33730602bb9a470f0256"
        },
        "date": 1724344348744,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 58005923.833333336,
            "unit": "ns",
            "range": "± 331264.51165488944"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 128881472.67,
            "unit": "ns",
            "range": "± 7641116.470584066"
          }
        ]
      }
    ]
  }
}