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
              newarr.push("dojo");
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