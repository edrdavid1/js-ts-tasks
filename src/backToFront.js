/**
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */

module.exports.backToFront = function backToFront(str, symbolsCount) {
  // 1. Праверка на тыпы параметраў
  if (typeof str !== 'string') {
    throw new Error('Першы параметр павінен быць радком');
  }
  if (typeof symbolsCount !== 'number' || symbolsCount < 0 || !Number.isInteger(symbolsCount)) {
    throw new Error('Другі параметр павінен быць цэлым неадмоўным лікам');
  }

  // 2. Калі symbolsCount большы за даўжыню радка, вяртаем сам радок
  if (symbolsCount > str.length) {
    return str;
  }

  // 3. Капіруем апошнія symbolsCount сімвалы
  const copied = str.slice(-symbolsCount);

  // 4. Вяртаем новы радок
  return copied + str + copied;
};
