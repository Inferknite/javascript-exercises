const exampleArray = [];
const unwantedArrayElements = [];
const removeFromArray = function(exampleArray, ...unwantedArrayElements) {
  let arrayIndex = 0;
  let unwantedIndex = 0;
  while (unwantedIndex < unwantedArrayElements.length) {
    if (unwantedArrayElements[unwantedIndex] === exampleArray[arrayIndex]) {
      exampleArray.splice(arrayIndex, 1);
      arrayIndex=0;
      unwantedIndex++;
    }else if (arrayIndex==exampleArray.length-1){
    unwantedIndex++;
    arrayIndex=0;
    } else {
      arrayIndex++;
    }

  } 
  return exampleArray;
}

// Do not edit below this line
module.exports = removeFromArray;