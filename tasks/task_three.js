/*
Modify elements in an array
- Create an array with multiple elements.
- Use array indexing to access a specific element.
- Modify the element value using assignment.
- Log the array to the console to see the updated value.

*/

const cars = ['Lexus', 'Benz', 'Jeep', 'Range Rover', 'Camry', 'Toyota']

const result = cars[3]
console.log(result) // @logs Range Rover

cars[0] = 'Motorcycle'
console.log(cars) // @logs [ 'Motorcycle', 'Benz', 'Jeep', 'Range Rover', 'Camry', 'Toyota' ]
