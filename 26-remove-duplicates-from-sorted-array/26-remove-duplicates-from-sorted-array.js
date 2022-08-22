/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let prev = null;
    const k = nums.length;
    for (let i = 0; i < k; i++) {
        if (prev === nums[i]) {
            continue;
        }
        prev = nums[i];
        nums.push(nums[i]);
    }
    nums.splice(0, k);
};