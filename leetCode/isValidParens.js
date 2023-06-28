var isValid = function (s) {
	// Initialize an empty stack to keep track of opening brackets
	let stack = [];

	// Iterate through each character in the input string
	for (const char of s) {
		// If the character is an opening bracket, push it onto the stack
		if (char === '(' || char === '{' || char === '[') {
			stack.push(char);
		} else {
			// If the character is a closing bracket, we need to check for a matching opening bracket

			// If the stack is empty, it means there's no corresponding opening bracket
			// So the string is invalid
			if (stack.length === 0) return false;

			// Pop the top element from the stack, which should be the last unmatched opening bracket
			const poppedValue = stack.pop();

			// Check if the popped bracket matches the current closing bracket
			// If there's a mismatch, return false
			if (
				(char === ')' && poppedValue !== '(') || // Check for parenthesis and that the popped value is NOT and open parenthesis
				(char === '}' && poppedValue !== '{') || // Check for curly braces and that the popped value is NOT an open bracket
				(char === ']' && poppedValue !== '[') // Check for square brackets
			) {
				return false;
			}
		}
	}

	// After processing all characters, check if the stack is empty
	// An empty stack means all opening brackets were matched and closed correctly
	return stack.length === 0;
};

// Test cases to validate the function
console.log(isValid('()')); // Output: true
console.log(isValid('()[]{}')); // Output: true
console.log(isValid('(]')); // Output: false
console.log(isValid('([)]')); // Output: false
console.log(isValid('{[]}')); // Output: true
