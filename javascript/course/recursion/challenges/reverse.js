function reverse(str) {
	let revstr = '';

	const helper = (helperStr) => {
		if (helperStr.length === 0) return;
		revstr += helperStr[helperStr.length - 1];
		return helper(helperStr.substring(0, helperStr.length - 1));
	};
	helper(str);
	return revstr;
}

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir')
