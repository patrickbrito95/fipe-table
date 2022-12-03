export function checkIfTheFirstLetterIsUppercase(value) {
    if (value.length < 1) return false;
    return value[0].toUpperCase() === value[0] ? true : false;
  }
  
  module.exports = checkIfTheFirstLetterIsUppercase;