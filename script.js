// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
  var size = prompt("Please enter a value of or between 8 to 128 to define how many characters you would like in your password")
  if  (size >= 8 && seze <= 128) {

  }
  else {
    alert("invalid")
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
