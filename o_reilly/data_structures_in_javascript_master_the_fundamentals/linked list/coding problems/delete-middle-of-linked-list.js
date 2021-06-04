class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.root = null
        this.size = 0
    }

    prepend(data) {
        const node = new Node(data)
        node.next = this.root
        this.root = node
        this.size++
    }

    toString() {
        let result = `root -> `
        let current = this.root

        while (current != null && current.data != undefined) {
            result += `${current.data} -> `;
			current = current.next;
		}
		return result + ' null';
    }

    getSize() {
        return this.size
    }

    deleteMid() {
        // if (this.root = null) return null
        let current = this.root
        let mid = 0
        let count = 0

        if (this.size % 2 === 1) {
            mid = Math.floor((this.size / 2))
        } else {
            mid = Math.floor((this.size / 2) + 1)
        }
        
        while (count < mid - 1) {
            count++
            current = current.next
        }
        current.next = current.next.next
    }
}


// Driver Code
let l2 = new LinkedList();
for (let i = 5; i > 0; i--) {
	l2.prepend(i);
}

console.log(l2.toString())
console.log(l2.getSize());
console.log(l2.deleteMid());
console.log(l2.toString());