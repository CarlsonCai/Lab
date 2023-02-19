/*
 * @lc app=leetcode id=524 lang=typescript
 *
 * [524] Longest Word in Dictionary through Deleting
 */
// @lc code=start
// 方法：雙指針(快慢指針)
// 输入：s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]
// 输出："apple"
function findLongestWord(s: string, dictionary: string[]): string {
    let res = ''
    let temp:string[] = []
    let maxLength = 0
    for(let i = 0 ; i < dictionary.length; i++) {
        const isPass = compare(s, dictionary[i])
        if(isPass) {
            temp.push(dictionary[i])
            maxLength = Math.max(maxLength,dictionary[i].length)
        }
    }
    res = temp.filter((item) => item.length === maxLength).sort()[0]
    return res === undefined ? '': res
};

function compare(s:string, dictionary: string) {
    let slowIndex = 0
    let fastIndex = 0
    while(fastIndex < s.length) {
        if(dictionary[slowIndex] === s[fastIndex]) {
            slowIndex++
        }
        fastIndex++
    }
    return slowIndex === dictionary.length
}
// @lc code=end

