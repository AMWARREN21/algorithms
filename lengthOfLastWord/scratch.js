//Given a string s consisting of words and spaces, return the length of the last word in the string.

const lengthOfLastWord = (s) => {
    let arr = s.split(" ")
    let lastIndex = arr.length - 1

    for (let i = lastIndex; i < arr.length; i--) {
        if (arr[i].length > 0) {
            return arr[i].length
        }
    }
};