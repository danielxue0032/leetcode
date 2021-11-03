/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 * 思路：创建一个新链表，比较大小，加到链表中。当其中一个为空后，把另一个链表
 * 剩下的元素追加到新链表后面就行
 * 时间复杂度: O(m + n), m和n分别是两个链表的长度
 * 空间复杂度: O(1)
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let head = new ListNode();
  let cur = head;

  // while(l1 !== null && l2 !== null) {
  //   if (l1.val <= l2.val) {
  //     cur.next = l1;
  //     cur = l1;
  //     l1 = l1.next
  //   } else {
  //     cur.next = l2;
  //     cur = l2;
  //     l2 = l2.next;
  //   }
  // }

  // cur.next = l1 === null ? l2 : l1;

  while(l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = new ListNode(l1.val)
      l1 = l1.next
    } else {
      cur.next = new ListNode(l2.val)
      l2 = l2.next
    }
    cur = cur.next
  }

  // 不复用原始链表
  let left = l1 === null ? l2 : l1;
  while(left) {
    cur.next = new ListNode(left.val)
    left = left.next
    cur = cur.next
  }

  return head.next;
};
// @lc code=end

