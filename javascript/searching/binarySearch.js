
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