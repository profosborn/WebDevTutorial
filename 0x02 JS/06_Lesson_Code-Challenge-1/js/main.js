/* CODE CHALLENGE
Write a JavaScript code that will return a random letter from your name */

console.log("Osborn".charAt(Math.floor(Math.random() * 6)));


// Let's make the code work for all names
const anyName = "Theophilus";
console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)));