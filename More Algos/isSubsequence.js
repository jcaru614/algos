// given two strings find if the first string appears in order in the second string

function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (str1.length === 0) {
        return true;
    }
    while (i < str1.length && j < str2.length) {
        if (str2[j] === str1[i]) {
            i++;
        }
        if (i === str1.length) {
            return true;
        } else {
            j++;
        }

    }
    return false;
}

console.log(isSubsequence('hello', 'hello world'))