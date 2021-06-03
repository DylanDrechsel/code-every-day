// this class represents each single node
// this class is extreme simple and just models the node
// this class does not have method in it
class ListNode {
    constructor(data, next) {
        this.data = data
        this.next = next
    }
}

// this class represents an entire list of nodes
// this class has a property "root" that represents only the first node in the listNode
// this class has methods that operate over the entire list from just the root
class LinkedList {
    constructor() {
        this.root = null
    }

    // returns true of false if there are any nodes in a list
    // O(1) constant time
    isEmpty() {
        return this.rool === null
    }

    // add a value to the front of the list
    // O(1) constant time
    prepend(data) {
        let node = new ListNode(data)
        node.next = this.root
        this.root = node
    }

    // return the size of the list
    // O(N) linear time
    length() {
        let current = this.root
        let length = 0
        
        while (current != null) {
            length++
            current = current.next
        }
        return length
    }

    // returns a string representation of the list
    // O(N) linear time
    toString() {
        let result = 'root -> '
        let current = this.root

        while (current != null) {
            result += `${current.data} -> `
            current = current.next
        }
        return result + ' null'
    }
}

let list = new LinkedList()
list.prepend(5);
list.prepend(4);
list.prepend(3);
list.prepend(2);
list.prepend(1);
console.log(list.toString())
console.log(list.length());
