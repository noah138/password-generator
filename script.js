// global variables
var ifNumber;
var ifChar;
var ifUprCase;
var ifLwrCase;
var charBank;

// arrays for numbers, specials, uppercase, lowercase
characters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
uprCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
lwrCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
passwordArr = [];

// Clicking on "Generate Password" button triggers the function to run
document.getElementById("generate").addEventListener("click", makePassword);

// Clicking on "Generate Password" button triggers the function
function makePassword() {

  document.getElementById("password").textContent = "poop"

  // Prompt for password length
  passLength = prompt("How long would you like your password to be? Please give a number between 8 and 128.");

  // If a number outside of the parameters is given, re-prompt the question 
  while (passLength < 8 || passLength > 128) {
    alert("Password length must be between 8 and 128 characters. Please try again");
    passLength = prompt("How long would you like your password to be? Please give a number between 8 and 128.");

  }

  // Ask whether they want numbers, special characters, or upper or lowercase letters
    ifNumber = confirm("Would you like any numbers in your password?");
    ifChar = confirm("Would you like any special characters in your password?");
    ifUprCase = confirm("Would you like any Uppercase letters?");
    ifLwrCase = confirm("Would you like any Lowercase letters?");

  // If no password requirements are selected, present them with the options again
  while (!ifNumber && !ifChar && !ifUprCase && !ifLwrCase) {
    alert("You have you give me something to work with!");
    ifNumber = confirm("Would you like any numbers in your password?");
    ifChar = confirm("Would you like any special characters in your password?");
    ifUprCase = confirm("Would you like any Uppercase letters?");
    ifLwrCase = confirm("Would you like any Lowercase letters?");
  }

  // One scenario for yes to all four:
  if (ifNumber && ifChar && ifUprCase && ifLwrCase) {
    charBank = numbers.concat(characters, uprCaseLetters, lwrCaseLetters)
  }

  // Four scenarios for yes to three:
  else if (ifNumber && ifChar && ifUprCase) {
    charBank = numbers.concat(characters, uprCaseLetters)
  }

  else if (ifNumber && ifChar && ifLwrCase) {
    charBank = numbers.concat(characters, lwrCaseLetters)
  }

  else if (ifChar && ifUprCase && ifLwrCase) {
    charBank = characters.concat(uprCaseLetters, lwrCaseLetters)
  }

  else if (ifNumber && ifUprCase && ifLwrCase) {
    charBank = numbers.concat(uprCaseLetters, lwrCaseLetters)
  }

  // Six scenarios for yes to two:
  else if (ifNumber && ifChar) {
    charBank = numbers.concat(characters)
  }

  else if (ifNumber && ifUprCase) {
    charBank = numbers.concat(uprCaseLetters)
  }

  else if (ifNumber && ifLwrCase) {
    charBank = numbers.concat(lwrCaseLetters)
  }

  else if (ifChar && ifUprCase) {
    charBank = characters.concat(uprCaseLetters)
  }

  else if (ifChar && ifLwrCase) {
    charBank = characters.concat(lwrCaseLetters)
  }

  else if (ifUprCase && ifLwrCase) {
    charBank = uprCaseLetters.concat(lwrCaseLetters)
  }

  // Four scenarios for yes to one:
  else if (ifNumber) {
    charBank = numbers
  }

  else if (ifChar) {
    charBank = characters
  }

  else if (ifUprCase) {
    charBank = uprCaseLetters
  }

  else if (ifLwrCase) {
    charBank = lwrCaseLetters
  }

// For loop to add characters from selected character bank into the password array
  for (let i=0; i < passLength; i++) {
    var additions = charBank[Math.floor(Math.random() * charBank.length)];
    passwordArr.push(additions);
  }

// Convert password array into a string
  let newPassword = passwordArr.toString();

// Remove commas from the string
  let finalPassword = newPassword.replace(/,/g, '');

// Display password in the textbox
  document.getElementById("password").textContent = finalPassword

}
