// TASK 2
// Create a script which calculates how old someone is based on their birth year.
// 	◦	Redo task #1 but based on birth year.
 // See Richard's version on github; he used a FUNCTION and accounted for invalid year entry

var currentYear = 2019;
var drinkAge = 20;
var yearBorn = parseInt(prompt("In what year were you born?"));

var userAge = currentYear - yearBorn;
console.log("So, you're " + userAge + " years old.");

if (userAge >= drinkAge){
  console.log("Congrats! You're old enough to buy booze!");
} else if (userAge < drinkAge){
  console.log("Sorry, you're too young to buy booze.");
} else {
  console.log("Please refresh the page.")
}
