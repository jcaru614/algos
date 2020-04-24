// find max sum of sequential numbers in array that are no more then the given number in length

function maxsum(arr, num) {
    if (num > arr.length) {
        return false
    }
    let max = 0;
    for (let i = 0; i < arr.length-num + 1; i++) {
        let tempSum = 0;
        for (let j = 0; j < num; j++) {
            tempSum += arr[i+j]
            console.log("tempSum ", tempSum);
        }
        if (tempSum > max) {
            max = tempSum
        }
        console.log("tempSum ",tempSum, "max ", max);
    }
    return max
}

console.log(maxsum([1,2,3,5,2,7,9,3], 4));
