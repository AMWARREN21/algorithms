// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

var canConstruct = (ransomNote, magazine) => {

    for (let i = 0; i < ransomNote.length; i++) {
        if (magazine.includes(ransomNote[i])) {
            magazine = magazine.replace(ransomNote[i], '')
        } else {
            return false
        }
    }
    return true

};