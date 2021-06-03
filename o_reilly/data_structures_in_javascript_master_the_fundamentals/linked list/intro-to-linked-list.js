// Linked List
// access = O(N)
// search = O(N)
// insertion = O(1)
// deletion = O(1)
// space complexity = 0(N)

// Why do linked list have a constant time for insertion and deletion???

// Array
// [ 12, 34, 39, 40 ]

// Linked List
// [root -> 12 | -> 34] [34 | -> 39] [39 | -> 40] [40 | -> null]
// first box contains the data
// second box contains the refrences to the next node

// insert [36 | ->]
// the inserted element gets added to the end of the list
// the pointers will change to refrence the right node

// [root -> 12 | -> 34] [34 | -> 36] [39 | -> 40] [40 | -> null] [36 | -> 39]

// For easier view
// [root -> 12 | -> 34] [34 | -> 36] [36 | -> 39] [39 | -> 40] [40 | -> null] 
