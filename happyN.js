var isHappy = function (n, counter = 0) {
    result = false;
    if (counter < 8) {
        let arr = n.toString().split('').map(n => n * n)
        let sum = arr.reduce((a,b) => a + b, 0)

        if (sum === 1) {
            result = true;
            return result
        } else {
            counter ++
            isHappy(sum, counter)
        }
    }
    return result
};

console.log(isHappy(19));
