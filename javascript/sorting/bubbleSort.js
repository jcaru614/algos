// loop through array
// check if index is greater than the index + 1 over
// if so create a temp to hold index needed to swap
// make that index the index plus one
// make the plus one index the temp

const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1]
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

console.log(bubbleSort([7, 4, 2, 3, 5, 6, 8, 9, 1, 3, 6, 3]));

