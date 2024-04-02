/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minValue;
  let profit = 0;

  for (let i = 0; i < prices.length; i += 1) {
    const currentValue = prices[i];

    if (i === 0) {
        minValue = currentValue;
        continue;
    }
   
    if (minValue < currentValue && currentValue - minValue > profit) {
        profit = currentValue - minValue;
    } else if (minValue > currentValue) {
        minValue = currentValue;
    }
  }

  return profit;
};