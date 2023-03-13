
// Write a program that asks the user for his first name and his last name and display them in a sentence
let firstName = prompt('What is your first name?')
let lastName = prompt('What is your last name?')

alert ('Hello, ${firstName} ${lastName}')

// From Celsius to Fahrenheit degrees

let celsius = Number(prompt ('what is the temperature in celsius?'))
let fahrenheit = celsius * 1.8 + 32
console.log('the temp is ' + fahrenheit + 'F')


// Variable swapping

let number1 = 5;
let number2 = 3;
let number3;

number3 = number1
number1 = number2
number2 = number3

console.log(number1); // Should show 3
console.log(number2); // Should show 5