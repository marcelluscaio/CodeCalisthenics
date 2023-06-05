//Given an array of integers, find the sum of its elements.

function simpleArraySum(ar) {
    return ar.reduce((acc, number) => acc + number, 0)

}