// CONDITIONALS: TERNARY OPERATOR

// Syntax
// condition ? ifTrue : ifFalse;

/* let soup = "Chicken Noodle Soup";
let response = soup ? "Yes, we have soup." : "Sorry, no soup today.";
console.log(response); */

// An advanced example
/* let soup = "Chicken Noodle Soup";
let isCustomerBanned = false;
let soupAccess = isCustomerBanned 
    ? "Sorry, no soup for you!" 
    : soup
    ? `Yes, we have ${soup} today.`
    : "Sorry, no soup today."
console.log(soupAccess); */


// Grading Scale Example
/* let testScore = 66;
let myGrade = testScore > 80 
    ? "A"
    : testScore > 79 
    ? "B"
    : testScore > 69 
    ? "C"
    : testScore > 59 
    ? "D"
    : "F";
console.log(`My test grade is a ${myGrade}.`) */

// Rock Papper Scissors
let playerOne = "rock";
let computer = "scissors";
let result = playerOne === computer
    ? "Tie game!"
    : playerOne === "rock" && computer === "paper"
    ? "Computer wins!"
    : playerOne === "scissors" && computer === "rock"
    ? "Computer wins!"
    : "playerOne wins!";
console.log(result);