// TASK 5
// Create an odd and even number checker


numberCheck();

function numberCheck(){
  var inputNumber = prompt("Please input a whole number.");
  if (inputNumber % 2 === 0){
    console.log(inputNumber + " is an even number.");
  } else if (inputNumber %2 === 1){
    console.log(inputNumber + " is an odd number.");
  } else{
    console.log(inputNumber + " is not a whole number. Try again.");
    numberCheck();
  }
}
