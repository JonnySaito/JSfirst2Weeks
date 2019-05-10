// TASK 6: Create a script that lists everyone in the class from a prompt, 1 prompt per name

var classList = [];

addClassMember();

function addClassMember(){
  var newMember = prompt("Who is in your class?");
  classList.push(newMember);
  console.log(classList);
  var moreMembers = prompt("Any more classmates?");
  

  classList.push(moreMembers);
}



// if(moreMembers = true){
//   addClassMember();
// } else{
//   document.write("<ul>" + classList + "</ul>");
// }
