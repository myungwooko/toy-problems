/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function() {
  // TODO: Your code here!
  arguments[0] = arguments[0].split('')
  for(var i = 1; i < arguments.length; i++) {
    arguments[i] = arguments[i].split('')
    var nextArgumentsIminusOne = [];
    for(var k = 0; k < arguments[i].length; k++) {
      if(arguments[i-1].indexOf(arguments[i][k]) !== -1) {
        nextArgumentsIminusOne.push(arguments[i][k]);
      }
    }
    arguments[i] = nextArgumentsIminusOne
    if(i === arguments.length -1) {
      return arguments[i];
    }
  }
};

var a = commonCharacters('acexivou', 'aegihobu', 'ae', 'e', 'c');   //=>[]
console.log(a)
var b = commonCharacters('acexivou', 'aegihobu', 'ae');             //=>['a', 'e']
console.log(b)
