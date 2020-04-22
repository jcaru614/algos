const charCount = (str) => {
    let result = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase()
        if (result[char] > 0) {
            result[char]++;
        } else {
            result[char] = 1
        }
    }
    return result
}

console.log(charCount('Hello I am Joey'));


const charCount2 = (str) => {
    let result = {};
    for (let char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            if (result[char] > 0) {
                result[char]++
            } else {
                result[char] = 1;
            }
        }
    }
    return result;
}

console.log(charCount2('I am going on a walk'));