// TASK 8: Create a script that asks for x amount of people.
// And then asks for their ages and finds the oldest and youngest age.
// As well as the average age

var peopleGroup = [];
peopleGroup.length = 5;

function addNames() = {
  var peopleX = parseInt(prompt("Please give me a name."));

  for (var i = 0; i < peopleGroup.length; i++) {
    peopleGroup.push(peopleX);
  }
}
console.log(peopleGroup);

addNames();

// NOT WORKING YET!
