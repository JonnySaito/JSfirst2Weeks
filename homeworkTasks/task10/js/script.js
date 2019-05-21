// TASK 10: Create a password checker from a prompt that checks to see if a password is strong enough.
// Min 5 characters, max 20, 1 number

var userPassword = prompt("Please enter a password (5 - 20 characters long, including a number)");

// function checkPassword(){
//   console.log(parseInt(userPassword));
//   if (userPassword.length < 5){
//     console.log("Your password is too short. Try again!");
//   } else if (userPassword.length > 20){
//     console.log("Your password is too long. Try again!");
//   } else if(parseInt(userPassword) !== 1){
//     console.log("Please use just ONE number in your password.");
//   } else{
//     console.log(userPassword+" is a totally acceptable password.");
//   }
// }

checkPassword();

function checkPassword(){
  if (userPassword.length < 5){
    console.log("Your password is too short. Try again!");
  } else if (userPassword.length > 20){
    console.log("Your password is too long. Try again!");
  }
  for (var i = 0; i < userPassword.length; i++) {
    
    if (parseInt(userPassword[i]) == NaN){
      console.log("You need to include a number in your password!");
    // } else if (userPassword[i] !== NaN){
    //   console.log(userPassword+" is a totally acceptable password.");
    } else{
      console.log(userPassword+" is a totally acceptable password.");
    }
  }
}
