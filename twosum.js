// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

function twoSum(arr, target) {
   for (let i = 0; i < arr.length; i++) {
       for (let j = 1; j < arr.length; j++) {
           if (arr[i] + arr[j] == target) {
               
               let answer = console.log(i,j);
               return answer;
               
           }
       }
   }
}
    console.log(twoSum([5,11,4,3,7], 8))