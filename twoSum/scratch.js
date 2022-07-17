//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.

const twoSum = (arr, target) => {
    let current
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        current = arr[i]
        let numNeeded = target - current
        if (obj[numNeeded] != null) {
            return [arr.indexOf(numNeeded), i]
        } else {
            obj[current] = i
        }
    }
}

// let arr = [2, 7, 3, 8, 4]
// let target = 7

// console.log(twoSum(arr, target))



