// console.log("js is loaded");

// SCRIPT 1
//
// checkAge();
//
// function checkAge(){
//   var drinkAge = 18;
//   var userAge = parseInt(prompt("How old are you?"));
//   if (userAge >= drinkAge){
//     console.log("Congrats! You're old enough to buy booze!");
//   } else if (userAge < drinkAge){
//     console.log("Sorry, you're too young to buy booze.");
//   } else {
//     checkAge();
//   }
// }


// SCRIPT 2: See Richard's version on github; he used a function and accounted for invalid year entry
// var currentYear = 2019;
// var drinkAge = 20;
// var yearBorn = parseInt(prompt("In what year were you born?"));
//
// var userAge = currentYear - yearBorn;
// console.log("So, you're " + userAge + " years old.");
//
// if (userAge >= drinkAge){
//   console.log("Congrats! You're old enough to buy booze!");
// } else if (userAge < drinkAge){
//   console.log("Sorry, you're too young to buy booze.");
// } else {
//   console.log("Please refresh the page.")
// }

// SCRIPT 3: To Do List
// var taskList = [];
//
// function addToList(){
//   var listItem = prompt("Add a task to your to do list");
//   if (listItem.length > 0){
//       document.getElementById("taskList").innerHTML += "<li>" + listItem + "</li>";
//       console.log(listItem);
//       taskList.push(listItem);
//       console.log(taskList);
//     } else {
//       console.log("Please make sure you input a value");
//     }
// }


// function addItem(){
//   var newItem = prompt("What do you want to add?");
//   toDoList.push(newItem);
//
//   console.log(toDoList);
// }


//SCRIPT 4
// var numberList = [210, 10, 49, 155, 234, 448, 12];
//
// var biggestNumber = 0;
//
// for (var i = 0; i < numberList.length; i++) {
//   if (numberList[i] > biggestNumber) {
//     biggestNumber = numberList[i];
//   }
// }
// console.log("The biggest number is " + biggestNumber);
//
// moreNumbers();
// function moreNumbers(){
//   var newNumber = parseInt(prompt("Please enter a number. Let's see if it's the biggest number."));
//   numberList.push(newNumber);
//   if (newNumber > biggestNumber){
//     biggestNumber = newNumber;
//     console.log("Now " + biggestNumber + " is the biggest number.");
//   } else{
//     console.log(biggestNumber + " is still the biggest number.");
//   }
//
//   if(!newNumber){
//     return;
//   }
//   moreNumbers();
// }
// console.log(numberList);

// SCRIPT 5
