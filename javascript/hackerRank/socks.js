// return the number of pairs in the array. Each number represents a color of a sock.

function sockMerchant(n, ar) {
	let sockObj = {};
	for (let i = 0; i < ar.length; i++) {
		sockObj[ar[i]] ? (sockObj[ar[i]] += 1) : (sockObj[ar[i]] = 1);
	}
	console.log('sockobj', sockObj);
	let numOfPairs = 0;
	for (const key in sockObj) {
		console.log('key ', key);
		console.log('value ', sockObj[key]);
		if (sockObj[key] >= 2) {
			numOfPairs += Math.floor(sockObj[key] / 2);
			console.log('num of pairs ', numOfPairs);
		}
	}

    return numOfPairs;
}

console.log(sockMerchant(7, [1, 2, 1, 2, 1, 1, 3, 1, 1, 1]));
