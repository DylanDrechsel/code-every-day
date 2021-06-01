const randomArray = (max, size) => {
    let result = new Array(size);

    for (let i = 0; i < size; i++) {
        let random = Math.floor(max * Math.random());
        result[i] = random
    }
    return result;
}

let array = randomArray(100, 10)

const tallySort = (array) => {
    // find the max number in the arrayb 
    let max = array[0]
    for (let i = 1; i < array.length; i++) {
        max = Math.max(max, array[i])
    }

    // tally all the numbers
    let tally = new Array(max)
    for (let i = 1; i < array.length; i++) {
        // look at the number in the array
        let value = array[i]

        // use the value of the number as an index into the tally array
        // see if anything is defined there to determine if weve started
        // tallying this number yet
        if (tally[value] === undefined) {
            // set it to zero occurences if weve not seen the number yet
            tally[value] = 0
        }
        // increment how many times weve seen that number
        tally[value]++
    }

    let result = new Array(array.length)
    let index = 0
    for (let i = 0; i < tally.length; i++) {
        let occurences = tally[i]
        let n = 0

        while (n < occurences) {
            result[index] = i;
            index++
            n++
        }
    }
    return result
}

console.log(array)
console.log(tallySort(array))