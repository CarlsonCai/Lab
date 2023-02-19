/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
//  方法：雙指針(對向指針)
//  step 
//  1. 建立一個新的資料結構 [{val:1,index:0}] 來保存排序後的原有 index
//  2. 對新的資料結構進行排序 (使用對向指針方法陣列必須是有順序的)
//  3. 建立 left = 0   right = num.length -1
//  4. newNums[left].val + newNums[right].val === target 則返回當前的 index
//  5. newNums[left].val + newNums[right].val > target 則 right--
//  6. newNums[left].val + newNums[right].val < target 則 left++
// 输入：numbers = [2,7,11,15], target = 9
// 输出：[0,1]
function twoSum(nums: number[], target: number): number[] {
    const newNums = nums.map((val,index) => {
        return {
            val,
            index
        }
    }).sort((a,b) => a.val - b.val)
    let left = 0
    let right = nums.length - 1
    while(left < right) {
        if(newNums[left].val + newNums[right].val === target) return [newNums[left].index, newNums[right].index]
        if(newNums[left].val + newNums[right].val > target) right--
        if(newNums[left].val + newNums[right].val < target) left++
    }
    return []
};
// @lc code=end

