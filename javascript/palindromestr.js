var isPalindrome = function(S) {
    let s = S.toLowerCase();
    let j = s.length-1
    for (let i = 0; i < s.length; i++) {
        if (s[i] == s[j]) {
            j--
        } else {
            return false;
        }
        
    }
    return true;
};

console.log(isPalindrome("ababa"))