var days = ["Monday", "Tuesday", "Wednesday"];
var tasks = [];
console.log(days);
console.log(tasks);


for (var i = 0; i < days.length; i++){
  tasks.push([]);
}
var start = prompt("Do you want to add tasks for the week?");

function startQuestion(){
  var welcome = prompt("Do you want to update your schedule?");
    if(welcome === "yes"){
      console.log("yes");
    } else if(welcome === "no"){
      console.log("no")
    } else{
      startQuestion();
    }
}

startQuestion();

function taskQuestion(){
  var whatTask = prompt("Do you want to add a task for " + days[i])
}



// function addToSchedule(){
//   console.log("adding to list");
//   var newItem = prompt("What task do you want to add?");
//   if(newItem.length > 0){
//     document.getElementById("List").innerHTML += "<li>" + newItem + "</li>";
//     items.push(newItem);
//     console.log(items);
//   } else {
//     console.log("Please make sure you input a value");
//   }
// }


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
