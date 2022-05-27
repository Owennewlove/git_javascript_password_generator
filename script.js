// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = lowercase.toUpperCase()
var number = "0123456789"
var special = "!@#$%&*?^"


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function getLowerCase() {
  return String.fromCharCode(Math.floor(Math.random()*25)+97)
}

function getUpperCase() {
  return String.fromCharCode(Math.floor(Math.random()*25)+65)
}

function getNumericValues() {
  return String.fromCharCode(Math.floor(Math.random()*9)+48)
}

function getSpecialCharacters() {
  return String.fromCharCode(Math.floor(Math.random()*5)+33)
}

function generatePassword() {
  var finalpwd = ""
  var size = prompt("Please enter a value of or between 8 to 128 to define how many characters you would like in your password")
  console.log(size)
  if (size >= 8 && size <= 128) {
    console.log
    var lowerCase = confirm("include lowercase letters?")
    console.log(lowerCase)
    var upperCase = confirm("include uppercase letters?")
    console.log(upperCase)
    var numericValues = confirm("include numeric values?")
    console.log(numericValues)
    var specialCharacters = confirm("include special characters?")
    console.log(specialCharacters)
    

    if (lowerCase === true) {

    } 

    if (upperCase === true) {

    }

    if (numericValues === true) {

    }

    if (specialCharacters === true) {

    }
  }
  else {
    alert("invalid entry")
  }

  return finalpwd

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
