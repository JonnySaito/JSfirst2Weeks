// TASK 9: Create a script which is going to act as a calculator.
// You should be asked for 3 prompts which will then output the end calculation.
// It should be able to do all 4 simple mathematical operations

// FIRST VERSION (works, but uses 4 buttons)
// var firstNumber = parseInt(prompt("Please give me a number"));
// var secondNumber = parseInt(prompt("Please give me another number"));
// var newNumber1, newNumber2, newNumber3, newNumber4;
//
// function addNumbers(){
//     newNumber1 = firstNumber + secondNumber;
//     document.getElementById("calcResult").innerHTML = "<li>" + newNumber1 + "</li>";
// }
//
// function subtractNumbers(){
//     newNumber2 = firstNumber - secondNumber;
//     document.getElementById("calcResult").innerHTML = "<li>" + newNumber2 + "</li>";
// }
//
// function multiplyNumbers(){
//     newNumber3 = firstNumber * secondNumber;
//     document.getElementById("calcResult").innerHTML = "<li>" + newNumber3 + "</li>";
// }
//
// function divideNumbers(){
//     newNumber4 = firstNumber / secondNumber;
//     document.getElementById("calcResult").innerHTML = "<li>" + newNumber4 + "</li>";
// }

// // SECOND VERSION: trying to use if/else statements
var firstNumber = parseInt(prompt("Please give me a number"));
var secondNumber = parseInt(prompt("Please give me another number"));
var mathCalc = prompt("What operation would you like to perform? (Press +, -, *, or /)");
var newNumber1;

// calculateNumbers();
function calculateNumbers(){
  if (mathCalc === "+")
    {newNumber1 = firstNumber + secondNumber;
    document.getElementById("calcResult").innerHTML = '<p>' + firstNumber + ' plus ' + secondNumber + ' equals ' + newNumber1 + '</p>';
    }
    else if (mathCalc === "-")
    {newNumber1 = firstNumber - secondNumber;
    document.getElementById("calcResult").innerHTML = '<p>' + firstNumber + ' minus ' + secondNumber + ' equals ' + newNumber1 + '</p>';
    }
    else if (mathCalc === "*")
    {newNumber1 = firstNumber * secondNumber;
    document.getElementById("calcResult").innerHTML = '<p>' + firstNumber + ' times ' + secondNumber + ' equals ' + newNumber1 + '</p>';
    }
    else if (mathCalc === "/")
    {newNumber1 = firstNumber / secondNumber;
    document.getElementById("calcResult").innerHTML = '<p>' + firstNumber + ' divided by ' + secondNumber + ' equals ' + newNumber1 + '</p>';
    }
    else{
    document.getElementById("calcResult").innerHTML = '<p>Does not compute. Try again!</p>';
    }
}
//
//
//   else{
//
//   }
//   else{
//
//   }
//   else{
//
//   }
//   else{
//
//   }
// }
//
// function add(a,b){
//   return a + b;
// }
//
// function subtract(a,b){
//   return a - b;
// }
//
// function multiply(a,b){
//   return a * b;
// }
//
// function subtract(a,b){
//   return a - b;
// }

//
//
// function subtractNumbers(){
//     newNumber2 = firstNumber - secondNumber;
//     document.getElementById("calcResult").innerHTML = "<li>" + newNumber2 + "</li>";
// }
//
// function multiplyNumbers(){
//     newNumber3 = firstNumber * secondNumber;
//     document.getElementById("calcResult").innerHTML = "<li>" + newNumber3 + "</li>";
// }
//
// function divideNumbers(){
//     newNumber4 = firstNumber / secondNumber;
//     document.getElementById("calcResult").innerHTML = "<li>" + newNumber4 + "</li>";
// }
