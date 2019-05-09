// function yourName() {
//   // console.log("Button has been clicked");
//   var name = prompt("What is your name?");
//   var age = prompt("What is your age?");
//   console.log(name);
//   welcome(name, age);
// }
// // name is a LOCAL VARIABLE; How can we use it outside the above function?
// // Now we are passing the "name" variable into the "welcome" function.
// // x (or whatever, inside the welcome function) means the function expects a variable inside it
//
// function guest(){
//   var age = prompt("What is your age?");
//   welcome("guest", age);
// }
//
// function welcome(x, y){
//   console.log(x);
//   console.log("Hello " + x + ", you are " + y + " years old");
// }
//
// function register() {
//   var username = prompt("Please enter username");
//   var usernameValid = validate(username, 4);
//   console.log(usernameValid);
//   if (usernameValid === false){
//     console.log("Your username is invalid");
//     return;
//     // "return" stops running the function; returns to browser; endpoint of logic tree branch
//   }
//
//   var password = prompt("Please enter password");
//   var passwordValid = validate(password, 6);
//   if (passwordValid === false){
//     console.log("Your password is invalid");
//     return;
//   }
//
// console.log("You're good to go and all registered.")
//
// }
//
// function validate(value, minLength){
//   if(value.length >= minLength){
//     return true;
//   } else {
//     return false;
//   }
// }


// // OBJECTS: a very useful data type that holds other data types
// var carType;
// var carColour;
// var carYear;
// // here, curly brackets mean it's an object
// var car = {
//   type: "Honda",
//   colour: "dark metallic grey",
//   year: 2018,
//   warrant: false,
//   owners: ["Sam", "Jack", "Jess"]
// }
// // a KEY is a property of the object (e.g. "type", "colour")
// console.log(car);
// console.log(car.year);
// console.log(car["year"]);
// // Either of the above syntax methods is acceptable
// // You can change values
// car.year = 2019;
// console.log(car.year);
// // Add new value
// car.km = 10000;
// console.log(car);
//
// var items = [
//   {
//     name: "Apples",
//     price: 2.50,
//     inStock: true
//   },
//   {
//     name: "Oranges",
//     price: 1.45,
//     inStock: false
//   },
//   {
//     name: "Pears",
//     price: 3.00,
//     inStock: true
//   }
//
// ];

// for (var i = 0; i < items.length; i++) {
//   console.log(items[i]);
//   if(items[i].inStock === true){
//   document.getElementById("list").innerHTML += "<li>" + items[i].name + "- $" + items[i].price + "</li>"
//   }
// }

var weekSchedule = [
  {
    day: "Monday",
    tasks: ["Cleaning", "Shopping"]
  },
  {
    day: "Tuesday",
    tasks: ["Walking dog"]
  },
  {
    day: "Wednesday",
    tasks: ["Gym", "Homework", "Training"]
  },
  {
    day: "Thursday",
    tasks: ["Mow lawn", "Fix bathroom"]
  }
]

for (var i = 0; i < weekSchedule.length; i++) {
  console.log(weekSchedule[i].day);
  // console.log(weekSchedule[i].tasks);
  for (var a = 0; a < weekSchedule[i].tasks.length; a++) {
    console.log(weekSchedule[i].tasks[a]);
  }
}


// var day = ["Monday", "Tuesday", "Wednesday", "Thursday"];
// var tasks = [["Cleaning", "Shopping"], ["Walking dog"], ["Gym", "Homework", "Training"], ["Mow lawn", "Fix bathroom"]];
//
// for (var i = 0; i < day.length; i++) {
//   console.log(day[i]);
// }
//
// for (var i = 0; i < tasks.length; i++) {
//   console.log(tasks[i]);
// }

// document.write("<ul>");
//     for (var i = 0; i < weekSchedule.length; i++) {
//         document.write("<li>" + weekSchedule[i]);
//             document.write("<ul>");
//                 if(weekSchedule[i].length === 0){
//                     document.write("<li>No tasks today!</li>");
//                 } else {
//                     for (var a = 0; a < weekSchedule[i].length; a++) {
//                         document.write("<li>" + weekSchedule[i][a] + "</li>");
//                     }
//                 }
//             document.write("</ul>");
//         document.write("</li>");
//     }
// document.write("</ul>");
