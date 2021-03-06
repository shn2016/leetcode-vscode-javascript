/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
 *
 * https://leetcode.com/problems/same-tree/description/
 *
 * algorithms
 * Easy (49.31%)
 * Total Accepted:    346.6K
 * Total Submissions: 702.4K
 * Testcase Example:  '[1,2,3]\n[1,2,3]'
 *
 * Given two binary trees, write a function to check if they are the same or
 * not.
 * 
 * Two binary trees are considered the same if they are structurally identical
 * and the nodes have the same value.
 * 
 * Example 1:
 * 
 * 
 * Input:     1         1
 * ⁠         / \       / \
 * ⁠        2   3     2   3
 * 
 * ⁠       [1,2,3],   [1,2,3]
 * 
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:     1         1
 * ⁠         /           \
 * ⁠        2             2
 * 
 * ⁠       [1,2],     [1,null,2]
 * 
 * Output: false
 * 
 * 
 * Example 3:
 * 
 * 
 * Input:     1         1
 * ⁠         / \       / \
 * ⁠        2   1     1   2
 * 
 * ⁠       [1,2,1],   [1,1,2]
 * 
 * Output: false
 * 
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if(p === null && q === null) { return true};
  if(p === null || q === null) { return false};

  let leftTrees = [p];
  let rightTrees = [q];
  let result = true;

  while(leftTrees.length !==0 && rightTrees.length !==0){
    const left = leftTrees.shift();
    const right = rightTrees.shift();

    //shift all the nodes in left tree and compare the val to the same one in the right;
    if(left.val !== right.val){
      result = false;
      break;
    }

    // left node part.
    if(left.left !== null && right.left !== null){
      leftTrees.push(left.left);
      rightTrees.push(right.left);
    } 
    // if only one of them is null, it is false;
    if(left.left === null && right.left !== null){
      result = false;
      break;
    } 
    if(left.left !== null && right.left === null){
      result = false;      
      break;    
    } 

    //right node part.
    if(left.right !== null && right.right !== null){
      leftTrees.push(left.right);
      rightTrees.push(right.right);    
    }
    if(left.right === null && right.right !== null){
      result = false;
      break;     
    }
    if(left.right !== null && right.right === null){
      result = false;
      break;     
    }
  }

  return result;
};


