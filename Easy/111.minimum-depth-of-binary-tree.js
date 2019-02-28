/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
 *
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (34.77%)
 * Total Accepted:    273.3K
 * Total Submissions: 784.8K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, find its minimum depth.
 * 
 * The minimum depth is the number of nodes along the shortest path from the
 * root node down to the nearest leaf node.
 * 
 * Note: A leaf is a node with no children.
 * 
 * Example:
 * 
 * Given binary tree [3,9,20,null,null,15,7],
 * 
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * return its minimum depth = 2.
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
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(root === null) return 0;
    const arr = [];
    getMinDepth(root, 1, arr);

    const min = Math.min.apply(null, arr);
    return min;
};

function getMinDepth(node, i, arr){
  const left = node.left;
  const right = node.right;
  if(!left && !right){
    arr.push(i);
    return;
  }
  i++;
  if(!!left){
    getMinDepth(left, i, arr);
  }
  if(!!right){
    getMinDepth(right, i, arr);
  }
}
