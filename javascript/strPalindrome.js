var isPalindrome = function(string) {
    string = string.toLowerCase();
    let j = string.length-1
    for (let i = 0; i < string.length; i++) {
        if (string[i] == string[j]) {
            j--
        } else {
            return false;
        }
        
    }
    return true;
};

console.log(isPalindrome("ababa"))