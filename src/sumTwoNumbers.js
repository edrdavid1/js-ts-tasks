/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {string}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  //   Пераўтвараем у радок
  const firstStr = String(firstNumber);
  const secondStr = String(secondNumber);

  // Выдаляем усе сімвалы, акрамя лічбаў, кропак, і знака мінус
  const cleanedFirstStr = firstStr.replace(/[^\.\-\d]/gi, '');
  const cleanedSecondStr = secondStr.replace(/[^\.\-\d]/gi, '');

  // Пераўтвараем у лічбы
  const firstNum = Number(cleanedFirstStr);
  const secondNum = Number(cleanedSecondStr);

  return firstNum + secondNum;
};
