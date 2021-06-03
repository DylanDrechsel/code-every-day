// start: null
// end: 1 -> 2 -> 3
const problem1 = () => {
    let root = null

    let n1 = new ListNode(1)
    let n2 = new ListNode(2);
    let n3 = new ListNode(3);

    root = n1
    n1.next = n2
    n2.next = n3
    printList(root)
}

// start: 1 -> 2 -> 3
// end: 0 -> 1 -> 2 -> 3
const problem2 = () => {
    let root = new ListNode(1, new ListNode(2, new ListNode(3)))

    let zero = new ListNode(0)
    zero.next = root
    root = zero
}

// start: 1 -> 3 -> 4
// end: 1 -> 2 -> 3 -> 4
const problem3 = () => {
    let root = new listNode(1)
    root.next = new ListNode(3)
    root.next.next = new ListNode(4)

    let n2 = new ListNode(2)
    root.next = n2
}

// start: 1 -> 2 -> 3
// end : 1 -> 2 -> 3 -> 4
const problem4 = () => {
    let root = new ListNode(1, new ListNode(2, new ListNode(3)))
    let four = new ListNode(4)

    root.next.next.next = four
}

// start: 1 -> 99 -> 2 -> 3
// end: 1 -> 2 -> 3
const problem5 = () => {
    let root = new ListNode(1, new ListNode(99, new ListNode(2, new ListNode(3))));

    root.next = root.next.next
}