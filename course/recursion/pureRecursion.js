// helper function is useful so we dont reset results array
// useful pattern for compiling an array or a result you dont wan to reset

// pure recursio tips: when dealing with arrays use slice, spread and concat
function collectOddValues(arr){
  let newArr = [];
  
  if(arr.length === 0) {
      return newArr;
  }
      
  if(arr[0] % 2 !== 0){
      newArr.push(arr[0]);
  }
      
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1,2,3,4,5])

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
