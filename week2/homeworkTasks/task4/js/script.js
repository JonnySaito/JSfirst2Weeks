//SCRIPT 4: (a) Find the biggest element in an array of numbers
	// (b)	Create a script that prompts for a new number which then gets added to the above array and find the biggest number again.

var numberList = [210, 10, 49, 155, 234, 448, 12];

var biggestNumber = 0;

for (var i = 0; i < numberList.length; i++) {
  if (numberList[i] > biggestNumber) {
    biggestNumber = numberList[i];
  }
}
console.log("The biggest number is " + biggestNumber);

moreNumbers();
function moreNumbers(){
  var newNumber = parseInt(prompt("Please enter a number. Let's see if it's the biggest number."));
  numberList.push(newNumber);
  if (newNumber > biggestNumber){
    biggestNumber = newNumber;
    console.log("Now " + biggestNumber + " is the biggest number.");
  } else{
    console.log(biggestNumber + " is still the biggest number.");
  }

  if(!newNumber){
    return;
  }
  moreNumbers();
}
console.log(numberList);
