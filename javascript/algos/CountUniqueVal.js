// accepts sorted array and counts the unique values in array. 

  function countUniqueValues(arr) {
    if (arr.length === 0) {
        return false
    }
    let counter = 0
    let j = 1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[j]) {
            counter += 1
            j++
        }
    }
    return counter
}
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));


