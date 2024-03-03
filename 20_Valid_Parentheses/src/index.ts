function isValid(s: string): boolean {
    let nMap = new Map([
        ["(", ")"],
        ["{", "}"],
        ["[", "]"]
    ]);
    
    for(let i = 0; i < s.length - 1; i += 2){
        if(s[i+1] !== nMap.get(s[i])){
            console.log(`S +1: ${s[i+1]}`);
            console.log(`S: ${s[i]}`);
            console.log(`Map: ${nMap.get(s[i])}`)
            return false
        };
    }
    
    return true;
};

console.log(isValid("{[]}"));