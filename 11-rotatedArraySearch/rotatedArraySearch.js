/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

var rotatedArraySearch = function (rotated, target) {
  // Your code here:
  function recursion(accumulated, array) {
    var theCenter = Math.floor(array.length/2)
    if(array.length === 1) {
      if(array[0] === target) {
        return accumulated;
      } else {
        return null;
      }
    }
    for(var i = 0; i < theCenter; i++) {
      if(array[i] === target) {
        return accumulated + i;
      } else {
        array = array.splice(theCenter, array.length);
        accumulated += theCenter
        return recursion(accumulated, array)
      }
    }
  }
  return recursion(0, rotated)
};

var a = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2)   // === 5
var b = rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) // === null
var c = rotatedArraySearch([4, 7, 1, 2, 3, 11], 11)    // === 5
var d = rotatedArraySearch([4, 7, 1, 2, 3, 11], 123)   // === null
console.log(a)
console.log(b)
console.log(c)
console.log(d)