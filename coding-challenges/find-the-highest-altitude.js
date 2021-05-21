var largestAltitude = function (gain) {
	let max = 0;
	let res = 0;
	for (let i = 0; i < gain.length; i++) {
		res += gain[i];
		max = Math.max(max, res);
	}
	return max;
};
