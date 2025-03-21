function caesarCipherEncryptor(string, num) {
	let cipheredString = '';
	let alphabetMap = {};
	
	for (let i = 0; i < 26; i++) {
		let letter = String.fromCharCode(i + 97);
		alphabetMap[letter] = i;
	}

	for (let i = 0; i < string.length; i++) {
		const letter = string[i];
		const foundValue = alphabetMap[letter];
		const shiftedIndex = (foundValue + num) % 26;
		const encryptedLetter = Object.entries(alphabetMap).find(
			([key, value]) => value === shiftedIndex
		)[0];
		cipheredString += encryptedLetter;
	}

	return cipheredString;
}

console.log(caesarCipherEncryptor('xyz', 2));
