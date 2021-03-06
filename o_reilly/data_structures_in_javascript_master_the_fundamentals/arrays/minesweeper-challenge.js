const minefield = [
	['*', '*', '', ''],
	['*', '*', '', ''],
	['', '', '*', ''],
	['', '', '', ''],
];

// The output should print the fallowing
// **20
// **31
// 23*1
// 0111

const minesweeper = (minefield) => {
    const getCell = (row, col) => {
        if (row < 0 || col < 0) return 0 
        if (row >= minefield.length) return 0
        if (col >= minefield[row].length) return 0
        if (minefield[row][col] === '*') return 1
        return 0
    }


    for (let row = 0; row < minefield.length; row++) {
        let line = ''

        for (let col = 0; col < minefield[row].length; col++) {
            if (getCell(row, col) === 1) {
                line += '*'
            } else {
                let bombs = 0

                // top-left, top, top-right
                bombs += getCell(row - 1, col + 1)
                bombs += getCell(row - 1, col);
                bombs += getCell(row - 1, col - 1);

                // left, right
                bombs += getCell(row, col - 1);
                bombs += getCell(row, col + 1);

                // bot-left, bot, bot-right
                bombs += getCell(row + 1, col + 1)
                bombs += getCell(row + 1, col);
                bombs += getCell(row + 1, col - 1);

                line += bombs
            }
        }

        console.log(line)
    }
}

console.log(minesweeper(minefield))