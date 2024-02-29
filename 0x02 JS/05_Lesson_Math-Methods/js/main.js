// MATH METHODS AND PROPERTIES

console.log(Math.PI);                       // Gives the value of PI
console.log(Math.trunc(Math.PI));           // Removes the decimal part of a number
console.log(Math.round(Math.PI));           // Round the number to a whole number
console.log(Math.round(3.4));
console.log(Math.ceil(3.4));                // Round the number to the next digit, not taking into consideration the value of the decimal part
console.log(Math.floor(3.9));               // Round the number to the to the whole number, removing the decimal part
console.log(Math.pow(2, 5));                // Power of numbers, for instance 2 exponent 5
console.log(Math.min(2, 5, 9, 0.1, 8));     // The minimum number in the selection
console.log(Math.max(2, 5, 9, 0.1, 8));     // The biggest number in the selection
console.log(Math.random());                 // Provides a sudo random number from 0 to 1 - Range starts from 0 and does not include 1

// From 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);

// EXPERT ADVICE
/* Choose Math.floor() NOT Math.ceil() for generating a random number from 1 to 10.
Math.random() returns a range from 0 to 1 that includes 0 but not 1.

Math.ceil(Math.random() * 10) has a chance of resulting in zero
Math.floor((Math.random() * 10) + 1) is the way to go! */