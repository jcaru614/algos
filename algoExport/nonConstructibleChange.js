function nonConstructibleChange(coins) {
	// Write your code here.
	coins.sort((a, b) => a - b);
    console.log(coins)
	for (let i = 0; i < coins.length; i++) {
		if(coins[i + 1] > coins[i] + 1) {
			console.log("space")
		}
		
	}
    
	return 1;
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
