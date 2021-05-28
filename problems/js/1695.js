/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    // 暫存最大總和
    let max = 0;
    // hash table
    let table = {};
    // 子陣列當前總和
    let sum = 0;
    
    // 子陣列頭尾位置
    let front = 0, back = 0;
    for(front = 0; front < nums.length; front++) {
        sum += nums[front];
        if(table[nums[front]] !== undefined) {
            // 如果有紀錄，尾端前推至該紀錄位置的下個位置
            while(back <= table[nums[front]]) {
                table[nums[back]] = undefined;
                sum -= nums[back];
                back++;
            }
        } else {
            // 試圖更新最大總和
            max = sum > max ? sum : max;
        }
        // 記錄位置
        table[nums[front]] = front;
    }
    
    return max;
};
