// Given an integer n, return any array containing n unique integers such that they add up to 0.
// Input: n = 5
// Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].


var sumZero = function (n) {
      if (n === 0 || n === 1) {
        return [0]
      } else {
        let arr = []
        let sum = 0
        for (let i = 0; i < n - 1; i++){
          arr.push(i+1)
          sum += i+1
        }
        arr.push(-Math.abs(sum))
        return arr
      }
    };
    console.log(sumZero(5));
    
    