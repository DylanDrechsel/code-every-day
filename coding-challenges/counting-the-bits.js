

const countingTheBits = (num) => {
    const binary = (num >>> 0).toString(2);
    binaryArray = binary.split('')
    let count = 0

    binaryArray.forEach((index) => {
        if (index === '1') {
            count = count + 1
        }
    })
    return count
}