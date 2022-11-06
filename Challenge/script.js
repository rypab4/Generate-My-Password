//Assignment Code
// var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrztuvwxyz"
var upperCase = lowerCase.toUpperCase() 
var numbers = "1234567890"
var special = "!@#$%^&*()_+-=<>?:;',./"
var lowerCaseArray= lowerCase.split('')
var upperCaseArray= upperCase.split('')
var numbersArray = numbers.split('')
var specialArray = special.split('')

//Create prompts
let length = prompt("How long is your password?")
let upper = prompt("Would you want uppercase? Please yes or no")
let num = prompt("What about numbers? type yes or no")
let symbols = prompt("what about special characters? type yes or no")

//function to create password
function generatePassword(length, upper, num, symbols){
  let pass = lowerCaseArray
  if(upper == "yes" || "y") pass = pass.concat(upper)
  if(num == "yes" || "y") pass = pass.concat(num)
  if(symbols == "yes" || "y") pass = pass.concat(symbols)
  var passwordCharacters = []
  for(var i = 0; i< length; i++){
    var characterCode = pass[Math.floor(Math.random()*pass.length)]
    passwordCharacters.push(characterCode)
  }
  return passwordCharacters.join(' ')
}

console.log(generatePassword())



// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;


// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
