/*
Filter elements in an array
- Create an array with multiple elements.
- Use the filter() method to create a new array containing only specific elements based on a condition.
- Log the filtered array to the console.

*/

const someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const someEvenNumbers = someNumbers.filter((number) => {
  if (number % 2 === 0) {
    return number
  }
});

console.log(someEvenNumbers) // @logs [ 2, 4, 6, 8, 10 ]
