// Leap years are years divisible by four (like 1984 and 2004).
//Years divisible by 100 are NOT leap years (such as 1800 and 1900) unless they are divisible by 400
const leapYears = function (year) {
  if (year % 4 !== 0) return false;
  if (year % 100 === 0 && year % 400 !== 0) return false;
  return true;
};

// Do not edit below this line
module.exports = leapYears;
