// return the nth fibonocci number
const fib = (n) => {
    // base case
    if (n === 1 || n === 2) {
        return 1
    }

    // recursive step
    return fib(n - 1) + fib(n - 2)
}

console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(9));
console.log(fib(10));