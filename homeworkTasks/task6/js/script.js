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
