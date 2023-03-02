import readline from 'readline';
import BigNumber from 'bignumber.js';
import axios from 'axios';

const fetchLiveRate = async (currencyID: string) => {
    const url = `https://api.coincap.io/v2/rates/${currencyID}`;
    const response = await axios.get(url);
    return response.data.data.rateUsd;
}

const main =  async () => {
    let coinRates = {} as any;
    let lineNumber = 0;
    let liveBtc = await fetchLiveRate('bitcoin');
    let liveEth = await fetchLiveRate('ethereum');
    let liveDoge = await fetchLiveRate('dogecoin');
    const rl = readline.createInterface({
        input: process.stdin,
    });
    rl.on('line', (line: string) => {
        let words = line.split(' ');
        let ethSale = new BigNumber(words[0]);
        let decimals = parseInt(words[1]);
        let coin = words[2];
        let amount = new BigNumber(words[3]);
        if (lineNumber === 0) {
            if (line === 'CURRENT') {
                coinRates = {
                    btcusd: new BigNumber(liveBtc),
                    ethusd: new BigNumber(liveEth),
                    dogeusd: new BigNumber(liveDoge)
                };
            } else {
                coinRates = {
                    btcusd: new BigNumber(words[0]),
                    ethusd: new BigNumber(words[1]),
                    dogeusd: new BigNumber(words[2])
                };
            }
        } else {
            let exchangeRate = BigNumber(0);
            if (coin === "ETH") {
                exchangeRate = new BigNumber(coinRates["ethusd"].dividedBy(coinRates["ethusd"]));
            } else if (coin === "BTC") {
                exchangeRate = new BigNumber(coinRates["btcusd"].dividedBy(coinRates["ethusd"]));
            } else if (coin === "DOGE") {
                exchangeRate = new BigNumber(coinRates["dogeusd"].dividedBy(coinRates["ethusd"]));
            }
            let value = new BigNumber(amount.multipliedBy(exchangeRate).multipliedBy(ethSale)).toFixed(decimals, 1);
            console.log(value.toString());
        }        
        lineNumber++;
        rl.close();
    })
}

main();