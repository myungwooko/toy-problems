/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  var str = string.toUpperCase();
  var obj = {};
  for(var i = 0; i < str.length; i++) {
    if(!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  for(var key in obj) {
    if(obj[key]===1) {
      return key;
    }
  }
};

var a = firstNonRepeatedCharacter('ABA'); // => 'B'
var b = firstNonRepeatedCharacter('AACBDB'); // => 'C'
console.log(a)
console.log(b)