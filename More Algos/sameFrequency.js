// takes two pos ints and find ouf if nums have the same amount of digits

function sameFrequency(num1, num2) {
    // turn nums into string to iterate
    // check if lenght is equal if not frequency is false
    // two counters empty objects
    // two indepenent loops
    num1 = num1.toString()
    num2 = num2.toString()
    if (num1.length !== num2.length) {
        return false
    }

    let count1 = {}
    let count2 = {}

    for (let i = 0; i < num1.length; i++) {
        count1[num1[i]] = (count1[num1[i]] || 0) + 1
    }
    for (let j = 0; j < num1.length; j++) {
        count2[num2[j]] = (count2[num2[j]] || 0) + 1
    }
    for (let key in count1) {
        if (count1[key] !== count2[key]) {
            return false

        } else {
            return true
        }
    }
}
console.log(sameFrequency(182, 281));
