//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
//determine if the input string is valid.

const isValid = (s) => {
    //if no length return true
    if (s.length === 0) return true
    //if odd number length return false
    if (s.length % 2 !== 0) return false
    //hold pairs
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    //store the needed pair
    let comparing = []
    //loop over string
    for (let i = 0; i < s.length; i++) {
        //if its a key in the pairs obj
        if (pairs[s[i]]) {
            //store the needed pair
            comparing.push(pairs[s[i]])
            //check to see if it matches the most recent pair and if it does it will pop the pair off the array
            //if it doesn't equal then return false
        } else if (s[i] !== comparing.pop()) {
            return false
        }
    }
    //return true if all pairs were found or false if they weren't all found
    return !comparing.length

};