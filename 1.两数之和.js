/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * 思路：
 *  用map记录 目标与当前元素差值 -> 当前元素的索引
 * 时间复杂度: O(n)
 * 空间复杂度: O(n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = new Map()

  for(let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i]
    }

    map.set(target - nums[i], i);
  }
  return []
    
};
// @lc code=end

