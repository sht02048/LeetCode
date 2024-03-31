/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i += 1) {
        const restNumber = target - nums[i];

        if (map.has(restNumber)) {
            return [map.get(restNumber), i];
        }

        map.set(nums[i], i);
    }
};