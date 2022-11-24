// helper function is useful so we dont reset results array
// useful pattern for compiling an array or a result you dont wan to reset
const collectOddValues = (arr) => {
  let newArr = [];

  if (helperInput.length === 0) {
    return newArr;
  }
  if (helperInput[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  // recursion
  newArr = newArr.concat(collectOddValues.slice(1));
  return result;
};

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
