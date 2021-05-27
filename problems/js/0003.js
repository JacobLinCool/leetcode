/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // 最長值
    let solution = 0;

    // 紀錄各 char 位置
    let dict = {};

    // 頭尾位置
    let front = 0,
        back = 0;
    for (front = 0; front < s.length; front++) {
        if (dict[s[front]] !== undefined) {
            // 如果 dict 中已經紀錄過 s[front] 的位置，將 back 推至 front
            while (back <= dict[s[front]]) {
                dict[s[back]] = undefined;
                back++;
            }
        } else {
            // 否則計算新最長值
            solution = Math.max(solution, front - back + 1);
        }
        // 在 dict 中紀錄 s[front] 的位置
        dict[s[front]] = front;
    }

    return solution;
};
