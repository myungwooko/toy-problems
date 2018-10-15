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
  var result = [0, 0];
  for (var i = 1; i < string.length; i++) {
    if (string[i] === string[i - 1]) {
      theLongestCount++
    } else {
      if (theLongestCount !== 1) {
        if (theLongestCount > forResult) {
          forResult = theLongestCount;
          result = [i - theLongestCount, i - 1];
          theLongestCount = 1;
        }
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