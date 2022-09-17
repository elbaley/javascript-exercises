const reverseString = function (string) {
  // split into chars
  const letters = string.split("");
  let result = "";
  for (let i = letters.length - 1; i >= 0; i--) {
    //add it to result string
    result += letters[i];
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;
