//Given the string, check if it is a palindrome.

function isPalindrome(str) {
    let i = 0
    let newStr = ''
    let strArr = str.split('')
    while (i < str.length) {
        newStr += strArr.pop()
        i++
    }

    if (newStr != str) {
        return false
    } else {
        return true
    }
}

console.log(isPalindrome('racecar'))