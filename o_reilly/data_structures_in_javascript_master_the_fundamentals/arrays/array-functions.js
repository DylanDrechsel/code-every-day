// Consider these cases when you're writing a function that deals with an array
// what if the array is empty?
// what if there is just one value in the array?
// what if there are two values
// what if there are many values

const sumDelta = (arr) => {
    let total = 0
    for (let i = 0; i < arr.length - 1; i++) {
        let v1 = arr[i]
        let v2 = arr[i + 1]
        let delta = Math.abs(v1 - v2)
        total += delta
    }
    return total
}

console.log(sumDelta([]));
console.log(sumDelta([9]));
console.log(sumDelta([9, 12]));
console.log(sumDelta([2, 6, 12, 19]))