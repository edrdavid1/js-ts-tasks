/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {string} - the sum as a string
 */
module.exports.sumInRange = function sumInRange(start, end) {
  start = Number(start);
  end = Number(end);

  // Памяняем start і end, калі яны ў непараўнальным парадку
  if (start > end) {
    [start, end] = [end, start]; // Мяняем значэнні месцамі
  }

  const n = end - start + 1;
  const sum = (n * (start + end)) / 2;

  return String(sum);
};
