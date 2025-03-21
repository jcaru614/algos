// given a sorted array of ints and a target avg determine if there is a pair of values averages to the target avg

function averagePair(array, target) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length; j++) {
            let sum = array[i] + array[j]
            console.log(sum)
            if (sum / 2 === target) {
                return true
            }
        }
    }

}

console.log(averagePair([1, 2, 3], 2.5));
