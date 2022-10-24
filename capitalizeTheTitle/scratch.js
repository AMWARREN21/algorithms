// You are given a string title consisting of one or more words separated by a single space, where each word consists of English letters. Capitalize the string by changing the capitalization of each word such that:

// If the length of the word is 1 or 2 letters, change all letters to lowercase.
// Otherwise, change the first letter to uppercase and the remaining letters to lowercase.
// Return the capitalized title.


const capitalizeTitle = (title) => {
    let wordsArr = title.toLowerCase().split(" ")

    for (let i = 0; i < wordsArr.length; i++) {
        if (wordsArr[i].length > 2) {
            wordsArr[i] = wordsArr[i].charAt(0).toUpperCase() + wordsArr[i].slice(1)
        }
    }

    return wordsArr.join(" ")
};