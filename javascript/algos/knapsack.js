// Imagine you have a pet cat 🐱 that loves treats. You have N days worth of treat packs, but each day,
// you can only give treats if the total count stays within a limit.

// Problem Statement
// You have N days of treat packs, and each pack contains some treats (treatsPerDay).
// There’s a daily limit on the total treats (maxTreats).
// Your goal is to find the maximum number of treats you can give the cat over N days while respecting the daily limit.
// Parameters
// days (Number) – The number of days.
// treatsPerDay (Array of Numbers) – The number of treats available each day.
// maxTreats (Number) – The maximum number of treats the cat can eat per day.

function maxCatTreats(days, treatsPerDay, maxTreats) {
	const treatsGiven = new Array(days).fill(0);
	for (let i = 0; i < days; i++) {
		treatsGiven[i] = Math.min(treatsPerDay[i], maxTreats);
		console.log(`Day ${i + 1}: Available: ${treatsPerDay[i]}, Given: ${treatsGiven[i]}`);
		console.log(treatsGiven);
		let mTreats = treatsGiven.reduce((sum, treats) => sum + treats, 0);
	}
}

const days = 5;
const treatsPerDay = [3, 10, 2, 8, 5]; // Number of treats available per day
const maxTreats = 6; // Max treats the cat can have per day

console.log('Max Treats:', maxCatTreats(days, treatsPerDay, maxTreats));
