// TASK 1
// Create a script which checks to see if someone is old enough to by alcohol

checkAge();

function checkAge(){
  var drinkAge = 18;
  var userAge = parseInt(prompt("How old are you?"));
  if (userAge >= drinkAge){
    console.log("Congrats! You're old enough to buy booze!");
  } else if (userAge < drinkAge){
    console.log("Sorry, you're too young to buy booze.");
  } else {
    checkAge();
  }
}
