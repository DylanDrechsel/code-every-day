const randomSequence = (n) => {
    let sequence = []

    for (let i = 0; i < n; i++) {
        let num = Math.floor(Math.random() * 10)
        sequence.push(num)
    }
    return sequence.join("")
}

const condense = (sequence) => {
    // assume the sequence is dirty to begin with and requires atleast one
    // iteration to check for numbers next to each other that should be condensed
    isDirty = true

    while (isDirty) {
        // assume this will be a clean unchanged iteration with no condenses
        // until we see two numbers next to each other that are a match
        isDirty = false
        
        let nextSequence = ""
        for (let i = 0; i < sequence.length - 1; i++) {
            let c1 = sequence.charAt(i);
            let c2 = sequence.charAt(i + 1)
    
            if (c1 !== c2) {
                nextSequence += c1
            } else {
                isDirty = true
                i++
            }
        }
    
        // account for the last character
        if (sequence.charAt(sequence.length - 2) !== sequence.charAt(sequence.length - 1)) {
            nextSequence += sequence.charAt(sequence.length - 1)
        }
        
        sequence = nextSequence
    }
    return sequence
}

const efficientCondense = (sequence) => {
    // convert the sequence of numbers into a stack-like array
    sequence = sequence.split("")

    // create a second stack and add one thing from the sequence to this stack
    let stack = [sequence.pop()]

    while (sequence.length > 0) {
        let left = sequence.pop()
        let right = stack.pop()

        if (left !== right) {
            stack.push(right)
            stack.push(left)
        }
    }

    // pops everything one-by-one off the new stack back onto
    // the first stack to undo the reverse order
    while (stack.length > 0) {
        sequence.push(stack.pop())
    }

    return sequence.join('')
}

// let sequence = randomSequence(100)
let sequence = '54322346';
let condensed = efficientCondense(sequence);
console.log(sequence)
console.log(condensed)