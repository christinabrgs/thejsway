//  Following day

let day = prompt('What day is it?')

if (day == 'Monday') {
    console.log('Tomorrow will be Tuesday')
}

else if (day == 'Tuesday') {
    console.log('Tomorrow will be Wednesday')
}

else if (day == 'Wednesday') {
    console.log('Tomorrow will be Thursday')
}

else if (day == 'Thursday') {
    console.log('Tomorrow will be Friday')
}

else if (day == 'Friday') {
    console.log('Tomorrow will be Saturday')
}

else if (day == 'Saturday') {
    console.log('Tomorrow will be Sunday')
}

else if (day == 'Sunday') {
    console.log('Tomorrow will be Monday')
}


// Number comparison


let num1 = Number(prompt('first number'))
let num2 = Number(prompt('second number'))

if (num1 > num2) {
    console.log('${num1} is greater than')
}

if (num1 < num2) {
    console.log('${num2} is greater than')
}

if (num1 === num2) {
    console.log('these numbers are equal')
}

// Number of days in a month

let month = Number(prompt('input a month to know the number of days in that month'))

if (month == 1) {
    console.log('31 Days')
}

else if (month == 2) {
    console.log('28 Days')
}

else if (month == 3) {
    console.log('31 Days')
}