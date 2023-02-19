/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
// 输入：s = "()"
// 输出：true
function isValid(s: string): boolean {
    let currentStr = ''
    const stack: string[] = [] // 後進先出
    for(let i = 0; i< s.length; i++) {
        currentStr = s[i]
        if(currentStr === '(' || currentStr === '[' || currentStr === '{') stack.push(currentStr)
        if(currentStr === ')' && stack.pop() !== '(')  return false
        if(currentStr === ']' && stack.pop() !== '[')  return false
        if(currentStr === '}' && stack.pop() !== '{')  return false
    }
    return stack.length === 0

};
// @lc code=end

