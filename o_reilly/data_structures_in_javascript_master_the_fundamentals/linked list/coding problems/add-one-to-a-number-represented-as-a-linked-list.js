class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
	constructor() {
		this.root = null;
		this.size = 0;
	}

	prepend(data) {
		const node = new Node(data);
		node.next = this.root;
		this.root = node;
		this.size++;
	}

	toString() {
		let result = `root -> `;
		let current = this.root;

		while (current != null && current.data != undefined) {
			result += `${current.data} -> `;
			current = current.next;
		}
		return result + ' null';
	}

    addOne() {
        let current = this.root;

        while (current != null) {
            if (current.data >= 9) {
                current.data = 0
            } else {
                current.data += 1
            }
            current = current.next
        }
    }
}

// Driver Code
let l2 = new LinkedList();
for (let i = 9; i > 0; i--) {
	l2.prepend(i);
}

console.log(l2.toString())
l2.addOne()
console.log(l2.toString());