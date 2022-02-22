data = {
  reports: [
    {
      columnHeader: {
        dimensions: ["ga:sourceMedium", "ga:date"],
        metricHeader: {
          metricHeaderEntries: [
            { name: "ga:users", type: "INTEGER" },
            { name: "ga:newUsers", type: "INTEGER" },
            { name: "ga:sessions", type: "INTEGER" },
            { name: "ga:bounceRate", type: "PERCENT" },
            { name: "ga:pageviewsPerSession", type: "FLOAT" },
            { name: "ga:avgSessionDuration", type: "TIME" },
            { name: "ga:goal5Completions", type: "INTEGER" },
          ],
        },
      },
      data: {
        rows: [
          { dimensions: ["(direct) / (none)", "20220130"], metrics: [{ values: ["21", "18", "22", "90.9090909090909", "1.3181818181818181", "6.909090909090909", "2"] }] },
          { dimensions: ["b2b_web / expo", "20220130"], metrics: [{ values: ["1", "0", "1", "0.0", "9.0", "46.0", "0"] }] },
          { dimensions: ["baidu / organic", "20220130"], metrics: [{ values: ["2", "2", "2", "100.0", "1.0", "0.0", "0"] }] },
          { dimensions: ["geneonline / cpc", "20220130"], metrics: [{ values: ["1", "1", "1", "100.0", "1.0", "0.0", "0"] }] },
          { dimensions: ["google / organic", "20220130"], metrics: [{ values: ["44", "39", "44", "72.72727272727273", "1.6136363636363635", "34.61363636363637", "0"] }] },
          { dimensions: ["ibmi_web / expo", "20220130"], metrics: [{ values: ["1", "0", "1", "100.0", "1.0", "0.0", "0"] }] },
          { dimensions: ["m.facebook.com / referral", "20220130"], metrics: [{ values: ["1", "1", "1", "100.0", "1.0", "0.0", "0"] }] },
          { dimensions: ["taiwantradeshows.com.tw / referral", "20220130"], metrics: [{ values: ["1", "1", "1", "100.0", "1.0", "0.0", "0"] }] },
          { dimensions: ["tw.search.yahoo.com / referral", "20220130"], metrics: [{ values: ["2", "1", "3", "33.33333333333333", "2.6666666666666665", "66.66666666666667", "0"] }] },
          { dimensions: ["yahoo / organic", "20220130"], metrics: [{ values: ["2", "1", "2", "100.0", "1.0", "0.0", "0"] }] },
        ],
        totals: [{ values: ["76", "64", "78", "78.2051282051282", "1.6025641025641026", "24.628205128205128", "2"] }],
        rowCount: 10,
        minimums: [{ values: ["1", "0", "1", "0.0", "1.0", "0.0", "0"] }],
        maximums: [{ values: ["44", "39", "44", "100.0", "9.0", "66.66666666666667", "2"] }],
        isDataGolden: True,
      },
    },
  ],
};
