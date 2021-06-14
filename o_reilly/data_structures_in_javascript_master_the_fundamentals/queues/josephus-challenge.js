class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class Queue {
	constructor() {
		this.front = null;
		this.tail = null;
        this.size = 0
	}

	isEmpty() {
		return this.front === null;
	}

	enqueue(value) {
        this.size++

		let node = new Node(value);
		if (this.isEmpty()) {
			this.front = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
	}

	dequeue() {
		if (this.isEmpty()) {
			return null;
		}

        this.size--

		// get a refrence to the node that was at the front of the list
		let result = this.front.data;
		if (this.front === this.tail) {
			// if there was just one node left then theres no more front or tail
			this.front = null;
			this.tail = null;
		} else {
			// otherwise, make the front equal to the second thing in the list
			this.front = this.front.next;
		}

		return result;
	}
}

// Write a function that accepts an array of choices
// and an integer n. You should cycle through the choices starting at the beginning
// and counting to n. Everytime n is reached one choice should be removed.
// continue this process counting to n and removing the choice at that
// count until only one choice is left. return that choice.
// [A, B, C, D, E, F] n=3 returns B
// [A, B, C, D, E, F] n=4 returns F
const josephus = (choices, n) => {
    let qq = new Queue()

    // add each choice to the queue
    for (let choice of choices) {
        qq.enqueue(choice)
    }

	// account for starting the 1 count at the second item
	qq.enqueue(qq.dequeue())

    let count = 1
    while (qq.size > 1) {
        let choice = qq.dequeue()

        if (count % n !== 0) {
            qq.enqueue(choice)
        }
        count++
    }

	return qq.dequeue()
};

let choices = 'ABCDEF'.split('')
console.log(josephus(choices, 3))
console.log(josephus(choices, 4));