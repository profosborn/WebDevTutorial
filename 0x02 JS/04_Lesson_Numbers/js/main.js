// NUMBERS
// An integer is a whole number
const myNumber = 42;
console.log(myNumber);

// A number with a decimal point is a float which references the "floating point"
const myFloat = 42.0151;
console.log(myFloat);

console.log(myNumber === myFloat);

// A string
const myString = "42";

console.log(myNumber === myString);

// Changing a string datatype to number datatype
console.log(Number(myString));

console.log(myNumber === Number(myString));

console.log(Number("profosborn"));
console.log(Number(undefined));
console.log(Number(true));
console.log(Number(false));

// NUMBER METHODS
// The Number.isInteger() method determines whether the passed value is an integer
console.log(Number.isInteger(myString));

// The Number.parseFloat() method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN
console.log(Number.parseFloat(myString));
console.log(Number.parseFloat(myFloat));
console.log(Number.parseFloat(myNumber));

// The toFixed() method formats a number according to how many decimal points you provide as the parameter
console.log(Number.parseFloat(myString).toFixed(2));
console.log(myFloat.toFixed(2));

// The Number.parseInt() method parses a string argument and returns an integer
console.log(Number.parseInt(myString));

// Chaining = Using several methods chained together
console.log(Number.parseFloat("4.23845abc").toFixed(2).toString());

// NaN is an acronym for Not a Number
// The Number.isNaN() method determines whether the passed value is NaN AND its type is Number.
Number.isNaN();
console.log(Number.isNaN("Osborn"));

// The global isNaN() function determines whether a value is a NaN or not
console.log(isNaN("Osborn"));