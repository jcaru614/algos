function nonConstructibleChange(coins) {
	// Write your code here.
	coins.sort((a, b) => a - b);
    console.log(coins)
    
	return 1;
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
