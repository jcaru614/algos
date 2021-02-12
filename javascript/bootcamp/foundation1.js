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

 function a(x,y){
   return 5;
 }
 console.log(a(5,5))

 //5

 function a(x,y){
   z = []
   z.push(x);
   z.push(y);
   z.push(5);
   console.log(z);
   return z;
}
b = a(2,2)
console.log(b);
console.log(a(6,8));


// [2, 2, 5]
// [6, 8, 5]
// [6, 8, 5]


function a(x){
   z = [];
   z.push(x);
   z.pop();
   z.push(x);
   z.push(x);
   return z;
}
y = a(2);
y.push(5);
console.log(y);

//[2,2,5]


function a(x){
   if(x[0] < x[1]) {
      return true;
   }
   else {
      return false;
   }
}
b = a([2,3,4,5])
console.log(b);

//True



function a(x){
   for(var i=0; i<x.length; i++){
     if(x[i] > 0){
          x[i] = 'Coding';
     }
    }
    return x;
}
console.log(a([1,2,3,4]))


//[Coding,Coding,Coding,Coding]


function a(x){
   for(var i=0; i<x.length; i++){
     if(x[i] > 5){
          x[i] = 'Coding';
     }
     else if(x[i] < 0){
          x[i] = 'joey';
     }
    }
    return x;
}
console.log(a([5,7,-1,4]))


// [5, "Coding", "joey", 4]

function a(x){
   if(x[0] > x[1]) {
    return x[1];
   }
   return 10;
}
b = a([5,10])
console.log(b);

//  10

function sum(x){
   sum = 0;
   for(var i=0; i<x.length; i++){
      sum = sum + x[i];
      console.log(sum);
   }
   return sum;
}

// undefined



function printAverage(x){
   var sum = 0;
   for(var i = 0; i<x.length; i++) {
       sum = sum + x[i];
       }
       var avg = sum / x.length; 
       return avg;
       }

y = printAverage([1,2,3]);
console.log(y); // should log 2
 
y = printAverage([2,5,8]);
console.log(y); // should log 5


//2,5



function returnOddArray(){
   var arr = [];
  for(var i = 1; i<= 255; i++){
      if(i%2 != 0) {
          arr.push(i);
      }
}
   return arr;
}
y = returnOddArray(255);
console.log(y); 

// // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 
// 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 
// 93, 95, 97, 99, 101, 103, 105, 107, 109, 111, 113, 115, 117, 119, 121, 123, 125, 127, 129, 131, 
// 133, 135, 137, 139, 141, 143, 145, 147, 149, 151, 153, 155, 157, 159, 161, 163, 165, 167, 169, 171, 173, 175, 177, 
// 179, 181, 183, 185, 187, 189, 191, 193, 195, 197, 199, …]


    