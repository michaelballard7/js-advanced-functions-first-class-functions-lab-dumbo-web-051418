// Code your solution in this file!

const returnFirstTwoDrivers = (array) => {
 return array.slice(0,2)
}

const returnLastTwoDrivers = (array) => {
  return array.slice(-2)
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
  ]
  
const createFareMultiplier = function (multiplyValue) {
  return function (value) {
    return multiplyValue * value;
  };
};
