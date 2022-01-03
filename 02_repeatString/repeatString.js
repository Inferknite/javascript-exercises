const num = '';
const repeatString = function(string, num) {
let i = num;
let multiString = ``;
if (i<0){
    multiString = `ERROR`;
    return multiString;
}
    while (i>0){ 
 multiString += `${string}`;
i--;
}
return multiString;
}

// Do not edit below this line
module.exports = repeatString;
