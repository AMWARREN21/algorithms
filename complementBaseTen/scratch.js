// The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

const bitwiseComplement = (n) => {
    let binary = n.toString(2)
    let complement = ""

    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === "1") {
            complement += "0"
        } else {
            complement += "1"
        }
    }
    return parseInt(complement, 2)
};