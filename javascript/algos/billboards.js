// Maximize the total revenue by placing billboards at certain positions, ensuring that no two billboards are placed within minDistance miles of each other.

function maxRevenue(miles, positions, revenues, minDistance) {
	// Initialize an array to store the maximum revenue up to each mile.
	// We add 1 to the array length so we iterate each mile corresponding to the index it matches.
	const maxRevUpToMile = new Array(miles + 1).fill(0);

	// Initialize the index to track the current billboard position.
	// We need to know which billboard we are considering like billboard at mile 6, 7,12 etc
	let currentBillboard = 0;

	// Loop through each mile from 1 to the total number of miles.
	for (let currentMile = 1; currentMile <= miles; currentMile++) {
		// Check if we can place a billboard at the current mile.
		// Ensure we haven't gone past the last position and the current mile matches the next billboard position.
		if (currentBillboard < positions.length && positions[currentBillboard] === currentMile) {
			// Option 1: Include the billboard at this mile.
			// Add current billboard's revenue and check if the previous billboard
			// was placed at least minDistance miles before. Subtract minDistance
			// and 1 more to find the last valid position due to 0-based indexing of maxRevUpToMiles.
			const newRevenue =
				revenues[currentBillboard] +
				(currentMile > minDistance ? maxRevUpToMile[currentMile - minDistance - 1] : 0);

			// Option 2: Skip this billboard.
			// Carry forward the maximum revenue from the previous mile.
			const previousRevenue = maxRevUpToMile[currentMile - 1];
			// Choose the option that gives the maximum revenue.
			maxRevUpToMile[currentMile] = Math.max(newRevenue, previousRevenue);

			// Move to the next billboard position.
			currentBillboard++;
		} else {
			// If no billboard is placed at the current mile, carry forward the previous maximum revenue.
			maxRevUpToMile[currentMile] = maxRevUpToMile[currentMile - 1];
		}
	}
	// Return the maximum revenue achievable for the entire highway the (last mile).
	return maxRevUpToMile[miles];
}

const miles = 20;
const positions = [6, 7, 12, 13, 14];
const revenues = [5, 6, 5, 3, 1];
const minDistance = 5;

console.log(maxRevenue(miles, positions, revenues, minDistance)); // Output: 10
