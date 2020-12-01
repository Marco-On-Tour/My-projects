"https://query2.finance.yahoo.com/v7/finance/chart/" + symbol + "?range=" + range + "&interval=" + interval + "&indicators=quote&includeTimestamps=true&includePrePost=" + extended + "&events=div%7Csplit%7Cearn"
 {String} symbol
{String} range - How far back to retrieve data: [1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 5y, 10y, ytd, max]
{String} interval - How long each quote should represent: [1m, 2m, 5m, 15m, 30m, 60m, 90m, 1h, 1d, 5d, 1wk, 1mo, 3mo]
{Boolean} extended - Whether to include data from extended trading hours.