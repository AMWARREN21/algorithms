// FizzBuzz
// Log 'fizzBuzz' if divisible by 3 and 5, 'fizz' if divisible by 3, or 'buzz' if divisible by 5
// else log the number

const fizzBuzz = (num) => {
    let arr = []
    for (let i = 0; i <= num; i++) {
        if (i % 15 === 0) {
            arr.push('FizzBuzz')
        } else if (i % 5 === 0) {
            arr.push('Buzz')
        } else if (i % 3 === 0) {
            arr.push('Fizz')
        } else {
            arr.push(i)
        }
    }
    return arr
}

//console.log(fizzBuzz(30))