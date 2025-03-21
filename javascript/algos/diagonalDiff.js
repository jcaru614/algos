// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// For example, the square matrix  is shown below:
// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal = 1+5+9=15. The right to left diagonal = 3+5+9=17. Their absolute difference is |15-17|=2.

function diagonalDifference(arr) {
    let ltr = 0;
    let rtl = 0;
    let end = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        ltr += arr[i][i];
        rtl += arr[i][end];
        end--;
    }

	return Math.abs(ltr - rtl);
}

console.log(diagonalDifference([ 
	[1, 2, -3], 
	[4, 5, 6], 
	[7, 8, 9]]));
