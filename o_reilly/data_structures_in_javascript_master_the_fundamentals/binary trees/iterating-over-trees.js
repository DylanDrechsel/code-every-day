class TreeNode {
    constructor(data, left = null, right = null) {
        this.data = data
        this.left = left
        this.right = right
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    // visit every node in the tree and add each data value to the array result
    collect() {
        return this._collect(this.root, [])
    }

    // the underscore here indicates people should not use this function themselves
    // this 'simulates' a private function that should only be called from the Tree class itself
    // people should use the 'collect' function which calls this one
    _collect(current, result) {
        // base case: if there is no node return the array
        if (current === null) {
            return result
        }

        // add the current node to the array
        result.push(current.data)

        // recursive left and right
        this._collect(current.left, result)
        this._collect(current.right, result)

        // returns the array
        return result
    }
}

let n1 = new TreeNode(32)
let n2 = new TreeNode(92)
let n3 = new TreeNode(13)
let n4 = new TreeNode(44)
let n5 = new TreeNode(87)

let tree = new Tree()
tree.root = n1
n1.left = n2
n1.right = n3
n3.right = n4
n4.left = n5

console.log(tree.collect())
