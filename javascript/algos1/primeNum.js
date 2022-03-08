// How would you verify a prime number?
const primeNum = (n) => {
    let divisor = 2
	for (let i = 2; i < n; i++) {
		if (n % divisor === 0) return false;
		else divisor++
	}
    return true
};
console.log(primeNum(9));
