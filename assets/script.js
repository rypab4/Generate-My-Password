// Assignment Code
var generateBtn = document.querySelector("#generate");

//create prompts
function generatePassword() {
  var passLength = parseInt(window.prompt("How long do you want the password? Only 8-128 characters"))

  //if cancels or less than 8 or more than 128
  if (!passLength) {
    alert("Invalid entry. Terminating");
    return;
    }
    
  if (isNaN(passLength)) {
    window.alert("Invalid entry. Terminating")
    return;

  }
  if (passLength < 8 || passLength > 128) {
    window.alert("Invalid length number. Must be between 8-128.")
    return;
  }

  // using confirm prompt
  var numbersPrompt = window.confirm("Do you want numbers in your password? OK = Yes, Cancel = NO")
  var symbolsPrompt = window.confirm("Do you want symbols in your password? OK = Yes, Cancel = NO")
  var lowerCasePrompt = window.confirm("Do you want lowercase in your password? OK = Yes, Cancel = NO")
  var upperCasePrompt = window.confirm("Do you want uppercase in your password? OK = Yes, Cancel = NO")
  var lowerCase = "abcdefghijklmnopqrztuvwxyz"
  var upperCase = lowerCase.toUpperCase()
  var numbers = "1234567890"
  var symbols = "!@#$%^&*()_+-=<>?:;',./"
  
  //split to create
  var lowercaseList = lowerCase.split('')
  var uppercaseList = upperCase.split('')
  var numbersList = numbers.split('')
  var symbolsList = symbols.split('')

  //add array together
  var passArray = []

  // this is for using the confirm prompt
  if (numbersPrompt === true) {
    var passArray = passArray.concat(numbersList)
  }
  if (symbolsPrompt === true) {
    var passArray = passArray.concat(symbolsList)
  }
  if (upperCasePrompt === true) {
    var passArray = passArray.concat(uppercaseList)
  }
  if (lowerCasePrompt === true) {
    var passArray = passArray.concat(lowercaseList)
  }
  if (passArray.length === 0) {
    var passArray = passArray.concat(lowercaseList)
  }


  // randomly create password using Math random
  var generatePassword = []
  for (var i = 0; i < passLength; i++) {
    var index = (Math.floor(Math.random() * (passArray.length - 1)))
    var pass = passArray[index]
    generatePassword.push(pass)
  }
  //take away the commas using join
  generatePassword = generatePassword.join('')

  return generatePassword

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);