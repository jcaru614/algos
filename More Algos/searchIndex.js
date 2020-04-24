// search a sorted array for the value and return that value

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

