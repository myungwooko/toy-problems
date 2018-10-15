/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function (string) {
  // TODO: Your code here!
  var theLongestCount = 1;
  var forResult = 0;
  var result;
  var obj = {}
  for (var i = 1; i < string.length; i++) {
    if (string[i] === string[i - 1]) {
      theLongestCount++
    } else {
      if (theLongestCount !== 1) {
        obj[string[i - 1]] = [
          [i - theLongestCount, i - 1], theLongestCount
        ];
        theLongestCount = 1;
      } else {
        theLongestCount = 1
      }
    }
  }
  if (Object.keys(obj).length === 0) {
    return [0, 0]
  } else {
    for (var key in obj) {
      if (obj[key][1] > forResult) {
        forResult = obj[key][1]
        result = obj[key][0]
      }
    }
  }
  return result;
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};


var a = longestRun("abbbcc") // [1, 3]
var b = longestRun("bbaac") // [0, 1]
var c = longestRun("abcd") // [0, 0]
console.log(a);
console.log(b);
console.log(c);
var d = randomString(12)
console.log(d)
var final = longestRun(d)
console.log(final)