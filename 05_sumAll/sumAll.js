const num1 = '';
const num2 = '';     
const sumAll = function(num1, num2) {
    let summedNums = 0;
    let numDiff=Math.abs(num1-num2);
    if (isNaN(num1) | isNaN(num2) |num1!==Math.abs(num1) | num2!==Math.abs(num2)){
        summedNums= 'ERROR';
    }else if (num1<num2) {   
        startNum = num1;
        endNum = num2;        
        for (let count = 0; count <= (numDiff); count++){
            summedNums += startNum+count;
        }
        } else {
        startNum = num2;
        endNum= num1;
        for (let count = 0; count <= (numDiff); count++){
            summedNums += startNum+count;
        }

    }
    return summedNums;
} 


    


// Do not edit below this line
module.exports = sumAll;
