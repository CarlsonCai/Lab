/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
//  方法：雙指針(快慢指針)
//  step 
//  1. 建立 slowIndex fastIndex dict
//  2. dict 負責儲存找到的字串位置 fastIndex 持續向右找尋新字串，如果找到重複 slowIndex則移動到 fastIndex 當前找到的位置 + 1

// Input: s = "abcabcbb"
// Output: 3

function lengthOfLongestSubstring(s: string): number {
     // 初始化字典和答案
    let ans = 0;
    let dict = {};

    // 初始化指針
    let slowIndex = 0;
    let fastIndex = 0;
    
    while (fastIndex < s.length) {
        if(dict[s[fastIndex]] !== undefined) {
            // 確保 slowIndex 不會向左移動 ex...abba 當尋找到 a 因為之前紀錄的 dict 之前的 a 位置在 0 所以這時 slowIndex 會向左移動
            slowIndex = Math.max(slowIndex, dict[s[fastIndex]] + 1)
        }
        dict[s[fastIndex]] = fastIndex
        ans = Math.max(ans, fastIndex - slowIndex + 1)
        fastIndex++
    }
    return ans;
};
// @lc code=end