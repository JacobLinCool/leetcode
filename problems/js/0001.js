/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    // 這是個 hash table ，鍵為與 target 差值，值為該差值的位置
    let table = {};

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        // 如果已記錄差 num 就能完成 target 的鍵，就返回
        if (table[num] >= 0) {
            return [table[num], i];
        }

        // 紀錄該差值之位置
        table[target - num] = i;
    }
};
