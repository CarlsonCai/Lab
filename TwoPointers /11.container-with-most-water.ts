/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
// Input: height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
// Output: 49
// 方法：雙指針(相對指針)
function maxArea(height: number[]): number {
    let left = 0
    let right = height.length - 1
    let res = 0
    while (left < right) {
      // max 找出最大面積，min用兩注之間最小長度計算，否則會溢出
      res = Math.max(res, Math.min(height[left], height[right]) * (right - left))
      if (height[left] < height[right]) {
        left++
      } else {
        right--
      }
    }
    return res
};
// @lc code=end

