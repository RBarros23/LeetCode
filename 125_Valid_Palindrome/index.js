function isPalindrome(s) {
    var index = 0;
    var lastIndex = s.length - 1;
    while (index < lastIndex) {
        while (index < lastIndex && !isValidDigit(s.charCodeAt(index))) {
            console.log("First char ".concat(s[index]));
            index++;
        }
        while (index < lastIndex && !isValidDigit(s.charCodeAt(lastIndex))) {
            console.log("Second char ".concat(s[lastIndex]));
            lastIndex--;
        }
        var firstValue = s[index].toLowerCase();
        var lastValue = s[lastIndex].toLowerCase();
        if (firstValue !== lastValue) {
            return false;
        }
        index++;
        lastIndex--;
    }
    return true;
}
;
function isValidDigit(code) {
    return ((code >= 97 && code <= 122) ||
        (code >= 65 && code <= 90) ||
        (code >= 48 && code <= 57));
}
console.log(isPalindrome("A man, a plan, a canal, Panama"));
