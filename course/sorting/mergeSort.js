// Merge sort is a sorting algorithm that works by dividing an array into smaller subarrays,
// sorting each subarray, and then merging the sorted subarrays back together to form the final sorted array.

const merge = (arr1, arr2) => {
  let mergedArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length || j < arr1.length) {
    if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }
  return mergedArr;
};

console.log(merge([1, 5, 10], [3, 8, 12, 15]));
