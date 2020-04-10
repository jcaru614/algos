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