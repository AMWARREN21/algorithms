//Given an array of integers, 
//find the pair of adjacent elements that has the largest product and return that product.

function largestProduct(arr) {
    let largestNum = -Infinity
    let leftIndex = 0
    let rightIndex = 1

    for (let i = 0; i < arr.length; i++) {
        if (arr[rightIndex] == undefined) {
            break;
        }
        let product = arr[leftIndex] * arr[rightIndex]
        largestNum = Math.max(largestNum, product)
        leftIndex++;
        rightIndex++;
    }

    return largestNum

}

// console.log(largestProduct([-23, 4, -3, 8, -12]))