function productExceptSelf(nums: number[]): number[] {
    let arr: number[] = [];
    let total: number = 1;
    let zero: number = 0;

    nums.forEach((value) => {
        if(value !== 0) total = total * value;
        else zero ++;
    });

    for(let i = 0; i < nums.length; i++){
        if(zero > 1) arr[i] = 0;
        else if(zero === 1) arr[i] = nums[i] === 0 ? total : 0;
        else(arr[i] = total * (nums[i]**-1));
    }
    return arr;
};


function testProductExceptSelf() {
    // Test 1
    let result = JSON.stringify(productExceptSelf([1, 2, 3, 4]));
    let expected = JSON.stringify([24, 12, 8, 6]);
    console.log(`Test Case 1: ${result === expected ? 'Passed' : 'Failed'}`);

    // Test 2
    result = JSON.stringify(productExceptSelf([0, 1, 2, 3, 4]));
    expected = JSON.stringify([24, 0, 0, 0, 0]);
    console.log(`Test Case 2: ${result === expected ? 'Passed' : 'Failed'}`);

    // Test 3
    result = JSON.stringify(productExceptSelf([0, 1, 0, 3, 4]));
    expected = JSON.stringify([0, 0, 0, 0, 0]);
    console.log(`Test Case 3: ${result === expected ? 'Passed' : 'Failed'}`);
}

testProductExceptSelf();

