let timesTable = [
    [1, 2, 3, 4, 5],
    [2, 4, 6, 8, 10],
    [3, 8, 9, 12, 15],
    [4, 12, 12, 16, 20],
    [5, 16, 15, 20, 25],
];

for (let row = 0; row < timesTable.length; row++) {
    let line = ''

    for (let col = 0; col < timesTable[row].length; col++) {
        let value = timesTable[row][col]
        line += value + " "
    }
    console.log(line)
}