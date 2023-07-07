/*
Remove elements from an array
- Create an array with multiple elements.
- Use the pop() method to remove the last element from the array.
- Use the shift() method to remove the first element from the array.
- Log the array to the console to see the updated elements.

*/

const specialNumbers = [1, 11, 22, 33, 44, 55, 66, 77, 88, 99]

let result = specialNumbers.pop()

console.log(result) // @logs 99;

result = specialNumbers.shift()

console.log(result) // @logs 1;
console.log(specialNumbers) // @logs [ 11, 22, 33, 44, 55, 66, 77, 88 ]
