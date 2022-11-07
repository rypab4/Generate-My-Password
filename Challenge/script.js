// Assignment Code
var generateBtn = document.querySelector("#generate");

//create prompts
function generatePassword(){
  var passLength = parseInt(window.prompt("How long do you want the password? Only 8-128 characters"))
 
//if cancels or less than 8 or more than 128
  if (passLength === null){
    return; 
  } 
  if (isNaN(passLength)){
    window.alert("Invalid entry. Terminating")
    return;
  
  } 
  if (passLength < 8 || passLength > 128){
    window.alert("Invalid length number. Must be between 8-128.")
    return;
  }
  
  var numbersPrompt = window.confirm("Do you want numbers in your password?")
  var symbolsPrompt = window.confirm("Do you want symbols in your password?")
  var lowerCasePrompt = window.confirm("Do you want lowercase in your password?")
  var upperCasePrompt = window.confirm("Do you want uppercase in your password?")
  var lowerCase = "abcdefghijklmnopqrztuvwxyz"
  var upperCase = lowerCase.toUpperCase() 
  var numbers = "1234567890"
  var symbols = "!@#$%^&*()_+-=<>?:;',./"
  var lowercaseList= lowerCase.split('')
  var uppercaseList= upperCase.split('')
  var numbersList = numbers.split('')
  var symbolsList = symbols.split('')

  //add array together
  var optionsCart = []

  if (numbersPrompt === true){
    var optionsCart = optionsCart.concat(numbersList)
  }
  if (symbolsPrompt === true){
    var optionsCart = optionsCart.concat(symbolsList)
  }
  if (upperCasePrompt === true){
    var optionsCart = optionsCart.concat(uppercaseList)
  }
  if (lowerCasePrompt === true){
    var optionsCart = optionsCart.concat(lowercaseList)
  }
  if (optionsCart.length === 0) {
    var optionsCart = optionsCart.concat(lowercaseList)
  }
// randomly create password using Math random
var generatedPassword = []
  for (var i = 0; i < passLength; i++){
    var index=(Math.floor(Math.random()*(optionsCart.length-1)))
    var pass = optionsCart[index]
    generatedPassword.push(pass)
  }
  //take away the commas using join
  generatedPassword = generatedPassword.join('')

  return generatedPassword

}
 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);