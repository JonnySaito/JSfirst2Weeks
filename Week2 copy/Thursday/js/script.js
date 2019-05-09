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
var toDoList = [];

function addItem(){
  var newItem = prompt("What do you want to add?");
  toDoList.push(newItem);

  console.log(toDoList);
}


// document.write("<ul>")
//     for (var i = 0; i < days.length; i++) {
//       document.write("<li>" + days[i]);
//         document.write("<ul>");
//           if(tasks[i].length === 0){
//             document.write("<li>Well done! You have no tasks today.</li>");
//           } else{
//             for (var a = 0; a < tasks[i].length; a++) {
//               document.write("<li>" + tasks[i][a] + "</li>")
//             }
//
//           }
//
//         document.write("</ul>");
//       document.write("</li>");
//     }
// document.write("</ul>");
