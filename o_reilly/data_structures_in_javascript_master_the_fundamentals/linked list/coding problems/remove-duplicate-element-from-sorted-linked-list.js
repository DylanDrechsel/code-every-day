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

		while (current != null && current.data != null) {
			result += `${current.data} -> `;
			current = current.next;
		}
		return result + ' null';
	}

	getAt(index) {
		let count = 0;
		let current = this.head;

		while (current) {
			if (count === index) {
				return current;
			}
			count++;
			current = current.next;
		}
		return null;
	}

    // O(N)
	removeDuplicates() {
		let current = this.root;

		while (current != null && current.next) {

			if (current.data === current.next.data) {
				current.next === null;
				current.next = current.next.next;
			} else {
                current = current.next;
            }
        }
    }
}

// let l2 = new LinkedList();
// l2.prepend(2)
// l2.prepend(2);
// l2.prepend(4);
// l2.prepend(5);

// console.log(l2.toString());
// console.log(l2.removeDuplicates());
// console.log(l2.toString());

let l3 = new LinkedList();
l3.prepend(2)
l3.prepend(2);
l3.prepend(2);
l3.prepend(2);
l3.prepend(2);

console.log(l3.toString());
console.log(l3.removeDuplicates());
console.log(l3.toString());