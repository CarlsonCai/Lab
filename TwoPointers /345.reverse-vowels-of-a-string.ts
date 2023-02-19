/*
 * @lc app=leetcode id=345 lang=typescript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
//  方法：雙指針(對向指針)
//  step 
//  1. 字串轉陣列
//  2. 建立 left 及 right 指針
//  3. left right 當前是元音則停止並進行交換
//  4. 只有單獨 left 或是 right 是元音，則當前是元音的指針停止，不是元音的繼續移動（left 向右，right 向左）
// Input: s = "hello"
// Output: "holle"
// 输入：s = "hello"
// 输出："holle"
function reverseVowels(s: string): string {
    let left = 0
    let right = s.length - 1
    let temp = ''
    let str  = s.split('')
    while (left < right) {
      str[left] = str[left]
      str[right] = str[right]
      if (!isVowel(str[left])) left++
      if (!isVowel(str[right])) right--
      if (isVowel(str[left]) && isVowel(str[right])) {
        temp = s[left]
        str[left] = str[right]
        str[right] = temp
        left++
        right--
      }
    }
    return str.join('')
};

function isVowel(s: string) {
    let Vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    return Vowels.includes(s)
  }
// @lc code=end

