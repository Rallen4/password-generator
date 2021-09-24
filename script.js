var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
// var special = " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

var passOutput = document.getElementById("output");
var charLength = document.getElementById("length");
var useNumbers = document.getElementById("NUMBERS");
var useUpper = document.getElementById("UPCase");
var useSymbols = document.getElementById("SYMBOLS");
var genButton = document.getElementById("button");
var form = document.getElementById("pwdGen");
const upperCharCode = arrayLowtoHigh(65,90);
const lowerCharCode = arrayLowtoHigh(97,122);
const numCharCode = arrayLowtoHigh(48,57);
const symCharCode = arrayLowtoHigh(48,57).concat((58,64)
).concat(91,96)
.concat(123,126);


form.addEventListener("click", function(event) {
    event.preventDefault();
const charAmount = charLength;
const incSymbols = useSymbols;
const incNumbers = useNumbers;
const incUpperCase = useUpper;
const password = generatePassword(charAmount, incSymbols, incNumbers, incUpperCase)
console.log(password);
})

function generatePassword(charAmount, incSymbols, incNumbers, incUpperCase) {
    console.log(generatePassword);
}
    String.fromCharCode("");


function arrayLowtoHigh(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
        array.push(i)
        return array;
        }
}
