// TASK 6: Create a script that lists everyone in the class from a prompt, 1 prompt per name

var classList = [];

addClassmate();

function addClassmate(){

  var newMember = prompt("Who's in Richard's class?");
  if(newMember.length > 0){
    document.getElementById("richardsClass").innerHTML += "<li>" + newMember + "</li>";
    classList.push(newMember);

  } else {
    console.log("Please make sure you input a value");
  }
}

// Here's Richard's solution
// He prompts for number of students, then uses a for loop
// numberOfStudents = parseInt(prompt("How many students are in the class?"));
//
// var list = document.getElementById('studentsNames');
// for (var i = 0; i < numberOfStudents; i++) {
//   var name = prompt('What is student #' +(i+1) +'s name?');
//   list.innerHTML += '<li>'+name+'</li>';
// }
