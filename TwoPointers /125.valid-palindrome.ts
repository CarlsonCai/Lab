/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
//  方法：雙指針(對向指針)
//Input: s = "A man, a plan, a canal: Panama"
//Output: true
function isPalindrome(s: string): boolean {
    const rule = /[A-Za-z0-9]+/
    const str = s.split('').filter(item => rule.test(item))
    s = str.join('')
    let left = 0
    let right = s.length - 1
  
    while (left <= right) {
      if (s[left].toLowerCase() !== s[right].toLowerCase()) {
        return false
      }
      left++
      right--
    }
    return true

};
// @lc code=end

