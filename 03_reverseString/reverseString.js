let str = '';
let reverseString = function(str) {
let stringArray = str.split('');
let i=0;
let newString = '';

while(i<stringArray.length){
i++;
newString += stringArray[stringArray.length-i];
}
return newString;
}
// Do not edit below this line
module.exports = reverseString;