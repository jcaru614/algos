// store the first element as smallest value so far
// compare this value to next item until you find a smaller number
// if smaller then make the new minimum and continue to end of array

function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var smallest = i; 
        console.log(smallest);
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallest]) {
                smallest = j;
            }
        }
        if (i !== smallest) {
            var temp = arr[i];
            arr[i] = arr[smallest];
            arr[smallest] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([3, 5, 7, 9, 1, 2, 4, 7, 8, 3, 6, 8, 5, 2]))
