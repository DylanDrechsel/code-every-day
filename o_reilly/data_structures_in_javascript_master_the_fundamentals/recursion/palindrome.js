const palindrome = (str, start = 0, end = null) => {
    // if no end is provided (first function call)
    // then set it to the index of the last letter
    if (end === null) end = str.length - 1
    
    if (str.length < 2) {
        return true
    }

    if (end <= start) {
        return true
    }

    if (str.charAt(start) !== str.charAt(end)) {
        return false
    }

    return palindrome(str, start + 1, end - 1)
}

console.log(palindrome(''))
console.log(palindrome('a'));
console.log(palindrome('tt'));
console.log(palindrome('tot'));
console.log(palindrome('tacocat'));
console.log(palindrome('boring'));