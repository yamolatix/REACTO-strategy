const arr1 = [1, 2, 3, 4];
const arr2 = [[2, 4], [1], [4, 2, 1]];
const arr3 = [2, [3, 4], 5, [-3, [6, [4, 5]]]];

const mdArraySum = (arr) => arr.reduce((a, b) => a + (Array.isArray(b) ? mdArraySum(b) : b), 0)

console.log("arr1: ", mdArraySum(arr1))
console.log("arr2: ", mdArraySum(arr2))
console.log("arr3: ", mdArraySum(arr3))