function perm(string1, string2) {
    if (string1.length !== string2.length) {
        return false;
    }
    var temp = [];
    for (let i = 0; i < string2.length; i++) {
        temp.push(string2[i])
    }
    for (let j = 0; j < string1.length; j++) {
        var counter = 0;
        for (let z = 0; z < temp.length; z++) {
            if (string1[j] == temp[z]) {
                counter += 1
                temp.splice(z, 1)
                break;
            }
        }
        if (counter == 0) {
            return false
        }
    }
    return true
}

console.log(perm("apple", "pllae"))