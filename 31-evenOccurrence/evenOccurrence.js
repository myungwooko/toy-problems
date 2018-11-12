/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
 */

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
 */

var evenOccurrence = function (arr) {
  // Your code here.
  var count = 0;
  var obj = {}
  for (var i = 0; i < arr.length - 1; i++) {
    for (var z = i + 1; z < arr.length; z++) {
      if (arr[z] === arr[i]) {
        count++
      }
    }
    if (count === 1) {
      obj[arr[i]] = 2
    }
    count = 0
  }
  for (var i = 0; i < arr.length; i++) {
    if (obj[arr[i]] !== undefined) {
      return arr[i]
    }
  }
};

var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
console.log(onlyEven); //  4