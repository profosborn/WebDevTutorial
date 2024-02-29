// USER INPUT

// alert("Hello world!");

/* let myBoolean = confirm("OK === True\nCancel === False");
console.log(myBoolean); */

/* let name = prompt("Please enter your name.");
console.log(name ?? "You didn't enter your name."); */

let myName = prompt("Please enter your name.");
if (myName) {
    console.log(myName.length);
    console.log(myName.trim().length);
    console.log(myName.trim());
} else {
    console.log("You didn't enter your name.");
}