// O(N^2)
const containsDuplicates = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[i] === array[j]) {
                return true
            }
        }
    }
    return false
}

// racecar
// O(N)
const isPalindrome = (array) => {
    let index = 0
    while ( index < array.length / 2) {
        let c1 = array[0]
        let c2 = array[aa.length - index]
        if (c1 !== c2) return false
    }
    return true
}