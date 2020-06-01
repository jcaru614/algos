// picks a pivot point typically the last or first i where you move all 
// the numbers less than to the left and greater than to the right


// quick sort spread operator **************************************

function quickSortSpread(array) {
    if (array.length < 1) {
        return array;
    }
    const pivot = array[array.length-1];
    const left = [];
    const right = [];

    for (let i = 0; i < array.length-1; i++) {
        if (array[i] < pivot) {
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }
    return [...quickSortSpread(left), pivot, ...quickSortSpread(right)]
    // spread operator acts like concat
    // return quickSortSpread(left).concat(pivot).concat(quickSortSpread(right));
}

console.log(quickSortSpread([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]))



// given an array helper should designate a pivot 
// rearange all elements in array so the values less than pivot go left and larger go right
// the order of elements on either side of pivot doesnt matter
// do not create a new array and return i of pivot

function pivot(array, start = 0, end = array.length - 1) {
    
    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    let pivot = array[start];
    let swapIdx = start;

    for (let i = start + 1; i < end; i++) {
        if (pivot > array[i]) {
            swapIdx++;
            swap(array, swapIdx, i);
        }
    }
    swap(array, start, swapIdx);
    return swapIdx;
}

function quickSort(array, left = 0, right = array.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(array, left, right) //3
        //left
        quickSort(array, left, pivotIndex - 1);
        //right
        quickSort(array, pivotIndex + 1, right);
    }
    return array;
}

console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));
