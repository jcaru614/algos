function nonConstructibleChange(coins) {
	coins.sort((a, b) => a - b);
	if (!coins.length) return 1;
	let coinSum = 0;
	for (coin in coins) {
		if (coins[coin] > coinSum + 1) {
			console.log('19', coinSum);
			return coinSum + 1;
		}
		coinSum += coins[coin];
	}
	return coinSum + 1;
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
// [1, 1, 2, 3, 5, 7, 22]
