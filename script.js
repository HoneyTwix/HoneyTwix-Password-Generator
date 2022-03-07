// Assignment code here
var password_length = Number(prompt("How many characters would you like your password to be?"));
while (isNaN(password_length) || password_length < 8 || password_length > 128) password_length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

var upper = confirm("Would you like to use uppercase letters?");
var lower = confirm("Would you like to use lowercase letters?");
var special_char = confirm("Would you like to use numbers?");
var number = confirm("Would you like to use special characters?");

while (!upper && !lower && !special_char && !number) {
  alert("You must select at least one character type!");
  upper = confirm("Would you like to use uppercase letters?");
  lower = confirm("Would you like to use lowercase letters?");
  special_char = confirm("Would you like to use special characters?");
  number = confirm("Would you like to use numbers?");
}




function generatePassword(){
  var password = ('')
  var allowed = ('')

  if (upper) allowed += "QWERTYUIOPASDFGHJKLZXCVBNM";
  if (lower) allowed += "qwertyuiopasdfghjklzxcvbnm";
  if (special_char) allowed += "!@#$%^&*(){}[]=<>/,.";
  if (number) allowed +=  "1234567890";

  for (var i = 0; i <= password_length; i++) {
    var randomNumber = Math.floor(Math.random() * allowed.length);
    password += allowed.substring(randomNumber, randomNumber +1);
   }
   return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  passwordText.textContent = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
