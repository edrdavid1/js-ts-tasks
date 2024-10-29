/**
 * Compares two numbers
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @returns {string} - ">" if firstNumber > secondNumber, "<" if firstNumber < secondNumber, "=" if they are equal
 */
module.exports.compareTwoNumbers = function compareTwoNumbers(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    return '>';
  } else if (firstNumber < secondNumber) {
    return '<';
  } else {
    return '=';
  }
};
