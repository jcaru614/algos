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
  