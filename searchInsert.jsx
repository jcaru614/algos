var searchInsert = function(arr, target) {
    console.log(arr.length);
    let pivot = Math.floor(arr.length/2)
    if (target < arr[pivot]) {
        for (let i = pivot; i > 0; i--) {
            if (arr[i] === target) {
                return i;
            }
            if (arr[i] < target && arr[i+1] > target) {
                return ("should be in index " + (i+1))
            }
        }
    }
    if (target > arr[pivot]) {
        for (let i = pivot; i < arr.length; i++) {
            if (arr[i] === target) {
                return i;
            }
            if (arr[i] > target && arr[i-1] < target) {
                return ("should be in index " + (i-1)) 
            }            
        }
    }
};

console.log(searchInsert([1,2,3,5,6,7,8,9,12,13,14,16,17,19,20,21,24,29,45],25))