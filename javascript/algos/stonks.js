// Given an array of stonk prices, find the minimum buy price and the maximum sell price that produce the greatest profit. Cant sell before buy.
const stonks = (array) => {
	let tempPurchase = array[0],
		tempSell;

	for (let i = 1; i < array.length; i++) {
		if (array[i] < tempPurchase) {
			tempPurchase = array[i];
			tempSell = tempPurchase;
		} else if (array[i] > tempSell) tempSell = array[i];
		
	}

	return `buy Price ${tempPurchase} sell Price ${tempSell}`;
};

console.log(
	stonks([100, 200, 205, 295, 222, 245, 229, 80, 245, 270, 222, 90, 210])
);
