// Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4)

function fibonacciGenerator(n) {
    var newArr = [];
    for (var i = 0; i < n; i++) {
        if (i < 2) {
            newArr.push(i);
        } else {
            var num = newArr[i - 1] + newArr[i - 2];
            newArr.push(num);
        }
    }
    return newArr;
}
console.log(fibonacciGenerator(8))


function fib(n) {
    if (n < 2){
      return n
    }
    return fib(n - 1) + fib(n - 2)
  }

 console.log(fib(4))