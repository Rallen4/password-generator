var generateBtn = document.querySelector("#generate");
var choices = "";
var passwordText = "";

//constant identifications

const upperCase = ['A' + 'B' + 'C' + 'D' + 'E' + 'F' + 'G' + 'H' + 'I' + 'J' + 'K' + 'L' + 'M' + 'N' + 'O' + 'P' + 'Q' + 'R' + 'S' + 'T' + 'U' + 'V' + 'W' + 'X' + 'Y' + 'Z' ];
const lowerCase = ["a" + "b" + "c" + "d" + "e" + "f" + "g" + "h" + "i" + "j" + "k" + "l" + "m" + "n" + "o" + "p" + "q" + "r" + "s" + "t" + "u" + "v" + "w" + "x" + "y" + "z" ];
const numbers = ['0' + '1' + '2' + '3' + '4' + '5' + '6' + '7' + '8' + '9' ];
const specChar = ["!" + "@" + "#" + "$" + "%" + "^" + "&" + "*" + "(" + ")" + "-" + "_" ];

//+ symbol removes any space between "" or ''

// Write password to the #password input
//parseInt turns a string variable into an integer
//triggers a falsey statement when passwordLength is met with no integer
function generatePassword() {
  var passwordLength = prompt("Choose the length of your password (between 8 and 128 characters)");
  console.log(Number.isInteger(parseInt(passwordLength)))

  if (passwordLength < 8 || passwordLength > 128 || Number.isInteger(parseInt(passwordLength)) == false) 
    {
        alert ("You MUST pick a length between 8 and 128 characters.");
        return generatePassword() ;
    } 

    var hasUpper = prompt("Do you want this password to have upper case letters? (Y/N)");

      hasUpper = hasUpper.toUpperCase();
        if (hasUpper !== "Y" && hasUpper !== "N") {
          alert ("You MUST choose Y or N.");
        return generatePassword() ;
      }

  var hasLower = prompt("Do you want this password to have lower case letters? (Y/N)");

      hasLower = hasLower.toUpperCase();
        if (hasLower !== "Y" && hasLower !== "N") {
          alert ("You MUST choose Y or N.");
        return generatePassword() ;
      }

  var hasNumbers = prompt("Do you want this password to have numbers? (Y/N)");

      hasNumbers = hasNumbers.toUpperCase();
        if (hasNumbers !== "Y" && hasNumbers !== "N") { 
          alert ("You MUST choose Y or N.");
        return generatePassword() ;
      }

  var hasSpecChar = prompt("Do you want this password to have special characters? (Y/N)");

      hasSpecChar = hasSpecChar.toUpperCase();
        if (hasSpecChar !== "Y" && hasSpecChar !== "N") { 
          alert ("You MUST choose Y or N.");
        return generatePassword() ;
      } 

      if (hasUpper ==  "N" && hasLower == "N" && hasNumbers == "N" && hasSpecChar == "N") {
        alert("You MUST choose at least one character type."); 
        return  generatePassword() ;
      }
      
        if (hasUpper == "Y") {
          choices = choices.concat(upperCase);
        }
        if (hasLower == "Y") {
          choices = choices.concat(lowerCase);
        }
        if (hasNumbers == "Y") {
          choices = choices.concat(numbers);
        }
        if (hasSpecChar == "Y") {
          choices = choices.concat(specChar);
        }
      
        for(let i = 0 ; i < passwordLength ; i++) {
          var temp1 = Math.floor(Math.random() * choices.length);
          passwordText += choices[temp1];   
        }
        document.getElementById("password").innerHTML=passwordText;
        passwordText = "";
        choices = "";

}

generateBtn.addEventListener("click", generatePassword);
  