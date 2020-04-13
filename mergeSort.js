// merge two sorted arrays

const mergeSort = function (arr1, arr2) {
    let singleSorted = [];
    while (arr1.length || arr2.length) {
        if (arr1[0] < arr2[0]) {
            singleSorted.push(arr1[0])
            arr1.shift();
        } else {
            singleSorted.push(arr2[0]) 
            arr2.shift();
        }
    }
return singleSorted
}

console.log(mergeSort([2,4,6,8,9], [5,7,9,15,19]))