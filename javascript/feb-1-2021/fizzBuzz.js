// Given a number as an input not an array of numbers, print out every integer from 1 to that number.
// However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3,
// print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

const fizzBuzz = (num) => {
	for (let i = 0; i <= num; i++) {
		if (i % 2 === 0 && i % 3 === 0) console.log('fizz buzz', i);
		else if (i % 2 === 0) console.log('fizz', i);
		else if (i % 3 === 0) console.log('buzz', i);
		else console.log(i);
	}
};

console.log(fizzBuzz(12));
