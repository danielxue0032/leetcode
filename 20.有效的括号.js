/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * 思路：通过栈操作，左括号入栈，右括号出栈，判断栈顶是否和有括号匹配。
 * 最终看栈是否为空
 * 时间复杂度 O(n), n是字符串长度
 * 空间复杂度 O(n + E), E是字符集的种类
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (!s) return true;

  const stack = []
  const map = {
    '}': '{',
    ')': '(',
    ']': '[',
  }
  const left = ['(', '{', '[']

  for(let i = 0; i < s.length; i++) {
    const char = s[i];
    if (left.includes(char)) {
      stack.push(char)
      continue
    }
    
    if (stack.pop() !== map[char]) {
      return false;
    }
  }

  // 判断是必要的，比如1个字符时
  return stack.length === 0;

};

// @lc code=end

