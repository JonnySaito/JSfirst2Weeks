// SCRIPT 3: Create a to do list from a prompt

var taskList = [];

function addToList(){
  var listItem = prompt("Add a task to your to do list");
  if (listItem.length > 0){
      document.getElementById("taskList").innerHTML += "<li>" + listItem + "</li>";
      console.log(listItem);
      taskList.push(listItem);
      console.log(taskList);
    } else {
      console.log("Please make sure you input a value");
    }
}


function addItem(){
  var newItem = prompt("What do you want to add?");
  toDoList.push(newItem);

  console.log(toDoList);
}
