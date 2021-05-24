function TreeNode(val) {
     this.val = val;
      this.left = this.right = null;
}

var getTargetCopy = function (original, cloned, target) {
	const depthFirstSearch = (original, cloned, target) => {
		if (!original) {
			return null;
		} else if (original == target) {
			return cloned;
		}

		let tmp = depthFirstSearch(original.left, cloned.left, target);
		if (tmp) {
			return tmp;
		}
		return depthFirstSearch(original.right, cloned.right, target);
	};
	return depthFirstSearch(original, cloned, target);
};

tree = [7, 4, 3, null, null, 6, 19];
target = 3;