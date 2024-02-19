function productExceptSelf(nums) {
    var arr = [];
    var total = 1;
    var zero = 0;
    nums.forEach(function (value) {
        if (value !== 0)
            total = total * value;
        else
            zero++;
    });
    for (var i = 0; i < nums.length; i++) {
        if (zero > 1)
            arr[i] = 0;
        else if (zero === 1)
            arr[i] = nums[i] === 0 ? total : 0;
        else
            (arr[i] = total * (Math.pow(nums[i], -1)));
    }
    return arr;
}
;
function testProductExceptSelf() {
    // Test 1
    var result = JSON.stringify(productExceptSelf([1, 2, 3, 4]));
    var expected = JSON.stringify([24, 12, 8, 6]);
    console.log("Test Case 1: ".concat(result === expected ? 'Passed' : 'Failed'));
    // Test 2
    result = JSON.stringify(productExceptSelf([0, 1, 2, 3, 4]));
    expected = JSON.stringify([24, 0, 0, 0, 0]);
    console.log("Test Case 2: ".concat(result === expected ? 'Passed' : 'Failed'));
    // Test 3
    result = JSON.stringify(productExceptSelf([0, 1, 0, 3, 4]));
    expected = JSON.stringify([0, 0, 0, 0, 0]);
    console.log("Test Case 3: ".concat(result === expected ? 'Passed' : 'Failed'));
}
testProductExceptSelf();
