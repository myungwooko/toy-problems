/**
 * Write a function that takes a number as its argument and 
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function (number) {
  // Your code here
  const arr = (number.toString()).split('')
  var before;
  var after;
  if (arr.indexOf('.') === -1) {
    return arr.join('') + '/1'
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === '.') {
      before = arr.slice(0, i);
      before = before.join('')
      after = arr.slice(i + 1, arr.length)
      after = after.join('')
      var forAftersUnder = '1' + ('0' * after.length)
    }
  }
  before = Number(before)
  after = Number(after)
  forAftersUnder = Number(forAftersUnder)
  var a = recursion(after, forAftersUnder)
  return (before * a[1]) + a[0] + '/' + a[1]

  function recursion(numChild, numParent) {
    if (numChild === 1) {
      return [numChild, numParent]
    }
    for (var i = 2; i <= numChild; i++) {
      if (numParent % i === 0 && numChild % i === 0) {
        numParent = numParent / i
        numChild = numChild / i
        return recursion(numChild, numParent)
      }
    }
  };
};

var a = toFraction(0.5)
console.log(a)

// 숫자를 쪼갠다 정수부분은 남겨놓고,

// 뒤에 부분이 0이면 return 앞수그대로/1

// else 뒷부분 분수로 변환하고 == 자릿수만큼의 0을 1뒤에 붙인것이 분모 분자는 그 수자체 그리고 공통으로 나눌수 있을때 까지 나눈다. 
// 그렇게 만들어지면 분모는 그대로 분모 분자는 (나온 분자 + 앞의수*나온 분모)