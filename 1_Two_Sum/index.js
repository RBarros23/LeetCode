"use strict";
console.log(twoSum([2, 7, 11, 15], 1));
function twoSum(nums, target) {
    const nMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (nMap.has(target - nums[i])) {
            return [nMap.get(target - nums[i]), i];
        }
        nMap.set(nums[i], i);
    }
    return [];
}
;
