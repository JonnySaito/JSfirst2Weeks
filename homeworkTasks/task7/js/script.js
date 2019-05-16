// TASK 7: Create a script that calculates the average number from an array
	// ◦	Numbers then can be added from a prompt and a new average can be given

var numArray = [25, 55, 35, 45, 95, 75, 65, 85];
var numTotal = 0;
// console.log(numArray);

// FIRST PART:
// for (var i = 0; i < numArray.length; i++) {
//   numTotal = numTotal + numArray[i];
// }
// var numAverage = numTotal / numArray.length;
// document.getElementById("startPara").innerHTML = "The average is: " + numAverage;


// SECOND PART:
for (var i = 0; i < numArray.length; i++) {
  numTotal = numTotal + numArray[i];
}
var numAverage = numTotal / numArray.length;

function addNumber(){
  var newNumber = parseInt(prompt("Add a new number and I'll calculate the new average!"));
  numArray.push(newNumber);
  numTotal = numTotal += newNumber;
  var numAverage = numTotal / numArray.length;
  document.getElementById("newPara").innerHTML = "After adding your number, the new average is " + parseInt(numAverage);
}
