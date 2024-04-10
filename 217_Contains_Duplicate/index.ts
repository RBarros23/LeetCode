function containsDuplicate(nums: number[]): boolean {
    
    if(nums.length === 1) return false;

    let hmap = new Map<number, number>();
    
    for ( let i of nums){
        if ( hmap.get(i) !== undefined) return true;
        hmap.set(i, 1);
    }

    return false;
};

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));