// find smallest consecutive sum in array based on given number

const minSubArray = (array, num) => {
    //  loop through both arrays - num length and to num for second loop
    // make counter
    // make temp counter and replace counter with it if temp counter is less than
    // return counter
    if (array.length < num) {
        return false
    } else {
        array.sort((a, b) => a - b)
        console.log("sorted arr ", array);
        var count = 0;
        for (let i = 0; i < num; i++) {
            count += array[i]
            console.log("tempcounter ", count);
        }
        return count
    }
}

console.log(minSubArray([2, 5, 8, 5, 2, 1, 3, 9, 15, 19], 3));
