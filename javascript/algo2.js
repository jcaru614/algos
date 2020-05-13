// print up to x

function printUpTo(x){
    // your code here
    if(x < 0) {
        return false;
    } else {
        for (var i=0; i < x + 1; i++) {
            console.log(i);
        }
    }            
}
printUpTo(1000); // should print all the integers from 1 to 1000
y = printUpTo(-10); // should return false
console.log(y); // should print false



// print sum
function printSum(x){
    var sum = 0;
    for(var i=0; i<=x; i++) {
            console.log(i);
             console.log(sum);
             sum = sum + i;
             
    }
    return sum;
  }
  y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
  console.log(y) // should print 32640

//   print sum of array

  function printSumArray(x){
    var sum = 0;
    for(var i=0; i<x.length; i++) {
          sum=sum+x[i];
    }
    return sum;
  }
  console.log( printSumArray([1,2,3]) ); // should log 6


// find max value of array

  function max(arr){
    var max = arr[0];
    for(var i=0; i<arr.length; i++) {
      if(arr[i] > max)
      max = arr[i];
    }
    return max;
  }
  console.log( max([1,30,5,7]) ); 