// 121. Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.







/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let min = prices[0]
    let max = min
    let value = 0

    for(let i = 0; i < prices.length; i++){

        if(i != prices.length-1 && prices[i] <= min){
            max = min = prices[i]
        }
        else if(prices[i] > max){
            max = prices[i]
        }

        value = max - min > value ? max - min : value
    }

    return value
};