"use strict";
function isAnagram(s, t) {
    if (s.length !== t.length)
        return false;
    let sMap = new Map();
    let tMap = new Map();
    s.split("").forEach((str) => {
        var _a;
        sMap.get(str) === undefined ? sMap.set(str, 1) : sMap.set(str, ((_a = sMap.get(str)) !== null && _a !== void 0 ? _a : 1) + 1);
    });
    t.split("").forEach((str) => {
        var _a;
        tMap.get(str) === undefined ? tMap.set(str, 1) : tMap.set(str, ((_a = tMap.get(str)) !== null && _a !== void 0 ? _a : 1) + 1);
    });
    console.log(sMap);
    console.log(tMap);
    return false;
}
;
isAnagram("anagram", "nagaram");
