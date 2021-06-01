class List {
    constructor() {
        this.data = new Array(10)
        this.size = 0
    }

    // add the value to the first-most free position in the data array
    push(value) {
        if (this.size === this.data.length) {
            this.grow()
        }

        this.data[this.size] = value
        this.size++
    }

    grow() {
        // create a new array thats twice as big
        let array = new Array(this.data.length * 2)
        
        // copy over every value from the old data to the larger array
        for (let i = 0; i < this.data.length; i++) {
            array[i] = this.data[i]
        }
        console.log(`growing from ${this.data.length} to ${array.length}`)
        console.log(this.toString())
        // set the larger area as the data for the list
        this.data = array
    }

    toString() {
        if (this.size === 0) {
            return '[]'
        } else {
            let result = ''
            for (let i = 0; i < this.size; i++) {
                result += this.data[i] + ' '
            }
            return `[ ${result} ]`
        }
    }
}

const ll = new List()
console.log(ll.toString())
ll.push(42)
console.log(ll.toString());
ll.push(56);
console.log(ll.toString());
ll.push(88);
console.log(ll.toString());

for (let i = 0; i < 100; i++) {
    ll.push(i)
}