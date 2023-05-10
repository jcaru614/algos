function classPhotos(redShirtHeights, blueShirtHeights) {
	redShirtHeights.sort((a, b) => b - a);
	blueShirtHeights.sort((a, b) => b - a);
	let front = redShirtHeights[0] < blueShirtHeights[0] ? redShirtHeights : blueShirtHeights;
	let back = redShirtHeights[0] > blueShirtHeights[0] ? redShirtHeights : blueShirtHeights;
	for (const students in back) {
		if (back[students] <= front[students]) {
			return false;
		}
	}
	return true;
}
console.log(classPhotos([5, 8, 1, 3, 4], [6, 9, 2, 4, 5]));
