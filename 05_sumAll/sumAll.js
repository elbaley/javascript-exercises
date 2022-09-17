const sumAll = function (startingNum, finalNum) {
  let result = 0;
  //check which number is larger
  if (startingNum > finalNum) {
    const tempNum = startingNum;
    startingNum = finalNum;
    finalNum = tempNum;
  }
  //throw error if either number is negative or is not an integer
  if (
    startingNum < 0 ||
    finalNum < 0 ||
    !Number.isInteger(startingNum) ||
    !Number.isInteger(finalNum)
  ) {
    return "ERROR";
  }

  for (let i = startingNum; i <= finalNum; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
