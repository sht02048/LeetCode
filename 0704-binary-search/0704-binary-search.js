/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target, left = 0) {
    if (nums.length === 0) {
        return -1;
    }
    
    const middleIndex = Math.floor(nums.length / 2);
    const middleNumber = nums[middleIndex];

    if (middleNumber === target) {
        return left + middleIndex;
    }

    if (nums.length === 1) {
        return -1;
    }

    if (middleNumber < target) {
        const arr = nums.slice(middleIndex + 1);
        return search(arr, target, left + middleIndex + 1);
    } else {
        const arr = nums.slice(0, middleIndex);
        return search(arr, target, left);
    }
};
