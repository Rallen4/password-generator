// var lowercase = "abcdefghijklmnopqrstuvwxyz";
// var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var numeric = "0123456789";
// var special = " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// *Each variable links to the html file class headers and thus, become predefined to be called back to.
var passOutput = document.getElementById("output");
var charLength = document.getElementById("length");
var useNumbers = document.getElementById("NUMBERS");
var useUpper = document.getElementById("UPCase");
var useSymbols = document.getElementById("SYMBOLS");
const passShown = document.getElementById("seeme");
var genButton = document.getElementById("button");
var form = document.getElementById("pwdGen");
var useUpperCase = document.getElementById("useUpper");
var incSymbolId = document.getElementById("useSymbols");
var charAmountId = document.getElementById("charLength");

// *After some research, I discovered a more efficient way to address numbers (lower/upper case), symbols, and special values by linking their keycodes instead of their literal values/titles/symbols. By calling on this array, I can deduce the amount of messy-code required to achieve the same criteria. 
var upperCharCode = arrayLowHigh(65,90);
var lowerCharCode = arrayLowHigh(97,122);
var numCharCode = arrayLowHigh(48,57);
var symCharCode = arrayLowHigh(48,57).concat((58,64)
).concat(91,96)
.concat(123,126);

// *Adding .addEventListener to tell the system to output a value after clicking on the "Click Me to Generate" button. This is where my issue lies -- I tried adding .value to line 31 and .checked to lines 32-34 but the system told me these were null and not defined. 
form.addEventListener('"click", function(event) {
    event.preventDefault();

var charAmount = useNumbers;
var incSymbolId = useSymbols;
var incNumbers = useNumbers;
var useUpperCase = useUpper;
var password = generatePassword(charAmount, incSymbolId, incNumbers,useUpperCase)
passShown.innerText = passOutput;

// console.log(password);
})

// creating generate password function and calling on each indivual variable to decide on outcomes in each possible scenario. 
function generatePassword(charAmount, incSymbols, incNumbers, incUpperCase) {
    console.log(lowerCharCode)
    let charCode = lowerCharCode
    if (incSymbols) charCode = charCode.concat(symCharCode);
    if(incNumbers) charCode = charCode.concat(numCharCode);

// building the for loop and adding math.floor(math.random() ); command to generate a randomized value multiplied by the amount of potental outputs stored in the charCode. 
    var pwdChar = [];
    for (let i=0; i < charAmount, i++;) {
        var char = charCode[Math.floor(math.random() * charCode.length)]
        pwdChar.push(string.fromCharCode(charCode))

    }
    return pwdChar.join('')
};

// creating the for loop array function that connects to the charCodes used above; telling the system to check numbers/values/outputs low --> high and return back a password that achieves all desired criteria. 
function arrayLowHigh(low, high) {
    var array = [];
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
        return array;
}
