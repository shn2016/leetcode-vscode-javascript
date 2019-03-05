/*
 * @lc app=leetcode id=237 lang=javascript
 *
 * [237] Delete Node in a Linked List
 *
 * https://leetcode.com/problems/delete-node-in-a-linked-list/description/
 *
 * algorithms
 * Easy (51.92%)
 * Total Accepted:    265.6K
 * Total Submissions: 510.6K
 * Testcase Example:  '[4,5,1,9]\n5'
 *
 * Write a function to delete a node (except the tail) in a singly linked list,
 * given only access to that node.
 * 
 * Given linked list -- head = [4,5,1,9], which looks like following:
 * 
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: head = [4,5,1,9], node = 5
 * Output: [4,1,9]
 * Explanation: You are given the second node with value 5, the linked list
 * should become 4 -> 1 -> 9 after calling your function.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: head = [4,5,1,9], node = 1
 * Output: [4,5,9]
 * Explanation: You are given the third node with value 1, the linked list
 * should become 4 -> 5 -> 9 after calling your function.
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * The linked list will have at least two elements.
 * All of the nodes' values will be unique.
 * The given node will not be the tail and it will always be a valid node of
 * the linked list.
 * Do not return anything from your function.
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  //this is a linkeed list, they always linked together;
  node.val = node.next.val;
  node.next = node.next.next;
}
 //the main difficulty for me is where to find that head ?
 // so I tried this.
var crazy = function(node) {
  if(this.head === node.val) {
    this.head =this.head.next;
  }
  else{
    const dummy = new ListNode(0);
    dummy.next = this.head;
    const prevNode = new ListNode(0);
    while(this.head.val !== node.val){
      prevNode.next = this.head;
      this.head = this.head.next;
    }
    prevNode.next.next = this.head.next;
    this.head = dummy.next;
  }
};

