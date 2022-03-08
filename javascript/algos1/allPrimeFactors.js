// How could you find all prime factors of a number?
const allPrimeFactors = (n) => {
	let primeStorage = [],
		divisor = 2;
	while (n > 2) {
		if (n % divisor == 0) {
			primeStorage.push(divisor);
            console.log("diviser ", divisor)
			n = n / divisor;
            console.log("n ", n)
		} else {
            divisor++
            console.log("diviser ++ ", divisor)
        }
	}
	return primeStorage
};

console.log(allPrimeFactors(20));
