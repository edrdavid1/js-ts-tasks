/**
 * Write a function converting temperature, weight and distance. Precision is 2 number after digits
 * @param {string | number} value
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to
 * @returns {number}
 */
module.exports.converter = function (value, from, to) {
    var conversions = {
        m: { mi: function (value) { return value / 1609.34; } },
        mi: { m: function (value) { return value * 1609.34; } },
        gr: { pound: function (value) { return value / 453.592; } },
        pound: { gr: function (value) { return value * 453.592; } },
        C: { K: function (value) { return value + 273.15; } },
        K: { C: function (value) { return value - 273.15; } }
    };
    if (!conversions[from] || !conversions[from][to]) {
        throw new Error('Conversion not supported');
    }
    return parseFloat(conversions[from][to](value).toFixed(2));
};
