let swap = function(array, index1, index2) {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
  };
  
  let permutationHeap = function(array, result, n) {
    n = n || array.length; // set n default to array.length
    if (n === 1) {
      result(array);
    } else {
      for (var i = 1; i <= n; i++) {
        permutationHeap(array, result, n - 1);
        if (n % 2) {
          swap(array, 0, n - 1); // when length is odd so n % 2 is 1,  select the first number, then the second number, then the third number. . . to be swapped with the last number
        } else {
          swap(array, i - 1, n - 1); // when length is even so n % 2 is 0,  always select the first number with the last number
        }
      }
    }
  };
  
  //
  var output = function(input) {
    console.log(input);
  };
  
  permutationHeap(["a", "b", "c"], output);