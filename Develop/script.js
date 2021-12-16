// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterSet = [" "];

// creating global variable string for password generator
var finalPassword = "";

// variables containing the password characters we want to deploy
var lowerCase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", ];
var upperCase = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M" ];
var numberCase = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ];
var specialCase = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]; 

// creating function and block for password generation criteria (ie, password length and characters)
function generatePassword () {


  var askLength = window.prompt("How many characters would you like your password to be?");

  var askLower = window.confirm("Would you like lower case characters");

  var askUpper = window.confirm("Would you like upper case characters");

  var askNumber = window.confirm("Would you like number characters");

  var askSpecial = window.confirm("Would you like special characters");

        console.log (askLength);

// concatinating characters
    if (askLower == true) {
    characterSet = characterSet.concat(lowerCase)
    }

    if (askUpper == true) {
    characterSet = characterSet.concat(upperCase)
    }
    if (askNumber == true) {
        characterSet = characterSet.concat(numberCase) 
    }
    if (askSpecial == true) {
          characterSet = characterSet.concat(specialCase)
    }

console.log (characterSet.length);
// for loop to run logs against the length of the password as indicated in askLength
for (var i=0; i < askLength; i++) {

// randomising password generation
finalPassword = finalPassword + characterSet[Math.floor(Math.random() * characterSet.length)]
  
}

// returining final password through global variable
return finalPassword

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

