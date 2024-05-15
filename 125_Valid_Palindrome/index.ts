function isPalindrome(s: string): boolean {
    let index = 0;
    let lastIndex = s.length - 1;

    while ( index < lastIndex ){
        
        while( index < lastIndex && !isValidDigit(s.charCodeAt(index))){
            index++;
        }
        while (index < lastIndex && !isValidDigit(s.charCodeAt(lastIndex))) {
            lastIndex--;
            
        }

        const firstValue = s[index].toLowerCase();
        const lastValue = s[lastIndex].toLowerCase();

        if(firstValue !== lastValue){
            return false;
        }
        index++;
        lastIndex--;
    }
    
    return true;
};


function isValidDigit(code: number): boolean {
    return (
        (code >= 97 && code <= 122) ||
        (code >= 65 && code <= 90) ||
        (code >= 48 && code <= 57)
    );
}


console.log(isPalindrome("A man, a plan, a canal, Panama"));