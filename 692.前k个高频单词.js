/*
 * @lc app=leetcode.cn id=692 lang=javascript
 *
 * [692] 前K个高频单词
 */

// @lc code=start
/**
 * 思路：排序
 * 时间复杂度 O(nlogn)
 * 空间复杂度 O(n)
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  let map = new Map();
  for (let i = 0; i < words.length; i++) {
    map.set(words[i], (map.get(words[i]) || 0) + 1);
  }

  const arr = Array.from(map);

  arr.sort((a, b) => {
    if (a[1] !== b[1]) {
      return b[1] - a[1];
    }

    return +(a > b) || -(a < b);
  });

  return arr.slice(0, k).map((item) => item[0]);
};

// @lc code=end
