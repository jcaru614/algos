/**
 * @param {string | number} val
 * @return {Object}
 */
// Add closures which are functions that remember variables from scope
// Apply method chaining when invoking it.
var expect = function (val) {
	return {
		toBe: (val2) => {
			if (val === val2) {
				return true;
			} else {
				throw new Error('Not Equal');
			}
		},
		notToBe: (val2) => {
			if (val !== val2) {
				return true;
			} else {
				throw new Error('Equal');
			}
		},
	};
};

console.log(expect(5).toBe(5));
