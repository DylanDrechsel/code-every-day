var countConsistentStrings = function (allowed, words) {
	let ans = 0;

	words.forEach((word) => {
		let isConsistent = true;
		for (let i = 0; i < word.length; i++) {
			const character = word[i];
			if (isConsistent !== false && allowed.indexOf(character) === -1) {
				isConsistent = false;
			}
		}
		if (isConsistent) {
			ans++;
		}
	});
	return ans;
};


const allowed = 'ab'
const words = ['ad', 'bd', 'aaab', 'baa', 'badab']