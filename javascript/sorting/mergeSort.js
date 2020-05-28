// break up array into halves until you have arrays that are empty or have on element
// call mergeSort recursively until arrays have length is less or equal to 1
// once you have smaller sorted arrays merge thenwith other sorted arrays until full length
// once array has been merged together return the merged sorted array
function merge(arr1, arr2) {
    // takes two sorted arrays and sorts both arrays
    let sortedArr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            sortedArr.push(arr1[i])
            i++;
            // only increment the index that was pushed
        } else {
            sortedArr.push(arr2[j])
            j++;
        }
    }
    // merge as far as we can until we hit end of one of the arrays
    // since its sorted this will push rest of the other array to sortedArr
        while (i < arr1.length) {
            sortedArr.push(arr1[i]);
            i++
            // pushes rest of array
        }
        while (j < arr2.length) {
            sortedArr.push(arr2[j]);
            j++
        }

    return sortedArr;
}


const mergeSort = (array) => {
    if (array.length <= 1) return array
    let mid = Math.floor(array.length / 2)
    console.log(mid);
    let left = mergeSort(array.slice(0, mid));
    // slices from beg to mid recursively until base case is hit and we have many arrays with one element inside
    console.log(left)
    let right = mergeSort(array.slice(mid));
    // slices from mid to end
    console.log(right)

    return merge(left, right)

}

console.log(mergeSort([2, 6, 3, 8, 5, 2, 9, 1, 2]))