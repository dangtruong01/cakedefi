# Cake JavaScript Exercise - Multi-currency Token Sale

The purpose of this exercise is to get you to be familiar with JavaScript in general, unit testing and cryptocurrency arithmetic. In blockchain & cryptocurrency, we are constantly dealing with huge numbers, for example Ether (ETH) with 18 decimal places, this exercise aims to get you familiarized with that.

This exercise should take about 2-3 hours.

## Problem statement

Supposedly there's a token sale that sells token X for token Y.
For ease of discussion, let's call token X (token for sale), SALE token and token Y (base currency) ETH.

This simple CLI app is to allow us to quickly determine the amount of SALE token a given amount of ETH would fetch. ETHSALE rate is the rate of amount of SALE that 1 ETH can get and is provided as an input with the app.

A token sale may also want to accept another cryptocurrency other than ETH, such as BTC and DOGE. As the price of SALE is fixed at ETH, and BTCUSD price fluctuates according to market, BTCSALE has to be computed based on market rate of BTCUSD and ETHUSD. 

#### Example

1. ETHSALE rate is determined to be 1 ETH to 5000 SALE at start of app.
1. BTCUSD is given as 10000, ETHUSD is 200. It can be worked out that BTCETH is thus 50.
1. A purchase with 5 ETH would yield 25,000 SALE
1. A purchase with 2.4 BTC would yield 600,000 SALE

## Input and output

Input is given from standard input. 

First line provides the exchange rates for BTC, ETH and DOGE paired with USD.

From second line onwards, each line represents a unique standalone case. Each line would be in the following format, expected output would be the amount of SALE expected given the ETH purchase amount, rounded down to a given number of decimal places for SALE.

Notes: 
1. Only the following 3 different possible input currencies are supported: BTC, ETH, and DOGE. _No need to handle for arbitrary pairings_
1. Price will always be provided with USD base. _No path-finding algorithm is required or expected for this exercise._
1. SALE rate will always be provided in ETHSALE, i.e. how many SALE per 1 ETH received.


```
<BTCUSD rate> <ETHUSD rate> <DOGEUSD rate>
<ETHSALE rate> <SALE decimal places> <Purchase currency> <BTC/ETH/DOGE purchase amount>
<ETHSALE rate> <SALE decimal places> <Purchase currency> <BTC/ETH/DOGE purchase amount>
<ETHSALE rate> <SALE decimal places> <Purchase currency> <BTC/ETH/DOGE purchase amount>
...
```

### Sample input and usage

The following sample input provides the following market rates:
- BTCUSD: 3825.281112 
- ETHUSD: 138.8911
- DOGEUSD: 0.00198422341298374987

Sample input (`input.txt`):

```
3825.281112 138.8911 0.00198422341298374987
1.5 3 ETH 3.5
1.5 3 BTC 3.5
1.5 3 DOGE 3.5
1.5 3 DOGE 350000
1.5 1 ETH 3.5
6540825.876543210987654325 18 ETH 992465.123456789012345678
6540825.876543210987654325 18 DOGE 992465.123456789012345678
6540825.876543210987654325 18 BTC 992465.123456789012345678
```

Usage with output for the above input:

```bash
$ npm start < input.txt
5.250
144.593
0.000
7.500
5.2
6491541561072.818099748528072316
92739338.602961358374866197
178787347219043.160674658985510029
```

Note: Your results may lety slightly depending on order of operation.

## Bonus: Live rates

Optionally, for bonus points, support the current market spot rates of cryptocurrency by integrating with publicly available price feed API providers. For live current spot rates, first line of the INPUT would simply be the word `CURRENT`.

### Sample input and usage

Sample input for current spot rates (`input.txt`):

```
CURRENT
1.5 3 ETH 3.5
1.5 3 BTC 3.5
1.5 3 DOGE 3.5
1.5 3 DOGE 350000
1.5 1 ETH 3.5
6540825.876543210987654325 18 ETH 992465.123456789012345678
6540825.876543210987654325 18 DOGE 992465.123456789012345678
6540825.876543210987654325 18 BTC 992465.123456789012345678
```

### Suggested price feed providers

Here are some price feed providers that you may consider using:

- [CoinMarketCap](https://coinmarketcap.com/api/)
- [CoinGecko](https://www.coingecko.com/en/api)
- [CoinCap](https://docs.coincap.io/)

You do not have to restrict yourself to these providers. Feel free to use other providers that are not suggested.

## Getting started

You can use the following script to get you started:

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  console.log(line);
});
```

To run, `node index.js < input.txt`


## Notes

1. Usage of external dependencies via npm is acceptable, but try to limit the use of it to only the more popular and well-maintained ones. You may want to use [bignumber.js](https://github.com/MikeMcl/bignumber.js/) to handle large numbers.

1. The final output should not be expressed in any exponential format (e.g. should not be `4.53e-12`) and should be as precise, up to the number of decimal places, **rounded down** for any extra decimal places.

1. **Unit test** accompaniment is highly encouraged. Should you include unit test, it should run with simply `npm test`.

1. While we do accept submission in JavaScript, submission in **TypeScript** will *really* impress us.

1. For help or submission, email Ben Zumbrunn at [ben@cakedefi.com](mailto:ben@cakedefi.com). If you are unable to complete the exercise but have got some progress, you are welcomed to still submit your incomplete work.

1. Please work on this exercise on a private Git repository (ideally GitHub, BitBucket or GitLab). Please invite [@benzumbrunn](https://github.com/benzumbrunn) to view your private repository should you use either of the above.

1. **Bonus question**: Why do you think SALE amount is rounded down, instead of rounded off or rounded up?