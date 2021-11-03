/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * 思路：设置首部指针，第一次遍历把0移到首部，第二次把1移到首部，剩下就是2
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let head = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      [nums[head], nums[i]] = [nums[i], nums[head]];
      head++;
    }
  }

  for (let i = head; i < nums.length; i++) {
    if (nums[i] === 1) {
      [nums[head], nums[i]] = [nums[i], nums[head]];
      head++;
    }
  }
};

/**
 * 思路：双指针，从0开始遍历，遇到2时和P2交换，但不能直接去下一个元素，因为交换过来的可能是2,
 * 需要继续交换，直到换过来的不是2
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 */
sortColors = function (nums) {
  let p0 = 0;
  let p2 = nums.length - 1;

  for (let i = 0; i <= p2; i++) {
    while (nums[i] === 2 && i <= p2) {
      [nums[i], nums[p2]] = [nums[p2], nums[i]];
      p2--;
    }

    if (nums[i] === 0) {
      [nums[i], nums[p0]] = [nums[p0], nums[i]];
      p0++;
    }
  }
};
// @lc code=end
