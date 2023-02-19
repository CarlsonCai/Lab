/*
 * @lc app=leetcode id=167 lang=typescript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */
// 输入：numbers = [2,7,11,15], target = 9
// 输出：[1,2]
// @lc code=start
function twoSum2(numbers: number[], target: number): number[] {
    let left = 0
    let right = numbers.length -1
    while(left < right) {
        if(numbers[left] + numbers[right] < target) left++
        if(numbers[left] + numbers[right] > target) right--
        if(numbers[left] + numbers[right] === target) return [left+1, right+1]
    }
    return []
};
// @lc code=end

