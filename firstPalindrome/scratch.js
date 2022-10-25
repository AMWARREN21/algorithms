// Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

const firstPalindrome = (words) => {
    for (let i = 0; i < words.length; i++) {
        if (words[i] === words[i].split("").reverse().join("")) {
            return words[i]
        }
    }
    return ""
};