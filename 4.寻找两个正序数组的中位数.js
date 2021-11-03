/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */
// @lc code=start
/**
 * 思路： 合并数组，返回中位值
 * 时间复杂度 O(m + n)
 * 空间复杂度 O(m + n)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const total = len1 + len2;

  if (total === 0) return 0;

  if (len1 === 0 || len2 === 0) {
    return getMiddle(total, len1 === 0 ? nums2 : nums1);
  }

  let merged = []
  let l1 = 0, l2 = 0;

  while(l1 < len1 && l2 < len2) {
    if (nums1[l1] <= nums2[l2]) {
      merged.push(nums1[l1++]);
    } else {
      merged.push(nums2[l2++])
    }
  }
  
  while(l1 < len1) {
    merged.push(nums1[l1++])
  }

  while(l2 < len2) {
    merged.push(nums2[l2++])
  }

  return getMiddle(total, merged);

};

function getMiddle(t, arr) {
  const m = Math.floor(t / 2);
  return t % 2 !== 0 ? arr[m] : (arr[m - 1] + arr[m]) / 2;
}

// @lc code=end

