function isAnagram(s: string, t: string): boolean {
    if( s.length !== t.length ) return false;

    let sMap = new Map<string, number>();
    
    // Count occurrences of each character in 's'
    for (const char of s) {
        sMap.set(char, (sMap.get(char) ?? 0) + 1);
    }

    // Decrement counts for 't', and return false if a count goes negative
    for (const char of t){
        const count = sMap.get(char) ?? 0;
        if(count === 0) return false;
        sMap.set(char, count - 1);
    }
    // If we've matched all characters, the anagram condition is satisfied
    return true;
};
isAnagram("anagram", "nagaram");
