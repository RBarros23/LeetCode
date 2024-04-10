"use strict";
function containsDuplicate(nums) {
    /**Get an array
     *
     * Iterate throw the array
     * Use a hashmap to only iterate once
     * In each value look inside the hashmap and look for the key
     * If don't find a key Save the numbers inside a hashamp as key
     * If find a key return true
     *
     * If finish the iteration just return false
     *
     * Return true if a number repeat
     * Return false if each number only occurr once
     */
    if (nums.length === 1)
        return false;
    let hmap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (hmap.get(nums[i]) !== undefined)
            return true;
        hmap.set(nums[i], 1);
    }
    return false;
}
;
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
