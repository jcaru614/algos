// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

var sortedSquares = function (A) {
  let newArr = [];
  for (let i = 0; i < A.length; i++) {
    newArr.push(Math.pow((A[i]), 2))
  }
  newArr.sort(function (a, b) {
    return a - b
  })
  return newArr;
}


console.log(sortedSquares([-7, -3, 2, 3, 11]))