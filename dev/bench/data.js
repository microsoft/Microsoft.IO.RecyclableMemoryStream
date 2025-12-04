window.BENCHMARK_DATA = {
  "lastUpdate": 1764869724001,
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
          "id": "720182bfea6cd588b9031cd848422ac5893bf94d",
          "message": "Bump nunit from 4.1.0 to 4.2.1 in /UnitTests (#353)\n\nBumps [nunit](https://github.com/nunit/nunit) from 4.1.0 to 4.2.1.\r\n- [Release notes](https://github.com/nunit/nunit/releases)\r\n- [Changelog](https://github.com/nunit/nunit/blob/main/CHANGES.md)\r\n- [Commits](https://github.com/nunit/nunit/compare/4.1.0...4.2.1)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: nunit\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-08-29T09:37:38-07:00",
          "tree_id": "5b3d0fe318960ba218f1e3aa7cd8cab600e52d44",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/720182bfea6cd588b9031cd848422ac5893bf94d"
        },
        "date": 1724949518934,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 61004133.3,
            "unit": "ns",
            "range": "± 1081881.0214037402"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 127993350.79787233,
            "unit": "ns",
            "range": "± 7273651.180547166"
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
          "id": "f2375b87fce2a38a0cebe6e4c037bf78b705a03a",
          "message": "Bump nunit from 4.2.1 to 4.2.2 in /UnitTests (#354)\n\nBumps [nunit](https://github.com/nunit/nunit) from 4.2.1 to 4.2.2.\r\n- [Release notes](https://github.com/nunit/nunit/releases)\r\n- [Changelog](https://github.com/nunit/nunit/blob/main/CHANGES.md)\r\n- [Commits](https://github.com/nunit/nunit/compare/4.2.1...4.2.2)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: nunit\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-09-05T08:53:32-07:00",
          "tree_id": "3aa6567801e0eac9e50b701a33eeb31e262a92cf",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/f2375b87fce2a38a0cebe6e4c037bf78b705a03a"
        },
        "date": 1725551688748,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 60432300.854166664,
            "unit": "ns",
            "range": "± 2364007.92217997"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 126616320.47191012,
            "unit": "ns",
            "range": "± 6993654.596677054"
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
          "id": "5391f4cb873b58606f52d937bf37a2af90d36183",
          "message": "Bump Microsoft.NET.Test.Sdk from 17.11.0 to 17.11.1 in /UnitTests (#356)\n\nBumps [Microsoft.NET.Test.Sdk](https://github.com/microsoft/vstest) from 17.11.0 to 17.11.1.\r\n- [Release notes](https://github.com/microsoft/vstest/releases)\r\n- [Changelog](https://github.com/microsoft/vstest/blob/main/docs/releases.md)\r\n- [Commits](https://github.com/microsoft/vstest/compare/v17.11.0...v17.11.1)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: Microsoft.NET.Test.Sdk\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-09-12T09:55:49-07:00",
          "tree_id": "e90642bee47daa5e58fbed1aaa117e60d6e0eaa0",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/5391f4cb873b58606f52d937bf37a2af90d36183"
        },
        "date": 1726160211691,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 58202735.166666664,
            "unit": "ns",
            "range": "± 225777.7695526101"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 128378825.98,
            "unit": "ns",
            "range": "± 7573410.536461472"
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
          "id": "87cde402a80f59791ff3362d276b1d3a60525d06",
          "message": "Bump System.Memory from 4.5.5 to 4.6.0 in /UnitTests (#360)\n\nBumps [System.Memory](https://github.com/dotnet/maintenance-packages) from 4.5.5 to 4.6.0.\r\n- [Commits](https://github.com/dotnet/maintenance-packages/commits)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: System.Memory\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-11-26T10:20:15-08:00",
          "tree_id": "4e655daf6d7b41a33c8bc9f34ec5bd6ab5fada1f",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/87cde402a80f59791ff3362d276b1d3a60525d06"
        },
        "date": 1732645286912,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 58076305.03333333,
            "unit": "ns",
            "range": "± 152673.37902850306"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 128255935.47959183,
            "unit": "ns",
            "range": "± 7450007.127300789"
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
          "id": "98206fc7de217c6ee46eb210500b372c8d8b97d2",
          "message": "Bump System.Memory from 4.5.5 to 4.6.0 in /src (#361)\n\nBumps [System.Memory](https://github.com/dotnet/maintenance-packages) from 4.5.5 to 4.6.0.\r\n- [Commits](https://github.com/dotnet/maintenance-packages/commits)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: System.Memory\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-11-26T10:20:28-08:00",
          "tree_id": "4e655daf6d7b41a33c8bc9f34ec5bd6ab5fada1f",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/98206fc7de217c6ee46eb210500b372c8d8b97d2"
        },
        "date": 1732645287916,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 58442442.78571428,
            "unit": "ns",
            "range": "± 701543.7388644229"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 130683073.34,
            "unit": "ns",
            "range": "± 8499682.440979993"
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
          "id": "1c0c661bc88e335443b6702d34f3381356c37603",
          "message": "Bump NUnit.Analyzers from 4.3.0 to 4.4.0 in /UnitTests (#362)\n\nBumps [NUnit.Analyzers](https://github.com/nunit/nunit.analyzers) from 4.3.0 to 4.4.0.\r\n- [Release notes](https://github.com/nunit/nunit.analyzers/releases)\r\n- [Changelog](https://github.com/nunit/nunit.analyzers/blob/master/CHANGES.md)\r\n- [Commits](https://github.com/nunit/nunit.analyzers/compare/4.3.0...4.4.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: NUnit.Analyzers\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-11-26T10:20:49-08:00",
          "tree_id": "fccffc9a1ef5cc74e2a88f34841e0ae24fd5e6a3",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/1c0c661bc88e335443b6702d34f3381356c37603"
        },
        "date": 1732645327457,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 58370570.083333336,
            "unit": "ns",
            "range": "± 194170.23043638718"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 130539824.05555555,
            "unit": "ns",
            "range": "± 9036404.80621932"
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
          "id": "178b7c961d95927adad55df3cb31f4b09385df78",
          "message": "Bump Microsoft.NET.Test.Sdk from 17.11.1 to 17.12.0 in /UnitTests (#363)\n\nBumps [Microsoft.NET.Test.Sdk](https://github.com/microsoft/vstest) from 17.11.1 to 17.12.0.\r\n- [Release notes](https://github.com/microsoft/vstest/releases)\r\n- [Changelog](https://github.com/microsoft/vstest/blob/main/docs/releases.md)\r\n- [Commits](https://github.com/microsoft/vstest/compare/v17.11.1...v17.12.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: Microsoft.NET.Test.Sdk\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-11-27T10:33:13-08:00",
          "tree_id": "1c972a51ff6c6f3308923fd7f5170497dc046020",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/178b7c961d95927adad55df3cb31f4b09385df78"
        },
        "date": 1732732451152,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 58298799.28571428,
            "unit": "ns",
            "range": "± 338384.7480608719"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 126736785.13131313,
            "unit": "ns",
            "range": "± 7648482.84824724"
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
          "id": "0dae852f9ac5be987fc92312f5fb7ddb2af4a3a6",
          "message": "Bump nunit from 4.2.2 to 4.3.0 in /UnitTests (#364)\n\nBumps [nunit](https://github.com/nunit/nunit) from 4.2.2 to 4.3.0.\r\n- [Release notes](https://github.com/nunit/nunit/releases)\r\n- [Changelog](https://github.com/nunit/nunit/blob/main/CHANGES.md)\r\n- [Commits](https://github.com/nunit/nunit/compare/4.2.2...4.3.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: nunit\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-12-19T11:24:56-08:00",
          "tree_id": "2f68a239dd4d3e3b9dd5a20addd71eb9855dfc35",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/0dae852f9ac5be987fc92312f5fb7ddb2af4a3a6"
        },
        "date": 1734636356508,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 58285522,
            "unit": "ns",
            "range": "± 240455.9868586221"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 130823984.1,
            "unit": "ns",
            "range": "± 8837421.313493982"
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
          "id": "11b31c886c387de36020ae1e013892623f57cf81",
          "message": "Bump NUnit.Analyzers from 4.4.0 to 4.5.0 in /UnitTests (#366)\n\nBumps [NUnit.Analyzers](https://github.com/nunit/nunit.analyzers) from 4.4.0 to 4.5.0.\r\n- [Release notes](https://github.com/nunit/nunit.analyzers/releases)\r\n- [Changelog](https://github.com/nunit/nunit.analyzers/blob/master/CHANGES.md)\r\n- [Commits](https://github.com/nunit/nunit.analyzers/compare/4.4.0...4.5.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: NUnit.Analyzers\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-09T09:31:13-08:00",
          "tree_id": "4d5d77367f40a0c57f52759c9ad0ace233fc8661",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/11b31c886c387de36020ae1e013892623f57cf81"
        },
        "date": 1736443927654,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 56205568.615384616,
            "unit": "ns",
            "range": "± 87646.3641521412"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 128554042.59375,
            "unit": "ns",
            "range": "± 7393426.281977875"
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
          "id": "5c2bbd7e918976e331a9de9ee463e598571af266",
          "message": "Bump nunit from 4.3.0 to 4.3.2 in /UnitTests (#368)\n\nBumps [nunit](https://github.com/nunit/nunit) from 4.3.0 to 4.3.2.\r\n- [Release notes](https://github.com/nunit/nunit/releases)\r\n- [Changelog](https://github.com/nunit/nunit/blob/main/CHANGES.md)\r\n- [Commits](https://github.com/nunit/nunit/compare/4.3.0...4.3.2)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: nunit\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-09T09:31:28-08:00",
          "tree_id": "3261f23a7e0bacfc840b8dcf0d928930edd89ce8",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/5c2bbd7e918976e331a9de9ee463e598571af266"
        },
        "date": 1736443947643,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 56642002.35714286,
            "unit": "ns",
            "range": "± 755766.1486335578"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 128197950.40425532,
            "unit": "ns",
            "range": "± 7279209.848943168"
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
          "id": "badfc85e5bc8247285d48912698a036c7e50bd10",
          "message": "Bump NUnit.Analyzers from 4.5.0 to 4.6.0 in /UnitTests (#369)\n\nBumps [NUnit.Analyzers](https://github.com/nunit/nunit.analyzers) from 4.5.0 to 4.6.0.\r\n- [Release notes](https://github.com/nunit/nunit.analyzers/releases)\r\n- [Changelog](https://github.com/nunit/nunit.analyzers/blob/master/CHANGES.md)\r\n- [Commits](https://github.com/nunit/nunit.analyzers/compare/4.5.0...4.6.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: NUnit.Analyzers\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-16T09:57:27-08:00",
          "tree_id": "74c8348f9445cf104a38769b450d19f37eb3706a",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/badfc85e5bc8247285d48912698a036c7e50bd10"
        },
        "date": 1737050307238,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 56212858.2,
            "unit": "ns",
            "range": "± 185435.27332976786"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 131884677.18,
            "unit": "ns",
            "range": "± 9113073.390842406"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "campbell.reid@displayr.com",
            "name": "Campbell Reid",
            "username": "campbell-reid-displayr"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7df2ef7c95979774f783d4870cb959f03c38aade",
          "message": "Add clarity for the large pool of buffers and the GetBuffer method pertaining to the .NET max array length (#370)",
          "timestamp": "2025-01-17T08:38:17-08:00",
          "tree_id": "f27d16cd37abadc4c22fb0df0df67e0ce2c04603",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/7df2ef7c95979774f783d4870cb959f03c38aade"
        },
        "date": 1737131958337,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 56237154.84615385,
            "unit": "ns",
            "range": "± 275779.33820443176"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 130605724.56,
            "unit": "ns",
            "range": "± 7768795.482279487"
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
          "id": "6424a5968bd25dcd3cb3b1fa20c101582484f039",
          "message": "Bump NUnit3TestAdapter from 4.6.0 to 5.0.0 in /UnitTests (#371)\n\nBumps [NUnit3TestAdapter](https://github.com/nunit/nunit3-vs-adapter) from 4.6.0 to 5.0.0.\n- [Release notes](https://github.com/nunit/nunit3-vs-adapter/releases)\n- [Commits](https://github.com/nunit/nunit3-vs-adapter/compare/V4.6.0...V5.0.0)\n\n---\nupdated-dependencies:\n- dependency-name: NUnit3TestAdapter\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-06T13:56:55-08:00",
          "tree_id": "e8536ee9e67bc28daafd54feb15454f69cb16c5a",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/6424a5968bd25dcd3cb3b1fa20c101582484f039"
        },
        "date": 1741298280086,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 56500693.65384615,
            "unit": "ns",
            "range": "± 476520.38214694906"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 129739520.98,
            "unit": "ns",
            "range": "± 7690859.1745875105"
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
          "id": "42f834448cfefa067dcddaaed4a097b5e11738e7",
          "message": "Bump Microsoft.NET.Test.Sdk from 17.12.0 to 17.13.0 in /UnitTests (#372)\n\nBumps [Microsoft.NET.Test.Sdk](https://github.com/microsoft/vstest) from 17.12.0 to 17.13.0.\n- [Release notes](https://github.com/microsoft/vstest/releases)\n- [Changelog](https://github.com/microsoft/vstest/blob/main/docs/releases.md)\n- [Commits](https://github.com/microsoft/vstest/compare/v17.12.0...v17.13.0)\n\n---\nupdated-dependencies:\n- dependency-name: Microsoft.NET.Test.Sdk\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-03T08:55:02-07:00",
          "tree_id": "5f559b609d503a7be365f17a56ffe7f47fc42ec6",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/42f834448cfefa067dcddaaed4a097b5e11738e7"
        },
        "date": 1743695760944,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 56614593.93333333,
            "unit": "ns",
            "range": "± 541190.2610853581"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 129045751.15789473,
            "unit": "ns",
            "range": "± 7404345.076700612"
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
          "id": "a5bf730899492035bcac0276c576d961562d1be1",
          "message": "Bump System.Memory from 4.6.0 to 4.6.2 in /UnitTests (#375)\n\nBumps [System.Memory](https://github.com/dotnet/maintenance-packages) from 4.6.0 to 4.6.2.\n- [Release notes](https://github.com/dotnet/maintenance-packages/releases)\n- [Commits](https://github.com/dotnet/maintenance-packages/commits)\n\n---\nupdated-dependencies:\n- dependency-name: System.Memory\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-03T08:55:40-07:00",
          "tree_id": "274b8c4f2d6724e2fdd6e7e7b58c1ae735e55052",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/a5bf730899492035bcac0276c576d961562d1be1"
        },
        "date": 1743695803412,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 60422568.67741936,
            "unit": "ns",
            "range": "± 2690972.299793616"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 127139602.35416667,
            "unit": "ns",
            "range": "± 7315453.689807744"
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
          "id": "90af64f04e1a6458b05aa907198ed22cc0d5ffb6",
          "message": "Bump System.Memory from 4.6.0 to 4.6.2 in /src (#376)\n\nBumps [System.Memory](https://github.com/dotnet/maintenance-packages) from 4.6.0 to 4.6.2.\n- [Release notes](https://github.com/dotnet/maintenance-packages/releases)\n- [Commits](https://github.com/dotnet/maintenance-packages/commits)\n\n---\nupdated-dependencies:\n- dependency-name: System.Memory\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-03T08:56:07-07:00",
          "tree_id": "274b8c4f2d6724e2fdd6e7e7b58c1ae735e55052",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/90af64f04e1a6458b05aa907198ed22cc0d5ffb6"
        },
        "date": 1743695823922,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 56115863.07692308,
            "unit": "ns",
            "range": "± 173555.4677802179"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 126841720.35483871,
            "unit": "ns",
            "range": "± 7179957.474819415"
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
          "id": "7d5c3440124bb57f44d3627775e6407668a46baa",
          "message": "Bump NUnit.Analyzers from 4.6.0 to 4.7.0 in /UnitTests (#377)\n\nBumps [NUnit.Analyzers](https://github.com/nunit/nunit.analyzers) from 4.6.0 to 4.7.0.\n- [Release notes](https://github.com/nunit/nunit.analyzers/releases)\n- [Changelog](https://github.com/nunit/nunit.analyzers/blob/master/CHANGES.md)\n- [Commits](https://github.com/nunit/nunit.analyzers/compare/4.6.0...4.7.0)\n\n---\nupdated-dependencies:\n- dependency-name: NUnit.Analyzers\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-10T09:22:27-07:00",
          "tree_id": "6570e06bf2380bc1e53a5cb6bc50e4bb269a85fe",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/7d5c3440124bb57f44d3627775e6407668a46baa"
        },
        "date": 1744302208773,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 56289740.461538464,
            "unit": "ns",
            "range": "± 275235.1075697573"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 130345674.03092784,
            "unit": "ns",
            "range": "± 7539838.385342338"
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
          "id": "47184822cf7773de3cc036a056c7aea40f45d6ef",
          "message": "Bump System.Memory from 4.6.2 to 4.6.3 in /UnitTests (#379)\n\nBumps [System.Memory](https://github.com/dotnet/maintenance-packages) from 4.6.2 to 4.6.3.\n- [Release notes](https://github.com/dotnet/maintenance-packages/releases)\n- [Commits](https://github.com/dotnet/maintenance-packages/commits)\n\n---\nupdated-dependencies:\n- dependency-name: System.Memory\n  dependency-version: 4.6.3\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-10T09:23:03-07:00",
          "tree_id": "7e74adfdddd47f5d9482078c4f1b987076584ad8",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/47184822cf7773de3cc036a056c7aea40f45d6ef"
        },
        "date": 1744302243999,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 56244641.5,
            "unit": "ns",
            "range": "± 153812.52766711218"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 126646601.70652173,
            "unit": "ns",
            "range": "± 7110512.758113815"
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
          "id": "e8c25ece07f7b5cfe187d35a056df03f024c1f14",
          "message": "Bump System.Memory from 4.6.2 to 4.6.3 in /src (#378)\n\nBumps [System.Memory](https://github.com/dotnet/maintenance-packages) from 4.6.2 to 4.6.3.\n- [Release notes](https://github.com/dotnet/maintenance-packages/releases)\n- [Commits](https://github.com/dotnet/maintenance-packages/commits)\n\n---\nupdated-dependencies:\n- dependency-name: System.Memory\n  dependency-version: 4.6.3\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-10T09:23:31-07:00",
          "tree_id": "7e74adfdddd47f5d9482078c4f1b987076584ad8",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/e8c25ece07f7b5cfe187d35a056df03f024c1f14"
        },
        "date": 1744302269333,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 56039758.76923077,
            "unit": "ns",
            "range": "± 147234.99386137445"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 126303303.42424242,
            "unit": "ns",
            "range": "± 7660157.423627104"
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
          "id": "ad19bda8995b45e394f612410d387aef5ac5898b",
          "message": "Bump Microsoft.NET.Test.Sdk and NUnit.Analyzers (#383)\n\nBumps Microsoft.NET.Test.Sdk from 17.13.0 to 17.14.1\nBumps NUnit.Analyzers from 4.7.0 to 4.9.1\n\n---\nupdated-dependencies:\n- dependency-name: Microsoft.NET.Test.Sdk\n  dependency-version: 17.14.1\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n- dependency-name: NUnit.Analyzers\n  dependency-version: 4.9.1\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-06-16T16:20:13-07:00",
          "tree_id": "4618f987b9e4e2ef6fd155da6c47e3d2fdb54536",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/ad19bda8995b45e394f612410d387aef5ac5898b"
        },
        "date": 1750116070884,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 58335138.428571425,
            "unit": "ns",
            "range": "± 236117.02355936338"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 127158031.40449437,
            "unit": "ns",
            "range": "± 7034000.198991256"
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
          "id": "cf1f31363cd8188f2e6c02f81b3e542c711d78c7",
          "message": "Bump NUnit.Analyzers from 4.9.1 to 4.9.2 (#384)\n\n---\nupdated-dependencies:\n- dependency-name: NUnit.Analyzers\n  dependency-version: 4.9.2\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-07-10T09:20:55-07:00",
          "tree_id": "b0ee65869bf46fce89c5ab400ff92ac132cfc4ca",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/cf1f31363cd8188f2e6c02f81b3e542c711d78c7"
        },
        "date": 1752164512063,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 58688619.538461536,
            "unit": "ns",
            "range": "± 284517.3310089139"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 129404977.48958333,
            "unit": "ns",
            "range": "± 7445811.616675333"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jamie.magee@gmail.com",
            "name": "Jamie Magee",
            "username": "JamieMagee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "716850741c3f22355e09b5fd193b1edfac782731",
          "message": "Add Dependabot configuration for .NET SDK updates (#385)",
          "timestamp": "2025-07-10T09:23:06-07:00",
          "tree_id": "e6d4cbc18099f6a5ddc44417f4082b455b62dcbb",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/716850741c3f22355e09b5fd193b1edfac782731"
        },
        "date": 1752164644710,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 58376720.071428575,
            "unit": "ns",
            "range": "± 295067.7458625038"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 126715310.47727273,
            "unit": "ns",
            "range": "± 6945023.178618077"
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
          "id": "83aef8dd0d07ad04a81dc79bec058d4e31dd5082",
          "message": "Bump NUnit from 4.3.2 to 4.4.0 (#388)\n\n---\nupdated-dependencies:\n- dependency-name: NUnit\n  dependency-version: 4.4.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-04T09:01:56-08:00",
          "tree_id": "262591239c9065dd48135079f92bb5aec6afdee9",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/83aef8dd0d07ad04a81dc79bec058d4e31dd5082"
        },
        "date": 1764867785713,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 58324904.928571425,
            "unit": "ns",
            "range": "± 228680.2724045801"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 126569864.65882353,
            "unit": "ns",
            "range": "± 6827475.158908853"
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
          "id": "df01f6595dded7947755f2748bc89083976e9e79",
          "message": "Bump actions/setup-dotnet from 4 to 5 (#392)\n\nBumps [actions/setup-dotnet](https://github.com/actions/setup-dotnet) from 4 to 5.\n- [Release notes](https://github.com/actions/setup-dotnet/releases)\n- [Commits](https://github.com/actions/setup-dotnet/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/setup-dotnet\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-04T09:03:03-08:00",
          "tree_id": "668237cdd56ebb96489df77452045f00b10be0df",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/df01f6595dded7947755f2748bc89083976e9e79"
        },
        "date": 1764867860691,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 58488346.14285714,
            "unit": "ns",
            "range": "± 263171.201935709"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 127592904.72580644,
            "unit": "ns",
            "range": "± 7200655.006644743"
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
          "id": "565f82444e745ecddc3958508b497bc648819fa2",
          "message": "Bump github/codeql-action from 3 to 4 (#397)\n\nBumps [github/codeql-action](https://github.com/github/codeql-action) from 3 to 4.\n- [Release notes](https://github.com/github/codeql-action/releases)\n- [Changelog](https://github.com/github/codeql-action/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/github/codeql-action/compare/v3...v4)\n\n---\nupdated-dependencies:\n- dependency-name: github/codeql-action\n  dependency-version: '4'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-04T09:03:51-08:00",
          "tree_id": "cdbf838f668f75bb86c4fca2ae3315b029cc5e6c",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/565f82444e745ecddc3958508b497bc648819fa2"
        },
        "date": 1764867893678,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 58416876.416666664,
            "unit": "ns",
            "range": "± 210416.2329485659"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 127955119.28723404,
            "unit": "ns",
            "range": "± 7298793.885217482"
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
          "id": "81a9c749b297649a383f1e7507ef431481199092",
          "message": "Bump actions/upload-artifact from 4 to 5 (#399)\n\nBumps [actions/upload-artifact](https://github.com/actions/upload-artifact) from 4 to 5.\n- [Release notes](https://github.com/actions/upload-artifact/releases)\n- [Commits](https://github.com/actions/upload-artifact/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/upload-artifact\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-04T09:04:25-08:00",
          "tree_id": "db5da3b6880f9628f7d75fd4beffefed2f935216",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/81a9c749b297649a383f1e7507ef431481199092"
        },
        "date": 1764867950120,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 58419229.78571428,
            "unit": "ns",
            "range": "± 204212.10247725603"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 126930575.42857143,
            "unit": "ns",
            "range": "± 6507064.716458737"
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
          "id": "845b2e329497d62317f51f2a37cb468270cf45da",
          "message": "Bump NUnit.Analyzers from 4.9.2 to 4.11.2 (#402)\n\n---\nupdated-dependencies:\n- dependency-name: NUnit.Analyzers\n  dependency-version: 4.11.2\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-04T09:05:00-08:00",
          "tree_id": "d49e5949ff3dce0b84f746ee762a777e5f656c86",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/845b2e329497d62317f51f2a37cb468270cf45da"
        },
        "date": 1764867981837,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 58486692,
            "unit": "ns",
            "range": "± 273196.90294083045"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 129210109.3368421,
            "unit": "ns",
            "range": "± 7402982.010854259"
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
          "id": "b8e2354c7c88be1a9a4163bd35cba71dbf99f68b",
          "message": "Bump NUnit3TestAdapter from 5.0.0 to 5.2.0 (#396)\n\n---\nupdated-dependencies:\n- dependency-name: NUnit3TestAdapter\n  dependency-version: 5.2.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-04T09:16:22-08:00",
          "tree_id": "bcb52a08b933597c9e1d38c92b1ee28c56f93cd1",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/b8e2354c7c88be1a9a4163bd35cba71dbf99f68b"
        },
        "date": 1764868647695,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 58533530.57692308,
            "unit": "ns",
            "range": "± 300391.7613837696"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 128669760.19892474,
            "unit": "ns",
            "range": "± 7277810.004661785"
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
          "id": "5ef1670cd79e0e11a3f9e6324e6c057a1732d2b8",
          "message": "Bump actions/checkout from 4 to 6 (#405)\n\nBumps [actions/checkout](https://github.com/actions/checkout) from 4 to 6.\n- [Release notes](https://github.com/actions/checkout/releases)\n- [Changelog](https://github.com/actions/checkout/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/actions/checkout/compare/v4...v6)\n\n---\nupdated-dependencies:\n- dependency-name: actions/checkout\n  dependency-version: '6'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-04T09:17:06-08:00",
          "tree_id": "de26f380e523fd2d1afbed2999b33a48e29ab28a",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/5ef1670cd79e0e11a3f9e6324e6c057a1732d2b8"
        },
        "date": 1764868690410,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 58584910.666666664,
            "unit": "ns",
            "range": "± 384499.5798111519"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 127245706.97777778,
            "unit": "ns",
            "range": "± 7086463.149939596"
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
          "id": "3c3c64b0754a0152dae2209182b42e97a4268e3d",
          "message": "Bump Microsoft.NET.Test.Sdk from 17.14.1 to 18.0.1 (#403)\n\n---\nupdated-dependencies:\n- dependency-name: Microsoft.NET.Test.Sdk\n  dependency-version: 18.0.1\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-04T09:33:10-08:00",
          "tree_id": "101e9eaf834a07fb2573476febb138b110c3cf58",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/3c3c64b0754a0152dae2209182b42e97a4268e3d"
        },
        "date": 1764869663470,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 58308115.46666667,
            "unit": "ns",
            "range": "± 238230.58701238738"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 127225625.52173913,
            "unit": "ns",
            "range": "± 6075959.1537640225"
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
          "id": "d55fe45125ce62d613dce51a6e6d681dbbfda76a",
          "message": "Bump dotnet-sdk from 8.0.100 to 8.0.416 (#404)\n\nBumps [dotnet-sdk](https://github.com/dotnet/sdk) from 8.0.100 to 8.0.416.\n- [Release notes](https://github.com/dotnet/sdk/releases)\n- [Commits](https://github.com/dotnet/sdk/compare/v8.0.100...v8.0.416)\n\n---\nupdated-dependencies:\n- dependency-name: dotnet-sdk\n  dependency-version: 8.0.416\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-04T09:34:25-08:00",
          "tree_id": "c8c57617946f3bd3b381d95f43ed52a882916edb",
          "url": "https://github.com/microsoft/Microsoft.IO.RecyclableMemoryStream/commit/d55fe45125ce62d613dce51a6e6d681dbbfda76a"
        },
        "date": 1764869723203,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkTests.WriteTest.WriteByte",
            "value": 33356042.96153846,
            "unit": "ns",
            "range": "± 375574.0143228796"
          },
          {
            "name": "BenchmarkTests.WriteTest.WriteSpan",
            "value": 118225389.70212767,
            "unit": "ns",
            "range": "± 4543846.254945459"
          }
        ]
      }
    ]
  }
}