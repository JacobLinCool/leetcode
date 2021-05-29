/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    // 兩陣列長度
    const m = nums1.length,
        n = nums2.length;
    // 指針，記錄當前兩陣列位置
    let p1 = 0,
        p2 = 0;
    if ((m + n) % 2) {
        // 如果 m + n 是奇數，找 1 中位數
        for (var i = 0; i < parseInt((m + n) / 2); i++) {
            // 照大小把兩指針往前推到候選中位數
            if (nums1[p1] === undefined) p2++;
            else if (nums2[p2] === undefined) p1++;
            else if (nums1[p1] > nums2[p2]) p2++;
            else p1++;
        }

        // 從候選中位數中找較小值
        if (nums1[p1] === undefined) return nums2[p2];
        if (nums2[p2] === undefined) return nums1[p1];
        return nums1[p1] > nums2[p2] ? nums2[p2] : nums1[p1];
    } else {
        // 如果 m + n 是偶數，找 2 數合成中位數
        for (var i = 0; i < (m + n) / 2 - 1; i++) {
            // 照大小把兩指針往前推到各候選中位數前 1 數
            if (nums1[p1] === undefined) p2++;
            else if (nums2[p2] === undefined) p1++;
            else if (nums1[p1] > nums2[p2]) p2++;
            else p1++;
        }

        // 找用來合成的數
        let sum = 0;
        for (var i = 0; i < 2; i++) {
            if (nums1[p1] === undefined) sum += nums2[p2++];
            else if (nums2[p2] === undefined) sum += nums1[p1++];
            else if (nums1[p1] > nums2[p2]) sum += nums2[p2++];
            else sum += nums1[p1++];
        }
        return sum / 2;
    }

    return 0;
};
