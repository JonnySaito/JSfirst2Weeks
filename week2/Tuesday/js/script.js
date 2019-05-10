var shoppingList = ["Apples", "Bananas", "Pears", "Kiwifruit", "Oranges"];
// console.log(shoppingList);
shoppingList.push("Dates");
shoppingList.push("A jumbo jet");
document.write("<h1>This is my shopping list</h1>");
document.write("<ul>");
  document.write("<li>"+ shoppingList[0] + "</li>");
  document.write("<li>"+ shoppingList[1] + "</li>");
  document.write("<li>"+ shoppingList[2] + "</li>");
  document.write("<li>"+ shoppingList[3] + "</li>");
  document.write("<li>"+ shoppingList[4] + "</li>");
document.write("</ul>");

document.write("<ul>");
  for (var i = 0; i < shoppingList.length; i++){
    document.write("<li>" + shoppingList[i] + "</li>");
  }
document.write("</ul>");


var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var tasks = [
    ["Cleaning"],
    ["Homework", "Training", "Shopping"],
    ["Work", "Gym"],
    [],
    ["Cleaning", "Go to pub"]
];

console.log(days[2]);
console.log(tasks[2][1]);
console.log(days);
console.log(tasks);

document.write("<h2>Daily Tasks</h2>");

document.write("<ul>")
    for (var i = 0; i < days.length; i++) {
      document.write("<li>" + days[i]);
        document.write("<ul>");
          if(tasks[i].length === 0){
            document.write("<li>Well done! You have no tasks today.</li>");
          } else{
            for (var a = 0; a < tasks[i].length; a++) {
              document.write("<li>" + tasks[i][a] + "</li>")
            }

          }

        document.write("</ul>");
      document.write("</li>");
    }
document.write("</ul>");


// Line 38: WHEN PUTTING A LOOP WITHIN A LOOP, WE MUST USE A DIFFERENT ITERATING LETTER (E.G. a instead of i)

// FUNCTIONS: a piece of reusable code; happens multiple times (e.g. every time you click a button).
// You can put functions anywhere in your javascript; they don't run until user does an action (e.g. click)
// Unlike variables, functions search the js file for what concerns them



// namePrompt();


function namePrompt(){
  console.log("This is coming from namePrompt")
  var name = prompt("What is your name?");
  console.log("Hello " + name);
  document.getElementById("welcoming").innerHTML += "<h4>Hello " +name+ ", welcome to the site</h4>";
}
