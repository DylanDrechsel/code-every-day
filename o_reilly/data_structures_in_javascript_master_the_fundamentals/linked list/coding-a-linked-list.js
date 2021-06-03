class ListNode {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}

// the "for-loop" for linked lists
const printList = (node) => {
    let current = node

    while (current != null) {
        console.log(current.data)
        current = current.next
    }
}

// accepts a node at the front of a list
// and returns the total sum of all values
const sumList = (node) => {
    let current = node
    let total = 0

    while (current != null) {
        total += current.data
        current = current.next
    }

    return total
}

let n1 = new ListNode(4); // initial: data = 4 , next = null
let n2 = new ListNode(7); // initial: data = 7 , next = null
let n3 = new ListNode(8); // initial: data = 8 , next = null

n1.next = n2 // n1: data = 4 , next = 7
n2.next = n3 // n2: data = 7, next = 8

printList(n1)
console.log(sumList(n1))