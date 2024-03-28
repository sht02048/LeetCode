/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let count = 0;

    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] === val) {
            nums[i] = 101;
            continue;
        }

        count += 1;
    }

    nums.sort((a, b) => a - b);

    return count;
};