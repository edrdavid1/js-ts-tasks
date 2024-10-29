/**
 * Given cone height and radius (numbers). Evaluate volume of a cone
 * @param {number} h - height
 * @param {number} r - radius
 * @returns {string} - the volume of the cone rounded to two decimal places
 */
module.exports.volumeCone = function volumeCone(h, r) {
  // Разлічваем аб'ём конуса па формуле V = (1/3) * π * r² * h
  const volume = (1 / 3) * Math.PI * Math.pow(r, 2) * h;

  // Вяртаем аб'ём, акруглены да двух знакаў пасля коскі
  return volume.toFixed(2);
};

//   Math.PI — гэта значэнне π (приблизно 3.14159), якое выкарыстоўваецца для разліку круга.
//   Math.pow(r, 2) — вылічэнне радыусу ў квадрат, якое азначае r2r2.
//   h — гэта вышыня конуса.
//volume.toFixed(2) — гэта метад, які акругляе значэнне аб'ёму да двух знакаў пасля коскі, што робіць вынік больш зручным
