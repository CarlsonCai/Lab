/*
 * @lc app=leetcode id=704 lang=typescript
 *
 * [704] Binary Search
 */

// @lc code=start
function search(nums: number[], target: number): number {
    let left = 0
    let right = nums.length -1
    let middle = 0
     // 左閉右閉
    while(left <= right) {
      middle = Math.floor((left + right)/2)
      if(nums[middle] < target) left = middle + 1
      if(nums[middle] > target) right = middle - 1
      if(nums[middle] === target) return middle
    }
    return -1
};
// @lc code=end
