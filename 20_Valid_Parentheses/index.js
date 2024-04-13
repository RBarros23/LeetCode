"use strict";
function isValid(s) {
    if (s.length % 2 !== 0)
        return false;
    let stack = new Array;
    const startMap = new Map([
        ["(", ")"],
        ["{", "}"],
        ["[", "]"]
    ]);
    for (let c of s) {
        if (startMap.has(c))
            stack.push(c);
        else {
            if (stack.length === 0 || startMap.get(stack.pop()) !== c) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
;
console.log(isValid("{[]}"));
