/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let fast = head
  let slow = head
  while(n--) {
    fast = fast.next
  }

  while(fast.next !== null) {
    slow = slow.next
    fast = fast.next
  }

  slow.next = slow.next.next

  return head
};
// @lc code=end

