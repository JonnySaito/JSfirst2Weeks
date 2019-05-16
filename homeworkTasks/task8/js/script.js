// TASK 8:
// (1) Create a script that asks for x amount of people.
// (2) Asks for their ages.
// (3) Then finds the oldest and youngest ages.
// (4) Then finds the average age.

var classSize = parseInt(prompt("How many people are in your class?"));
var classNames = [];
var classAges = [];
var oldestAge = 0;
var youngestAge = 1000;
var totalAge;

function addClassmate(){
  for (var i = 0; i < classSize; i++){
    var nameX = prompt("Please provide a classmate's name.");
    classNames.push(nameX);

    var ageX = parseInt(prompt("What is their age?"));
    classAges.push(ageX);
    document.getElementById("classMembers").innerHTML += "<li>" + classNames[i] + " is " + classAges[i] + " years old.</li>";
  }
}

function oldAndYoung(){
  for (var i = 0; i < classSize; i++){
    if (classAges[i] < youngestAge){
      youngestAge = classAges[i];
    }

    if (classAges[i] > oldestAge){
      oldestAge = classAges[i];
    }
  }
  document.getElementById("oldestYoungest").innerHTML += "<li>The youngest age in the class is " + youngestAge + "</li>";
  document.getElementById("oldestYoungest").innerHTML += "<li>The oldest age in the class is " + oldestAge + "</li>";
}

function averageAge(){
    var totalAge = 0;
    for (var i = 0; i < classSize; i++){
        totalAge =+ totalAge + classAges[i];
    }
    var averAge = parseInt(totalAge / classSize);
    document.getElementById("aveAge").innerHTML += "<li>The average age for the class is " + averAge + "</li>";
}
