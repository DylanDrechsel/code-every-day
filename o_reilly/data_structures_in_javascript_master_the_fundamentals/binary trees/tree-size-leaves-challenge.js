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

    collect() {
        return this._collect(this.root, [])
    }

    _collect(node, result) {
        if (node === null) {
            return result
        }

        result.push(node.data)

        this._collect(node.left, result)
        this._collect(node.right, result)

        return result
    }

    sum() {
        return this._sum(this.root);
    }

    _sum(node) {
        if (node === null) {
            return 0
        }

        return node.data + this._sum(node.left) + this._sum(node.right)
    }

    contains(value) {
        return this._contains(this.root, value)
    }

    _contains(node, value) {
        if (node === null) {
            return false
        } else if (node.data === value) {
            return true
        }

        return this._contains(node.left, value) || this._contains(node.right, value)
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