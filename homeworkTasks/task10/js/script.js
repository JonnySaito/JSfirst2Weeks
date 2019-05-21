// TASK 10: Create a password checker from a prompt that checks to see if a password is strong enough.
// Min 5 characters, max 20, 1 number

// var userPassword = prompt("Please enter a password (5 - 20 characters long, including a number)");

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

// checkPassword();
//
// var valid = false;
// var numberFound = false;
//
//
// if (valid === true){
//     console.log("Your password is good"
//     );
// }
//
// function checkPassword(){
//   if (userPassword.length < 5){
//     console.log("Your password is too short. Try again!");
//   } else if (userPassword.length > 20){
//     console.log("Your password is too long. Try again!");
//   }
//   for (var i = 0; i < userPassword.length; i++) {
//     if (parseInt(userPassword[i])){
//         numberFound === true;
//         break;
//         console.log("Your password is all good");
//     } else{
//         console.log("You need to include a number in your password!");
//     }
//
//     // } else if (userPassword[i] !== NaN){
//     //   console.log(userPassword+" is a totally acceptable password.");
//     } else{
//       console.log(userPassword+" is a totally acceptable password.");
//     }
//   }
// }


// RICHARD'S VERSION
checkPassword();

function checkPassword(){
    var password = prompt("What is your password?");
    var valid = false;
    var numberFound = false;
    var doubleNumber = false;

    if(password.length < 5){
        console.log("your password is too short");
    } else if(password.length > 20){
        console.log("your password is too long");
    } else {
        for (var i = 0; i < password.length; i++) {
            if(numberFound === true){
                console.log("there is more than 1 number");
                doubleNumber = true;
                break;
            }
            if(parseInt(password[i])){
                numberFound = true;
            }
        }

        if(numberFound === false){
            console.log("Please include a number");
        } else if(doubleNumber === false){
            valid = true;
        }
    }

    if(valid === true){
        console.log("your password is all good");
    } else {
        checkPassword();
    }
}
