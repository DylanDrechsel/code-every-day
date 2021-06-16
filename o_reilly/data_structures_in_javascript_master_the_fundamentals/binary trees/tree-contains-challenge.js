class TreeNode {
	constructor(data, left = null, right = null) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
}

class Tree {
	constructor() {
		this.root = null;
	}

	// visit every node in the tree and add each data value to the array result
	collect() {
		return this._collect(this.root, []);
	}

	// the underscore here indicates people should not use this function themselves
	// this 'simulates' a private function that should only be called from the Tree class itself
	// people should use the 'collect' function which calls this one
	_collect(current, result) {
		// base case: if there is no node return the array
		if (current === null) {
			return result;
		}

		// add the current node to the array
		result.push(current.data);

		// recursive left and right
		this._collect(current.left, result);
		this._collect(current.right, result);

		// returns the array
		return result;
	}

	// use a public/private function pair to iterate through the entire tree
	// visiting every node and totaling the value of all data properties.
	// get the sum of all .data values of every node.
	sum() {
		return this._sum(this.root);
	}

	_sum(node) {
		if (node === null) {
			return 0;
		}

		return node.data + this._sum(node.left) + this._sum(node.right);
	}

    // returns true of false depending on if the tree contains the given value
    contains(value) {
        return this._contains(this.root, value)
    }

    _contains(node, value) {
        if (node === null) {
            return false
        } else if (node.data === value) {
            return true
        }

        return this._contains(node.left, value) || this._contains(node.right, value);
    }
}

let n1 = new TreeNode(32);
let n2 = new TreeNode(92);
let n3 = new TreeNode(13);
let n4 = new TreeNode(44);
let n5 = new TreeNode(87);

let tree = new Tree();
tree.root = n1;
n1.left = n2;
n1.right = n3;
n3.right = n4;
n4.left = n5;

console.log(tree.collect());
console.log(tree.sum());
console.log(tree.contains(87));
console.log(tree.contains(86));
