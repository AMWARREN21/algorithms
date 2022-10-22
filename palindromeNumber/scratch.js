// Given an integer num, return true if num is palindrome integer.

const isPalindrome = (num) => {
    let stringNum = String(num)
    let reverseString = stringNum.split("").reverse().join("")

    if (stringNum === reverseString) return true

    return false
};

console.log(isPalindrome(121))
console.log(isPalindrome(123))