const ww = [70, 72, 68, 65, 74, 74, 73]
let maxDelta = Math.abs(ww[0] - ww[1])

for (let i = 0; i < ww.length - 1; i++) {
    let delta =  Math.abs(ww[i] - ww[i + 1])

    if (delta > maxDelta) {
        maxDelta = delta
    }
}

console.log(`Max Delta: ${maxDelta}`)