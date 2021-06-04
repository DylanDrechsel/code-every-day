class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	// O(1) constant time
	isEmpty() {
		return this.head === null;
	}

	// O(1)
	insertFirst(data) {
		const node = new Node(data, this.head);
		this.head = node;
	}

	// O(N)
	size() {
		let count = 0;
		let current = this.head;

		while (current) {
			count++;
			current = current.next;
		}
		return count;
	}

	// O(1)
	getFirst() {
		return this.head.data;
	}

	// O(N)
	getLast() {
		if (!this.head) {
			return null;
		}

		let current = this.head;
		while (current) {
			if (!current.next) {
				return current;
			}
			current = current.next;
		}
	}

    removeFirst() {
        if(!this.isEmpty()) {
            this.head = this.head.next
        }
    }

    removeLast() {
        if (!this.head) {
            return
        }

        if (!this.head.next) {
            this.head = null
        }

        let previous = this.head
        let current = this.head.next

        while (current.next) {
            previous = current
            current = current.next;
        }

        previous.next = null
    }

    insertLast(data) {
        const last = this.getLast()

        if (last) {
            last.next = new Node(data)
        } else {
            this.head = new Node(data)
        }
    }

    getAt(index) {
        let count = 0
        let current = this.head

        while (current) {
            if (count === index) {
                return current
            }
            count++
            current = current.next;
        }
        return null
    }

    removeAt(index) {
        if (!this.head) {
            return
        }

        if (index === 0) {
            this.head = this.head.next
            return
        }

        const previous = this.getAt(index - 1)
        if (!previous || !previous.next) {
            return
        }
        previous.next = previous.next.next
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data)
            return
        }
        if (index === 0) {
            this.head = new Node (data, this.head)
            return
        }
        const previous = this.getAt(index - 1) || this.getLast()
        const current = new Node(data, previous)
        previous.next = current
    }
}

const midpoint = (list) => {
    let slow = list.head
    let fast = list.head

    while (fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}

const l = new LinkedList();
l.insertLast("a");
l.insertLast("b");
l.insertLast("c");
l.insertLast("d");
l.insertLast("e");
console.log(midpoint(l)); // returns {data: 'c'}