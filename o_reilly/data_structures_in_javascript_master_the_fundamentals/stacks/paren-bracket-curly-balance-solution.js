const peek = (stack) => {
    return stack[stack.length - 1]
}

const isBalanced = (str) => {
    let opening = "({["
    let closing = ")}]"
    let stack = []

    for (let i = 0; i < str.length; i++) {
        let letter = str.charAt(i)
        if (opening.includes(letter)) {
            stack.push(letter)
        } else if (closing.includes(letter)) {
            // each character must have a matching opening character
            if (stack.length === 0) {
                return false
            } else {
                let top = peek(stack)
                if (opening.indexOf(top) === closing.indexOf(letter)) {
                    stack.pop()
                } else {
                    return false
                }
            }
        }
    }
    return stack.length === 0
}

console.log(isBalanced('()'))

console.log(isBalanced('('));
console.log(isBalanced('('))
console.log(isBalanced('foo(3 * ((1 + 4) / 2)'));