// start with the second element in array
// compare second element to the one before and swap if nessesary
// continue to the next element and if it is in the correct order iterate 
// through the sorted portion to place the element in correct place


const insertionSort = (array) => {

    for (let i = 1; i < array.length; i++) {
        let temp = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j];
            j--;
            console.log(array)
        }
        array[j + 1] = temp;
    }
    return array;
};

console.log(insertionSort([2, 5, 8, 9, 7, 12]))
//                               j     i  
