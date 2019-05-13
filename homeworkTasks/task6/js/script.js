// TASK 6: Create a script that lists everyone in the class from a prompt, 1 prompt per name

var classList = [];

addClassmate();

function addClassmate(){
  var newMember = prompt("Who is in your class?");
  classList.push(newMember);

}
// console.log(classList);

document.getElementById("container").innerHTML = ("<ul>" + classList + "</ul>");
