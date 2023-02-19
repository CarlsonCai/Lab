/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
    nums.sort()
    let res:number[][] = []
    for (let i = 0; i < nums.length; i++) {
      let left = i + 1
      let right = nums.length - 1
      if(i > 0 && nums[i- 1] === nums[i]) continue
      while (left < right) {
        if (nums[i] + nums[left] + nums[right] === 0) {
          res.push([nums[i], nums[left], nums[right]])
          while(left < right && nums[left] === nums[left + 1]) left++
          while(left < right && nums[right] === nums[right + 1]) right--
          left++
          right--
        }
        if (nums[i] + nums[left] + nums[right] > 0)  right--
        if (nums[i] + nums[left] + nums[right] < 0) left++
      }
    }
    return res
};
// @lc code=end

