/**
 * Write a function determining if the provided string/number is a pangram
 * A string is a pangram if every lowercase letter of the alphabet (a, b, c, ... z) is used at least once
 * A number is a pangram if every digit number (0, 1, 2, ... 9) is used at least once
 * @param {string|number} word
 * @returns {boolean}
 */
module.exports.pangram = function (word) {
    if (typeof word === 'number') {
        var digits = new Set(String(word));
        return digits.size === 10; // Все цифры от 0 до 9 должны присутствовать
    }
    if (typeof word === 'string') {
        var letters = new Set(word.toLowerCase().replace(/[^a-z]/g, ''));
        return letters.size === 26; // Все буквы от 'a' до 'z' должны присутствовать
    }
    return false;
};
