# Cake Javascript Exercise - Solution Summary

## Summary

The solution is written in ```index.ts``` file, which has covered the following requirement:

1. Input and Output calculation matched
1. Bonus: Live rates fetched from CoinCap - able to test with ```input_liveRate.txt```
1. Usage of TypeScript
1. Usage of ```bignumber.js```
1. Final output is precise and not in exponential format
1. Answer to bonus question (Why do you think SALE amount is rounded down, instead of rounded off or rounded up?) 

    --> Round down will give us a nearest precise representation of the actual value as it is the closest value which is not greater than the actual value. As a sale amount, we would not want the SALE amount to be higher than its actual value, which is the case of rounding up because it would result in a loss of profit for the firm. Meanwhile, round off is too inprecise as the deviation from the actual value is huge.


## Run the program

1. Install ts-node as global

    ```npm install -g ts-node```
1. Install dependencies

    ```npm install```
1. Run scenario with rate from input file

    macOS

    ```ts-node index.ts < input.txt```

    Windows

    ```Get-Content input.txt | ts-node index.ts```
1. Run scenario with live rate fetched from CoinCap

    macOS

    ```ts-node index.ts < input_liveRate.txt```

    Windows

    ```Get-Content input-liveRate.txt | ts-node index.ts```



