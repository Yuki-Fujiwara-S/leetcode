// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  // what i s a s l i d i n g window
  // what is mcFred
  // [2, 1000, 1, 3, 4, 6]
  
  let profitSoFar = 0;
  
  let minSoFar = Number.MAX_VALUE;
  
  for (let i = 0; i < prices.length; i++) {
      minSoFar = Math.min(prices[i], minSoFar);
      let profit = prices[i] - minSoFar;
      
      profitSoFar = Math.max(profit, profitSoFar);
  }
  
  return profitSoFar;
  
  

  
};