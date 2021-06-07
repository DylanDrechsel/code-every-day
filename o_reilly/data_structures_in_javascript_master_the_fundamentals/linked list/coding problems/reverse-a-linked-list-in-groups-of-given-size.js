// Input: 
// linked list: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> null 
// k = 3

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

	reverse(k, root = this.root) {
		if (this.root === null) {
			return null;
		}

		let current = root;
		let next = null;
		let prev = null;
		let count = 0;

		while (count < k && current != null) {
			next = current.next;
			current.next = prev;
			prev = current;
			current = next;
			count++;
		}

		if (next != null) root.next = this.reverse(k, next);

		return prev
	}
}

let l2 = new LinkedList();
for (let i = 8; i > 0; i--) {
	l2.prepend(i);
}

console.log(l2.toString());
l2.reverse(3)
console.log(l2.toString());