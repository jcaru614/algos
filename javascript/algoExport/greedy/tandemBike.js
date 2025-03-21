function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
	let totalSpeed = 0;

	redShirtSpeeds.sort((a, b) => a - b);
	blueShirtSpeeds.sort((a, b) => (fastest ? b - a : a - b));

	for (let i = 0; i < redShirtSpeeds.length; i++) {
		const redCyclist = redShirtSpeeds[i];
		const blueCyclist = blueShirtSpeeds[i];
		totalSpeed += Math.max(redCyclist, blueCyclist);
	}
	return totalSpeed;
}

console.log(tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], true));
