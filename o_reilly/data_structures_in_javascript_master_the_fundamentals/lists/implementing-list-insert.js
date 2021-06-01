class List {
	constructor() {
		this.data = new Array(10);
		this.size = 0;
	}

	// add the value to the first-most free position in the data array
	push(value) {
		if (this.size === this.data.length) {
			this.grow();
		}

		this.data[this.size] = value;
		this.size++;
	}

	// removed(index = 1)
	// array = [5, 8, 12, 13, 19]
	// removed = 8
	remove(index) {
		if (this.size === 0) {
			return null;
		}

		// save the value that was at the index
		let removed = this.data[index];
		// scoot all values after over left by 1
		for (let i = index; i < this.size - 1; i++) {
			this.data[i] = this.data[i + 1];
		}
		// manually overwrite the now-stale data
		this.data[this.size - 1] = null;
		// decrement the size to show one item was removed
		this.size--;
		// return the value of the removed item
		return removed;
	}

	grow() {
		// create a new array thats twice as big
		let array = new Array(this.data.length * 2);

		// copy over every value from the old data to the larger array
		for (let i = 0; i < this.data.length; i++) {
			array[i] = this.data[i];
		}
		// set the larger area as the data for the list
		this.data = array;
	}

    add(index, value) {
        if (this.size === this.data.length) {
            this.grow()
        }

        for (let i = this.size; i > index; i--) {
            this.data[i] = this.data[i - 1]
        }
        this.data[index] = value
        this.size++
    }

    contains(value) {
        for (let i = 0; i < this.size; i++) {
            if (this.data[i] === value) {
                return true
            }
        }
        return false
    }

	toString() {
		if (this.size === 0) {
			return '[]';
		} else {
			let result = '';
			for (let i = 0; i < this.size; i++) {
				result += this.data[i] + ' ';
			}
			return `[ ${result} ]`;
		}
	}
}

const ll = new List();
ll.push(5);
ll.push(8);
ll.push(12);
ll.push(13);
ll.push(19);

ll.add(2, 9)

console.log(ll.toString());
console.log(ll.data);

console.log(ll.contains(5))
console.log(ll.contains(9));
console.log(ll.contains(19));
console.log(ll.contains(44));