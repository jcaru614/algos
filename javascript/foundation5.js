
function squareValue(x){
    for(var i=0; i<x.length; i++) {
             x[i]= x[i]*x[i];
    }
     return x;
  }
  y = squareValue([1,2,3]);
  console.log(y); // should log [1,4,9]
    
  y = squareValue([2,5,8]);
  console.log(y); // should log [4,25,64]
 
 //   [1,4,9]
 //   [4,25,64]
 
 
 
 function greater(arr){
    var y = 11;
 for (var i=0; i<arr.length; i++) {
     if (arr[i] > y)
     console.log (arr[i]);
 }
        
 }
 greater([2,4,6,10,30,5,65,100,205]);
 
 
 
 function maxminavg(arr){
        var max = arr[0];
        var min = arr[0];
        var sum = 0;
        for(var i=0; i<arr.length; i++){
          if(arr[i] > max){
            max = arr[i];
            sum = sum + arr[i];
          } else if(arr[i] < min){
            min = arr[i];
            sum = sum + arr[i];
          } else {
            sum = sum + arr[i];
          }
        }
        var avg = sum/arr.length;
        console.log(max);
        console.log(min);
        console.log(avg);
      }
            
    maxminavg([2,8,16,20]);
 
 
 
    function repneg(arr) {
        var newarr = [];
        for(var i=0; i<arr.length; i++) {
            if (arr[i] < 0) {
              newarr.push("joey");
            } else {
                newarr.push(arr[i]);
            }
       } 
        console.log(arr);
       return newarr;
    }
    
    console.log(repneg([2,-5,8,-7,9]));
 
 
    
 
    function remove(arr,start,end) {
        arr.splice(start,end);
        return arr;
    }
    console.log(remove([20,30,40,50,60,70,80],2,4)) 
 
 
 
    function negtozero (arr) {
       for(var i=0; i<arr.length; i++) {
           if (arr[i] < 0) {
               arr[i] = 0;
           }
               
       }
           return arr
   }
   
       console.log(negtozero([-1,2,3,-4,-8,5]));
   
   
   // push shift
   
   
       function fwdDrop (arr) {
           arr.push(0);
           arr.shift();
           return arr;
       }
      
       console.log (fwdDrop([1,2,3,4,5]));
   
   
   
   
   // reverse
   
   
       function reverseValue(arr) {
           var x = arr.length;
           for (var i = 0; i<x/2; i++){
               var temp = arr[x-i-1];
               arr[x-i-1] = arr[i];
               arr[i] = temp;
           }
           return arr;
       }
       
       console.log(reverseValue([1,2,3,4]));
   
   
   
   
   // repeat twice both ways
   
   
   function repeatTwice(arr){
       for (var i = arr.length-1; i>=0; i--){
         arr.splice(i,0,arr[i]);
       }
         return arr;
     
     }
     
     console.log(repeatTwice([1,2,3,4,5,6]));
     
     
     
     function repeatTwice(arr){
         for(var i=0; i<arr.length; i++){
             arr.splice(i,0,arr[i]);
             i++;
           }
           return arr;
     }
     console.log(repeatTwice([1,2,3,4,5,6]));