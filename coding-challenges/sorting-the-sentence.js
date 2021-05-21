var sortSentence = function (s) {
	const ansArray = [];
	const sArray = s.split(' ');

	for (let i = 0; i < sArray.length; i++) {
		let indexPos = sArray[i].slice(-1) - 1;
		let insertString = sArray[i].substring(0, sArray[i].length - 1);
		ansArray[indexPos] = insertString;
	}

	ans = ansArray.join(' ');
	return ans;
};
