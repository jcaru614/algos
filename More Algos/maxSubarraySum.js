// find longest consecutive sum in array based on given number

function maxSubarraySum(array, num) {
    // loop through array
    // loop through rest of array until num
    // length is - num
    // make a count and start it at 0
    if (num > array.length) {
        return false
    }
    let count = 0;
    for (let i = 0; i < array.length - num; i++) {
        TempCount = 0;
        for (let j = 0; j < num; j++) {
            TempCount += array[i + j]
        }
        if (TempCount > count) {
            count = TempCount;
        }
    }
    return count
}
console.log(maxSubarraySum([2, 5, 8, 9, 1, 7, 3], 3))