/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */

// // Solved in O(n) time with O(1) memory

var sumArray = array => {
  let sum = 0;
  let result = array[0];
  array.forEach(item => {
    sum += item;
    if (sum >= result) {
      result = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  });
  return result;
};

console.log(sumArray([10, 1, 4, 5, -1, 1000, 3])); // => 1022
console.log(sumArray([1, 2, 3, -4])); // 6
console.log(sumArray([1, 2, 3, -4, 5])); // 7
console.log(sumArray([4, -1, 5])); // => 8
console.log(sumArray([10, -11, 11])); // 11
