/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 *
 * https://leetcode.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (49.12%)
 * Total Accepted:    233.7K
 * Total Submissions: 474.5K
 * Testcase Example:  '"leetcode"'
 *
 * 
 * Given a string, find the first non-repeating character in it and return it's
 * index. If it doesn't exist, return -1.
 * 
 * Examples:
 * 
 * s = "leetcode"
 * return 0.
 * 
 * s = "loveleetcode",
 * return 2.
 * 
 * 
 * 
 * 
 * Note: You may assume the string contain only lowercase letters.
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const sArr = s.split('');
  let map = {};
  sArr.forEach(char => {
    map[char] = (map[char] | 0) + 1;
  })
  for(i=0; i<sArr.length;i++){
    if(map[sArr[i]]===1){
      return i;
    }
  }
  return -1;
};

