// Given two binary strings a and b, return their sum as a binary string.


const addBinary = (a, b) => {
    //convert integers from binary to numbers and add them together
    // use '0b' to indicate to BigInt that it is binary
    let num = BigInt('0b' + a) + BigInt('0b' + b)
    // return num converted back to binary
    return num.toString(2)
};