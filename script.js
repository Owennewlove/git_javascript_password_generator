// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function getLowerCase() {
  return String.fromCharCode(Math.floor(Math.random()*25)+97);
}

function getUpperCase() {
  return String.fromCharCode(Math.floor(Math.random()*25)+65);
}

function getNumericValues() {
  return String.fromCharCode(Math.floor(Math.random()*9)+48);
}

function getSpecialCharacters() {
  return String.fromCharCode(Math.floor(Math.random()*5)+33);
}

function generatePassword() {
  var finalpwd = "";
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

    for (var i = 0; i < size;) {

      if (lowerCase === true) {

        i++;

        finalpwd = finalpwd += getLowerCase();


      } 
  
      if (upperCase === true) {

        i++;

        finalpwd = finalpwd += getUpperCase();
  
      }
  
      if (numericValues === true) {

        i++;

        finalpwd = finalpwd += getNumericValues();
  
      }
  
      if (specialCharacters === true) {


        i++;
        finalpwd = finalpwd += getSpecialCharacters();
  
      }

    }
    

    
  }
  else {
    alert("invalid entry")
  }
  console.log(finalpwd)

  var shuffled = finalpwd.split('').sort(function(){return 0.5-Math.random()}).join('');

  return shuffled;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

