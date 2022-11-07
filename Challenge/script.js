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
    optionsCart.push(numbersList)
  }
  if (symbolsPrompt === true){
    optionsCart.push(symbolsList)
  }
  if (upperCasePrompt === true){
    optionsCart.push(uppercaseList)
  }
  if (lowerCasePrompt === true){
    optionsCart.push(lowercaseList)
  }
  if (optionsCart.length === 0) {
    optionsCart.push(lowercaseList)
  }
// console.lo optionsCart)
var generatedPassword = " "
//create random integers
function randomInt(min, max){
  if (!max){
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1-rand) +rand*max)
}

function getRandomItem(list){
  return list[randomInt(list.length)]
}


  for (var i = 0; i < passwordLength; i++){
    var randomList = getRandomItem(optionsCart)
    var randomChar = getRandomItem(randomList) 
    generatedPassword += randomChar
  }
  
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