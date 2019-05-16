// TASK 9: Create a script which is going to act as a calculator.
// You should be asked for 3 prompts which will then output the end calculation.
// It should be able to do all 4 mathematical options
var firstNumber = parseInt(prompt("Please give me a number"));
var secondNumber = parseInt(prompt("Please give me another number"))

// add 4 buttons for each mathematical operation + - * /

function addNumbers(){
    newNumber1 = (firstNumber + secondNumber);
    console.log(newNumber1);
}

function subtractNumbers(){
    newNumber2 = (firstNumber - secondNumber);
    console.log(newNumber2);
}

function multiplyNumbers(){
    newNumber3 = (firstNumber * secondNumber);
    console.log(newNumber3);
}

function divideNumbers(){
    newNumber4 = (firstNumber / secondNumber);
    console.log(newNumber4);
}
