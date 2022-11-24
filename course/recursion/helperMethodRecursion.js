
// helper function is useful so we dont reset results array
// useful pattern for compiling an array or a result you dont wan to reset
const collectOddValues = (arr) => {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    // recursion
    helper(helperInput.slice(1));
  }

  helper(arr);
  return result;
};

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
