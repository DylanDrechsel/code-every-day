// this class represents each single node
// this class is extreme simple and just models the node
// this class does not have method in it
class ListNode {
	constructor(data, next) {
		this.data = data;
		this.next = next;
	}
}

// this class represents an entire list of nodes
// this class has a property "root" that represents only the first node in the listNode
// this class has methods that operate over the entire list from just the root
class LinkedList {
	constructor() {
		this.root = null;
        this.size = 0
	}

	// returns true of false if there are any nodes in a list
	// O(1) constant time
	isEmpty() {
		return this.rool === null;
	}

	// add a value to the front of the list
	// O(1) constant time
	prepend(data) {
		let node = new ListNode(data);
		node.next = this.root;
		this.root = node;
        this.size++
	}

	// return the size of the list
	// O(N) linear time
	length() {
		let current = this.root;
		let length = 0;

		while (current != null) {
			length++;
			current = current.next;
		}
		return length;
	}

	// returns a string representation of the list
	// O(N) linear time
	toString() {
		let result = 'root -> ';
		let current = this.root;

		while (current != null) {
			result += `${current.data} -> `;
			current = current.next;
		}
		return result + ' null';
	}

	get(index) {
		let current = this.root;
		let count = 0;

		while (current != null) {
			if (count === index) return current.data;
			count++;
			current = current.next;
		}
		return null;
	}

    // O(N) linear time
    // we must move through the list to get to the element we want to remove
    removeAtIndex(index) {
        // prevent people from trying to remove nodes at non-existant indexes
        if (index < 0 || index >= this.size) return

        if (index === 0) this.removeFront()
        else this.removeRest(index)
    
        this.size--
    }

    removeFront() {
        if(!this.isEmpty()) {
            this.root = this.root.next
        }
    }

    removeRest(index) {
        let current = this.root
        let i = 0

        while (current !== null && i < index - 1) {
            current = current.next
            i++
        }
        current.next = current.next.next
    }

}

let l2 = new LinkedList()
for (let i = 10; i >= 0; i--) {
    l2.prepend(i)
}
console.log(l2.toString());
l2.removeAtIndex(7)
console.log(l2.toString());
l2.removeAtIndex(0);
console.log(l2.toString());
l2.removeAtIndex(l2.length() - 1);
console.log(l2.toString());
