/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/
 *
 * algorithms
 * Easy (50.85%)
 * Total Accepted:    291.7K
 * Total Submissions: 573.7K
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * Say you have an array for which the ith element is the price of a given
 * stock on day i.
 * 
 * Design an algorithm to find the maximum profit. You may complete as many
 * transactions as you like (i.e., buy one and sell one share of the stock
 * multiple times).
 * 
 * Note: You may not engage in multiple transactions at the same time (i.e.,
 * you must sell the stock before you buy again).
 * 
 * Example 1:
 * 
 * 
 * Input: [7,1,5,3,6,4]
 * Output: 7
 * Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit
 * = 5-1 = 4.
 * Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 =
 * 3.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [1,2,3,4,5]
 * Output: 4
 * Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit
 * = 5-1 = 4.
 * Note that you cannot buy on day 1, buy on day 2 and sell them later, as you
 * are
 * engaging multiple transactions at the same time. You must sell before buying
 * again.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transaction is done, i.e. max profit = 0.
 * 
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if(!prices || prices.length===1) return 0;
  
  //initialize values, as they named
  //finding name define the current stutus is to find the min,
  // as long as found , change to max;
  let min, max, sum, findingMin;
  findingMin = true;
  sum = 0;
  min = prices[0];

  for(i=1; i<prices.length; i++){
    if(findingMin){
      if(min > prices[i]){
        min = prices[i];
        //it means decrease;
      } else {
        max = prices[i];
        findingMin = false;
        //last step, no need to finalize;
        if(i=== prices.length - 1){
          sum += max - min;
        }
        continue;
      }
    }
    if(!findingMin){
      if(max < prices[i]){
        max = prices[i];
        if(i=== prices.length - 1){
          sum += max - min;
        }
      } else{
        sum += max - min;
        min = prices[i];
        findingMin = true;
      }
    }
  }

  return sum;
};

