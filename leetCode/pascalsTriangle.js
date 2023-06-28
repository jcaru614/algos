/**
 * Generates Pascal's Triangle with a given number of rows.
 * @param {number} numRows - The number of rows in the triangle.
 * @return {number[][]} - The generated Pascal's Triangle.
 */
var generate = function (numRows) {
	// Initialize pascalsTriangle as an empty array to hold the rows

	let pascalsTriangle = [];
	// Loop through each row index from 0 to numRows
	for (let i = 0; i < numRows; i++) {
		// Create a new row with length i + 1
		let newRow = new Array(i + 1);
		// The first element of each row is always 1
		newRow[0] = 1;
		// The last element of each row is always 1
		newRow[newRow.length - 1] = 1;

		// Fill in the middle elements of the row, if any
		// We start from index 1 and go to row.length - 1 because
		// the first and last elements are already set to 1
		for (let j = 1; j < newRow.length - 1; j++) {
			// Get the row above the current row (i - 1)
			let rowAbove = pascalsTriangle[i - 1];
			// Each element is the sum of the two elements directly above it
			newRow[j] = rowAbove[j - 1] + rowAbove[j];
		}
		// Add the constructed row to pascalsTriangle
		pascalsTriangle.push(newRow);
	}

	// Return the completed Pascal's Triangle
	return pascalsTriangle;
};

console.log(generate(5));
