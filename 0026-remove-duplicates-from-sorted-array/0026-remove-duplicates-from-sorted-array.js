/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let currentNum = -101;
    let count = 0;

    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] === currentNum) {
            nums[i] = 101;
            continue;
        }

        if (nums[i] > currentNum) {
            currentNum = nums[i];
            count += 1;
        }
    }

    nums.sort((a, b) => a - b);

    return count;
};