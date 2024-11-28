/**
 * Function that generates a censorship function to replace forbidden words in a string.
 * @param {Array} forbidden - Array of forbidden words/phrases to censor.
 * @returns {function} A function that takes a string and censors the forbidden words.
 */
module.exports.censorship = function censorship(forbidden) {
  // Create a regex pattern to detect forbidden words and phrases
  const pattern = new RegExp(forbidden.map(word => word.replace(/\\n/g, '\\\\n')).join('|'), 'gi');

  return function (str) {
    return str.replace(pattern, match => {
      return '*'.repeat(match.length);
    });
  };
};
