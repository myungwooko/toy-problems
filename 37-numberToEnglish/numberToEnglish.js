/**
 * Extend the Number prototype with a new method called `toEnglish`.
 * It should return the number as a string using English words.
 * Examples:
 *   (7).toEnglish(); // > "seven"
 *   (575).toEnglish(); // > "five hundred seventy-five"
 *   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
 *
 * Extra credit: Make your function support decimals.
 * Example:
 *   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
 *
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

Number.prototype.toEnglish = function () {
  var result = '';

  function underhundred(n) {
    var result = '';
    for (var key in numbersToWords) {
      if (n.length === 1) {
        if (key === n) {
          return numbersToWords[key]
        }
      } else if (n.length === 2) {
        for (var key1 in numbersToWords) {
          if (key1 === n) {
            return numbersToWords[key1]
          }
        }
        if (n[0] !== '0') {
          if (key.length === 2 && key[0] === n[0]) {
            result += numbersToWords[key] + '-'
            for (var key2 in numbersToWords) {
              if (key2 === n[1]) {
                result += numbersToWords[key2]
                return result;
              }
            }
          }
        } else {
          for (var key3 in numbersToWords) {
            if (key3 === n[1]) {
              result += numbersToWords[key3]
              return result;
            }
          }
        }
      }
    }
  };
  var strN = this.toString();
  var arr = strN.split('');
  var obj = {}

  if (arr.indexOf('.') === -1) {
    for (var i = 0; i < arr.length; i++) {
      obj[i] = [arr[i], (Math.pow(10, arr.length - (i + 1))).toString()];
    }
    if (arr.length <= 2) {
      result += underhundred(strN)
    } else if (arr.length === 3) {
      if (numbersToPlace[strN]) {
        return 'one ' + numbersToPlace[strN]
      } else {
        result += underhundred(arr[0]) + ' hundred '
        result += underhundred(arr[1] + arr[2]);
      }
    } else if (arr.length === 4) {
      if (numbersToPlace[strN]) {
        return 'one ' + numbersToPlace[strN]
      } else {
        result += underhundred(arr[0]) + ' thousand '
        result += underhundred(arr[1]) + ' hundred '
        result += underhundred(arr[2] + arr[3]);
      }
    } else {
      for (var key in obj) {
        for (var key1 in numbersToPlace) {
          if (obj[key][1] === key1) {
            if (underhundred(obj[key][0]) !== 'zero') {
              arr[key] = underhundred(obj[key][0]) + ' ' + numbersToPlace[key1] + ' '
            } else {
              if (arr[key - 1].length === 1) {
                arr[key - 1] = arr[key - 1] + '0'
              }
              arr[key] = numbersToPlace[key1] + ' '
            }
          }
        }
      }
      if (arr[arr.length - 4].length > 4 && arr[arr.length - 3].length > 4) {
        if ((arr[arr.length - 3].split(' '))[1].length === 0) {
          arr[arr.length - 3] = '0'
        }
      }
      for (var i = 0; i < arr.length - 3; i++) {
        if (arr[i].length > 2) {
          var temporary = arr[i].split(' ');
          if (temporary.length > 2 && temporary[0] !== 'one') {
            arr[i - 1] += forTemporary[temporary[0]]
            arr[i] = temporary[1]
          } else if (temporary[0] === 'one') {
            arr[i] = temporary[1]
          }
        }
      }
      var beforeResult = []
      for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i].length <= 4 && arr[i + 1].length <= 4) {
          if (typeof arr[i + 2] !== 'undefined') {
            if (arr[i + 2].length <= 4) {
              beforeResult.push(arr[i] + arr[i + 1] + arr[i + 2])
              break;
            }
          }
          beforeResult.push(arr[i] + arr[i + 1])
          i++;
        } else {
          beforeResult.push(arr[i])
        }
      }
      if (beforeResult[0].length > 4 && beforeResult[0].length < 12) {
        beforeResult[0] = 'one ' + beforeResult[0]
      }
      for (var i = 0; i < beforeResult.length; i++) {
        if (beforeResult[i].length < 4) {
          beforeResult[i] = (Number(beforeResult[i])).toEnglish();
        }
      }
      for (var i = 0; i < beforeResult.length; i++) {
        if (beforeResult[i] === 'zero') {
          beforeResult.splice(i, 1)
        }
      }
      var values = []
      for (var key in numbersToPlace) {
        values.push(numbersToPlace[key])
      }
      for (var i = 0; i < beforeResult.length - 1; i++) {
        var a = beforeResult[i].split(' ');
        if (values.indexOf(a[a.length - 1]) !== -1 && values.indexOf(beforeResult[i + 1].split(' ')[0]) !== -1) {
          beforeResult[i + 1] = 'one ' + beforeResult[i + 1]
        }
      }
      for (var i = 0; i < beforeResult.length; i++) {
        var splited = beforeResult[i].split(' ');
        if (splited[splited.length - 1] === '') {
          var thereIsHundred = splited;
          thereIsHundred.pop()
          beforeResult[i] = thereIsHundred.join(' ');
        }
      }
      return beforeResult.join(' ');
    }
  } else {
    strN = strN.split('.')
    strN.splice(1, 0, " and ")
    return Number(strN[0]).toEnglish() + strN[1] + Number(strN[2]).toEnglish() + ' ' + numbersToPlace[Math.pow(10, strN[2].length).toString()] + 'ths';
  }
  return result;
};


var a = (7).toEnglish(); //  "seven"
var b = (575).toEnglish(); //  "five hundred seventy-five"
var c = (78193512).toEnglish(); //  "seventy-eight million one hundred ninety-three thousand five hundred twelve"
var d = (150043.273).toEnglish() //  "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
var e = (150043).toEnglish() //  "one hundred fifty thousand forty-three"

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// ref
// Number.prototype.toEnglish = function () {
//   var [int, frac] = ('' + this).split('.');
//   var perThreeDigits = function (num) {
//     var str = '';
//     if (num > 99) { str += numbersToWords[Math.floor(num / 100)] + ' hundred '; }
//     num %= 100;
//     if (num === 0) { return str.slice(0, -1); }
//     if (num <= 20) { 
//       str += numbersToWords[num];
//       return str;
//     }
//     str += numbersToWords[num - (num % 10)];
//     if (num % 10 > 0) { str += '-' + numbersToWords[num % 10]; }
//     return str
//   }
//   var makeString = function (num) {
//     if (num === '0') { return 'zero'; }
//     var arr = [];
//     var place = 1;
//     while (num >= 1) {
//       var threeDigits = num % 1000;
//       num -= threeDigits;
//       num /= 1000;
//       place *= 1000;
//       if (threeDigits === 0) { continue; }
//       place === 1000 || arr.unshift(numbersToPlace[place / 1000]);
//       arr.unshift(perThreeDigits(threeDigits))
//     }
//     return arr.join(' ');
//   }
//   if (frac === undefined) { return makeString(int); }
//   var bunMo = makeString(10 ** frac.length);
//   if (bunMo.slice(0, 4) === 'one ') { bunMo = bunMo.slice(4); }
//   bunMo = bunMo.split(' ').join('-');
//   var fracString = makeString(frac) === 'one'
//   ? makeString(frac) + ' ' + bunMo + 'th'
//   : makeString(frac) + ' ' + bunMo + 'ths'
//   return int === '0'
//   ? fracString
//   : makeString(int) + ' and ' + fracString
// };