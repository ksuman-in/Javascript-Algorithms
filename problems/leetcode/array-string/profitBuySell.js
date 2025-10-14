function profitBuySell(prices) {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }

    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }
  return maxProfit;
}

console.log(profitBuySell([7, 1, 5, 3, 6, 4])); //5
console.log(profitBuySell([7, 6, 4, 3, 1])); //0
console.log(profitBuySell([1, 2, 3, 4, 5])); //4
console.log(profitBuySell([5, 4, 3, 2, 1])); //0
console.log(profitBuySell([3, 2, 6, 5, 0, 3])); //4

// The function profitBuySell takes an array of stock prices and returns the maximum profit that can be achieved by buying and selling once.
// If no profit can be made, it returns 0.  It iterates through the prices, keeping track of the minimum price seen so far and calculating potential profits at each step.
