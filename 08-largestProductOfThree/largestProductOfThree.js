/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  // TODO: everything
  if(array.length < 3) {
    return;
  }
  copiedOne = array.slice();
  copiedOne = copiedOne.sort(function(a, b){return b - a});
  countForMinus = 0;
  var result = 1;
  for (var i = 0; i < copiedOne.length; i++) {
    if (copiedOne[i] === 0) {
      copiedOne.splice(i , 1)
      i--;
    } else if (copiedOne[i] < 0) {
      countForMinus++;
    }
  }
  var afterArray = copiedOne;
  console.log(afterArray)
  if(afterArray.length ===3) {
    for(var i = 0; i < afterArray.length; i++) {
      result *= afterArray[i];
    }
  } else {
    if(afterArray[1] * afterArray[2] >= afterArray[afterArray.length-2] * afterArray[afterArray.length-1]) {
      result = afterArray[0] * afterArray[1] * afterArray[2]
    } else {
      result = afterArray[0] * afterArray[afterArray.length-2] * afterArray[afterArray.length-1]
    }
  }
  return result;
};

//design
//Copy the array and terminate 0 in that array. And then sort that array by a-b order.
//We can call that array as an afterArray after this line.
//If afterArray's length is equal to 3, just multiple all of afterArray's elements.
//If afterArray's length is greater than 3, compare a product of afterArray[1] * afterArray[2] And a product of  afterArray.length-1 * afterArray.length-2
//if former one is greater than latter one the result is a product of first three, otherwise result should be a product of afterArray[0] * latter one.


console.log(largestProductOfThree([2, 1, 3, 6, 0, -5, -4]) === 120)//true
console.log(largestProductOfThree([2, 1, 3, 7]) === 42)//true
console.log(largestProductOfThree([8, 4, -11, 3, 0, 1, 3, -5, -3, 7]) === 440)//true