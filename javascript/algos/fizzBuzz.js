// Given a number as input, print every integer from 1 to that number.
// - If divisible by 2 → print "Fizz"
// - If divisible by 3 → print "Buzz"
// - If divisible by both 2 and 3 → print "Fizz Buzz"

const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      console.log('Fizz Buzz');
    } else if (i % 2 === 0) {
      console.log('Fizz');
    } else if (i % 3 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(12);
