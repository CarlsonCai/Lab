/*
 * @lc app=leetcode id=680 lang=typescript
 *
 * [680] Valid Palindrome II
 */

// @lc code=start
//  方法：雙指針(對向指針)
//  Input: s = "aba"
//  Output: true
// 输入：s = "abca"
// 输出：true
// 解释：你可以删除字符 'c' 。
function validPalindrome(s: string): boolean {
    let left = 0
    let right = s.length - 1
    while (left <= right) {
      if (s[left] !== s[right]) {
        return verify(s, left + 1, right) || verify(s, left, right - 1)
      }
      left++
      right--
    }
    return true
};

function verify(s:string, left:number, right:number) {
    while (left <= right) {
      if (s[left] !== s[right]) {
        return false
      }
      left++
      right--
    }
    return true
  }
// @lc code=end

