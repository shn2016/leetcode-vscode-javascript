/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 *
 * https://leetcode.com/problems/integer-to-roman/description/
 *
 * algorithms
 * Medium (49.73%)
 * Total Accepted:    207.3K
 * Total Submissions: 415.4K
 * Testcase Example:  '3'
 *
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D
 * and M.
 * 
 * 
 * Symbol       Value
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * 
 * For example, two is written as II in Roman numeral, just two one's added
 * together. Twelve is written as, XII, which is simply X + II. The number
 * twenty seven is written as XXVII, which is XX + V + II.
 * 
 * Roman numerals are usually written largest to smallest from left to right.
 * However, the numeral for four is not IIII. Instead, the number four is
 * written as IV. Because the one is before the five we subtract it making
 * four. The same principle applies to the number nine, which is written as IX.
 * There are six instances where subtraction is used:
 * 
 * 
 * I can be placed before V (5) and X (10) to make 4 and 9. 
 * X can be placed before L (50) and C (100) to make 40 and 90. 
 * C can be placed before D (500) and M (1000) to make 400 and 900.
 * 
 * 
 * Given an integer, convert it to a roman numeral. Input is guaranteed to be
 * within the range from 1 to 3999.
 * 
 * Example 1:
 * 
 * 
 * Input: 3
 * Output: "III"
 * 
 * Example 2:
 * 
 * 
 * Input: 4
 * Output: "IV"
 * 
 * Example 3:
 * 
 * 
 * Input: 9
 * Output: "IX"
 * 
 * Example 4:
 * 
 * 
 * Input: 58
 * Output: "LVIII"
 * Explanation: L = 50, V = 5, III = 3.
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: 1994
 * Output: "MCMXCIV"
 * Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 * 
 * Symbol       Value
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 */
/**
 * @param {number} num
 * @return {string}
 */

var intToRoman = function(num) {
  const M = ["", "M", "MM", "MMM"];
  const C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  return M[Math.floor(num/1000)] + C[Math.floor((num%1000)/100)] + 
    X[Math.floor((num%100)/10)] + I[num%10];
}
 // 164ms most direct way;
 // but while doing this, need to consider the relationship among roman word;
var direct = function(num) {
  let str = "";
  let count = 0;
  if(num >=1000){
    count = Math.floor(num / 1000);
    num = num % 1000;
    for(i=1;i<=count;i++){
      str += "M";
    }
  }
  if(num>=900){
    num = num % 100;
    str += "C";
    str += "M";
  }
  if(num>=500){
    count = Math.floor((num-500) / 100);
    num = num % 100;
    str += "D";
    for(i=1;i<=count;i++){
      str += "C";
    }
  }
  if(num>=400){
    num = num % 100;
    str += "C";
    str += "D";
  }
  if(num>=100){
    count = Math.floor(num / 100);
    num = num % 100;
    for(i=1;i<=count;i++){
      str += "C";
    }
  }
  if(num>=90){
    num = num % 10;
    str += "X";
    str += "C";
  }
  if(num>=50){
    count = Math.floor((num-50) / 10);
    num = num % 10;
    str += "L";
    for(i=1;i<=count;i++){
      str += "X";
    }
  }
  if(num>=40){
    num = num % 10;
    str += "X";
    str += "L";
  }
  if(num>=10){
    count = Math.floor(num / 10);
    num = num % 10;
    for(i=1;i<=count;i++){
      str += "X";
    }
  }
  if(num>=9){
    num = 0;
    str += "I";
    str += "X";
  }
  if(num>=5){
    count = num - 5;
    num = 0;
    str += "V";
    for(i=1;i<=count;i++){
      str += "I";
    }
  }
  if(num>=4){
    num = 0;
    str += "I";
    str += "V";
  }
  if(num>0){
    for(i=1;i<=num;i++){
      str += "I";
    }
  }
  return str;
};


