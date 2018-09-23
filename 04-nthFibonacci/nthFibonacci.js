/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */

// just by for loop
// var nthFibonacci = function (n) {
//   // TODO: implement me!
//   var fib = [0, 1]
//   if(n === 0) {
//     return 0;
//   } else if(n === 1) {
//     return 1;
//   } else {
//     for(var i = 2; i <= n; i++) {
//       fib[i] = fib[i-1] + fib[i-2];
//     }
//     return fib[fib.length-1]
//   }
// };

// var a = nthFibonacci(2);  // => 1
// var b = nthFibonacci(3);  // => 2
// var c = nthFibonacci(30); // => 832040

// console.log(a)
// console.log(b)
// console.log(c)



//recursive solution
var nthFibonacci = function (n) {
  // TODO: implement me!
  var fib = [0, 1];
  var count = 0;
  if(n === 0) {
    return 0;
  } else if(n === 1) {
    return 1;
  } else {
    return recursion(count);
  }
  function recursion(count) {
    if(count === n-1) {
      return fib[count-1] + fib[count];
    }
    fib[count+2] = fib[count] + fib[count+1]
    count++;
    return recursion(count)
  }
};

var a = nthFibonacci(2);  // => 1
var b = nthFibonacci(3);  // => 2
var c = nthFibonacci(30); // => 832040

console.log(a)
console.log(b)
console.log(c)
