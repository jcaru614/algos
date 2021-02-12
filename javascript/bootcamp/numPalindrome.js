var numPalindrome = function (word) {
    word = word.toString()
    let mid = Math.floor(word.length / 2)
    let j = word.length - 1
    for (i = 0; i < mid; i++) {
        console.log('j inside forloop', j)
        if (word[i] == word[j]) {
            j--
        } else {
            return false;
        }
    }
    return true;
};

console.log(numPalindrome(13531));




