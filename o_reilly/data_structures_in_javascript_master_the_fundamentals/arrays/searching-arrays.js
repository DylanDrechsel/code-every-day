// return ture if the given array contains the given value
// contains([14, 55, 67, 88], 67) -> true
// contains([14, 55, 67, 88], 66) -> false

const contains = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        } 
    }
    return false
}

console.log(contains([], 67));
console.log(contains([14, 55, 67, 88], 67));
console.log(contains([14, 55, 67, 88], 66));


// returns true if the array is sorted in ascending order
// where each element is greater or equal to the element preceding it
const isSorted = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            return false
        }
    }
    return true
}

console.log(isSorted([]))
console.log(isSorted([1]))
console.log(isSorted([1, 2]));
console.log(isSorted([1, 2, 3, 4, 5]));
console.log(isSorted([1, 2, 4, 5, 3]));