// Given the array nums, obtain a subsequence of the array whose sum of elements is strictly greater than the sum of the non included elements in such subsequence. 

// If there are multiple solutions, return the subsequence with minimum size and if there still exist multiple solutions, return the subsequence with the maximum total sum of all its elements. A subsequence of an array can be obtained by erasing some (possibly zero) elements from the array. 

// Note that the solution with the given constraints is guaranteed to be unique. Also return the answer sorted in non-increasing order.

 

// Example 1:

// Input: nums = [4,3,10,9,8]
// Output: [10,9] 
// Explanation: The subsequences [10,9] and [10,8] are minimal such that the sum of their elements is strictly greater than the sum of elements not included, however, the subsequence [10,9] has the maximum total sum of its elements. 


var minSubsequence = function(arr) {
    if (arr.length <= 1) {
    return arr;
  } else {
    arr.sort(function (a, b) {
      return b - a
    })
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i]
    }
    let newArr = [arr[0]]
    let sumNewArr = newArr[0]
    for (let j = 1; j < arr.length; j++) {
      let temp = sum - sumNewArr
      if(sumNewArr <= temp){
        newArr.push(arr[j])
        sumNewArr += arr[j]
      } else {
        return newArr
      }
    }
  }
};