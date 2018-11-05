/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
  // TODO: Implement me!
  if (typeof romanNumeral === "number") {
    return null;
  }
  var result = 0;
  var count_4_valid = 0;
  var splited = romanNumeral.split("");
  var keys = Object.keys(DIGIT_VALUES);

  for (var i = 0; i < splited.length; i++) {
    if (keys.indexOf(splited[i]) !== -1) {
      count_4_valid++;
    }
  }
  if (count_4_valid !== splited.length) {
    return null;
  }
  for (var i = 0; i < splited.length; i++) {
    if (DIGIT_VALUES[splited[i]] < DIGIT_VALUES[splited[i + 1]]) {
      result -= DIGIT_VALUES[splited[i]];
    } else {
      result += DIGIT_VALUES[splited[i]];
    }
  }
  return result;
};

var a = translateRomanNumeral("LX"); // 60
var b = translateRomanNumeral("IV"); // 4
var c = translateRomanNumeral(60);
console.log(a);
console.log(b);
console.log(c);
