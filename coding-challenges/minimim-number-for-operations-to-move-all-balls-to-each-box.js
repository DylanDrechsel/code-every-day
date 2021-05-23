boxes = '110';

var minOperations = function (boxes) {
	let right = 0,
		left = 0;
	let res = new Array(boxes.length);
	let steps = 0;

	for (let i = 0; i < boxes.length; i++) {
		if (boxes[i] == '1') {
			steps += i;
			right++;
		}
	}

	for (let i = 0; i < boxes.length; i++) {
		res[i] = steps;

		if (boxes[i] == '1') {
			right--;
			left++;
		}
		steps += left;
		steps -= right;
	}

	return res;
};
