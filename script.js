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
  console.log(size)
  if  (size >= 8 && size <= 128) {
    console.log
    var lowerCase = confirm("include lowercase letters?")
    console.log(lowerCase)
    var upperCase = confirm("include uppercase letters?")
    console.log(upperCase)
    var numericValues = confirm("include numeric values?")
    console.log(numericValues)
    var specialCharacters = confirm("include special characters?")
    console.log(specialCharacters)
    if (lowerCase = true) {

    }
    else {

    }

  }
  else {
    alert("invalid entry")
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
