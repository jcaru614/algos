var isPalindrome = function (X) {
    let x = X.toString()
    let m = Math.floor(x.length / 2)
    let j = x.length - 1
    for (i = 0; i < m; i++) {
        console.log('j inside forloop', j)
        if (x[i] == x[j]) {
            console.log('x[i] = ', x[i], 'x[j] = ', x[j])
            j--
        } else {
            console.log('not palidrome')
            return false;
        }
    }
    return true;
};

console.log(isPalindrome(13531));
