/**
 * Write a function to calculate the days left until the next New Year's eve (In 2023 the next NY is 1th January, 2024 year)
 * @param {Date | string} targetDate
 * @returns {number}
 */
module.exports.getDaysToNewYear = function getDaysToNewYear(targetDate) {
    var date = new Date(targetDate);
    if (isNaN(date.getTime()))
        throw new Error('Invalid date format');
    var nextNewYear = new Date(date.getFullYear() + 1, 0, 1);
    var diff = nextNewYear.getTime() - date.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
};
