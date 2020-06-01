
// start, end, middle
// middle is start + end / 2 as to get the average of new window each time it slides over
// loop and check if middle is equal to what we want, if so return that index
// if target too small move start pointer up
// if target is too large move end target down
// if target not there return - 1

function binarySearch(array, target) {
    var start = 0;
    var end = array.length - 1;
    var middle;
    while (array[middle] !== target && start <= end) {
        middle = Math.floor((start + end) / 2);
        if (array[middle] === target) {
            return middle
        } else if (array[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return null;
}

console.log(binarySearch([-10, -5, -1, 0, 2, 5, 6, 9, 13, 15, 28, 30, 55, 67, 84, 92, 103], 15));

function binSearch(arr, val) {
    // create a left and a right or min and max 
    // create a while loop that compares if left is less than or equal to right 
    // use math.floor to find minddle
    // check if the array at index is less than or greater than the middle 
    // change value of left or right to the middle plus one or minus one
    let left = 0;
    let right = arr.length - 1
    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        console.log("middle ", middle);
        if (arr[middle] < val) {
            left = middle + 1
            console.log("left ", left);
        } else if (arr[middle] > val) {
            right = middle - 1
            console.log("right ", right);
        } else if (arr[middle] === val) {
            return val
        } else {
            return undefined
        }
    }
}
console.log(binSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 5));
