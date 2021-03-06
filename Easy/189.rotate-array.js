/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 *
 * https://leetcode.com/problems/rotate-array/description/
 *
 * algorithms
 * Easy (28.85%)
 * Total Accepted:    266.8K
 * Total Submissions: 922.7K
 * Testcase Example:  '[1,2,3,4,5,6,7]\n3'
 *
 * Given an array, rotate the array to the right by k steps, where k is
 * non-negative.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,2,3,4,5,6,7] and k = 3
 * Output: [5,6,7,1,2,3,4]
 * Explanation:
 * rotate 1 steps to the right: [7,1,2,3,4,5,6]
 * rotate 2 steps to the right: [6,7,1,2,3,4,5]
 * rotate 3 steps to the right: [5,6,7,1,2,3,4]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [-1,-100,3,99] and k = 2
 * Output: [3,99,-1,-100]
 * Explanation: 
 * rotate 1 steps to the right: [99,-1,-100,3]
 * rotate 2 steps to the right: [3,99,-1,-100]
 * 
 * 
 * Note:
 * 
 * 
 * Try to come up as many solutions as you can, there are at least 3 different
 * ways to solve this problem.
 * Could you do it in-place with O(1) extra space?
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function(nums, k) {
  const length = nums.length;
  const knums = nums.slice(length-k, length)
  for(i=0; i<k: i++){
    nums.unshift();
  }

}
// 68ms
var second = function(nums, k) {
  const length = nums.length;
  const knums = nums.slice(length-k, length)
  nums.splice(length-k, k);
  nums.splice(0,0, ...knums);
}

// 68ms;
var third = function(nums, k) {
  const length = nums.length;
  nums.splice(0,0, ...nums.slice(length-k, length));
  nums.splice(length, length+k);
}


// 96ms
var first = function(nums, k) {
  for(i=0; i< k; i++){
    nums.unshift(nums.pop());
  }
}
