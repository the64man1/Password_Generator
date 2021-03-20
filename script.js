var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
    
function generatePassword() {
  var password = [];
  var numOfCharacters = parseInt(prompt("Please enter how many characters your password will be", "Length must be between 8-128 characters"));
    
  if (!numOfCharacters) {
    return;
  } else if (numOfCharacters < 8 || numOfCharacters > 128 || isNaN(numOfCharacters)) {
    alert("Please enter a number between 8 and 128.");
    return;
  }

  var hasLowerCase = confirm("Press OK if you would like your password to include lower case characters.");
  
  var hasUpperCase = confirm("Press OK if you would like your password to include upper case characters.");
  
  var hasNumbers = confirm("Press OK if you would like your password to include numbers.");
  
  var hasSpecialCharacters = confirm("Press OK if you would like your password to include special characters.");
  
  if (!hasLowerCase && !hasUpperCase && !hasNumbers && !hasSpecialCharacters) {
    alert("At least one option must be selected for your password.");
    return;
  }
  
  var passwordOptions = {
    numOfCharacters: numOfCharacters,
    hasLowerCase: hasLowerCase,
    hasUpperCase: hasUpperCase,
    hasNumbers: hasNumbers,
    hasSpecialCharacters: hasSpecialCharacters
  }
  
  for (var i = 0; i < passwordOptions.numOfCharacters; i++) {
    if (hasLowerCase) {
      var randomLowerAscii = Math.floor((Math.random() * (122 - 97)) + 97);
      var randomLowerCase = String.fromCharCode(randomLowerAscii);
      password.push(randomLowerCase);
    } else if (hasUpperCase) {
      var randomUpperAscii = Math.floor((Math.random() * (90 - 65)) + 65);
      var randomUpperCase = String.fromCharCode(randomUpperAscii);
      password.push(randomUpperCase);
    } else if (hasNumbers) {
      var randomNumberAscii = Math.floor((Math.random() * (57 - 48)) + 48);
      var randomNumber = String.fromCharCode(randomNumberAscii);
      password.push(randomNumber);
    } else {
      var randomSpecialCharacter = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
      password.push(randomSpecialCharacter);
    }
  }
  
  if (hasUpperCase) {
    for (var i = 0; i < passwordOptions.numOfCharacters; i += 2) {
    var randomUpperAscii = Math.floor((Math.random() * (90 - 65)) + 65);
    var randomUpperCase = String.fromCharCode(randomUpperAscii);
    password.splice(0 + i, 1, randomUpperCase);
    }
  }
  
  if (hasNumbers) {
    for (var i = 0; i < passwordOptions.numOfCharacters; i += 3) {
    var randomNumberAscii = Math.floor((Math.random() * (57 - 48)) + 48);
    var randomNumber = String.fromCharCode(randomNumberAscii);
    password.splice(0 + i, 1, randomNumber);
    }
  }
  
  if (hasSpecialCharacters) {
    for (var i = 0; i < passwordOptions.numOfCharacters; i += 3) {
    var randomSpecialCharacter = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    password.splice(1 + i, 1, randomSpecialCharacter);
    }
  }
  
  password = password.join("");
  return password;
}
  
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  
  if (password === undefined) {
    return;
  } else {
    passwordText.value = password;
  }
}
  
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
  