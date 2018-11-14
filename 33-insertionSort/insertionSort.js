/*jshint expr:true*/

/**
 * Insertion sort is a basic sorting algorithm.
 *
 * Insertion sort iterates over an array, growing a sorted array behind the current location.
 * It takes each element from the input and finds the spot, up to the current point,
 * where that element belongs. It does this until it gets to the end of the array.
 *
 * Insertion sort should be implemented as a stable sort. This means that equal elements
 * should retain their relative order. Numbers, as primitives, give us no way to check this,
 * (i를 주는 이유: value가 같은 경우 i로 비교해서 순서를 줄 수 있도록)
 * so we'll be sorting objects with a value field, on which they will be sorted, like so:
 *
 * `[{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]`
 *
 * A stable sort must return `{value: 5, order: 1}, {value:5, order: 2}` in that order.
 *
 * ---
 *
 * EXTRA CREDIT:
 *
 * Refactor your sort to (optionally) take an explicit comparator function
 * as its second argument, so that callers can define arbitrary ways to sort elements.
 * See [Array.prototype.sort](http://devdocs.io/javascript/global_objects/array/sort)
 * for an example of how this works (excerpt below):
 *
 * > If `comparator(a, b)` is less than `0`, sort `a` to a lower index than `b`, i.e. `a` comes first.
 * > If `comparator(a, b)` returns `0`, leave `a` and `b` unchanged with respect to each other, but sorted with respect to all different elements.
 * (*결과가 0인 것 끼리는 자리를 안바꾸고 그대로 있지만 그렇지 않은 것들은 원래대로 오름차순으로 바뀐다는 얘기)
 * > If `comparator(a, b)` is greater than `0`, sort `b` to a lower index than `a`.
 *
 * If no comparator is given, just sort the elements using `<` or `>`.
 **/


// Example usage:
// insertionSort([{value: 2}, {value: 1}, {value: 3}]);
// yields [{value: 1}, {value: 2}, {value: 3}]

// This function is to help you test, and should not be incorporated in your solution.
// It will transform an array of numbers into an array of valid objects.
var testingTransform = function (array) {
  var transform = [];

  for (var i = 0; i < array.length; i++)
    transform.push({
      value: array[i],
      i: i
    });

  return transform;
};

// function (a, b) { return a - b} 와 function (a, b) {return b - a} 의 원리 

// a-b 의 원리 => 순서대로 가면서 뒤의 것과 비교해서 본 순서의 것 a와 그 다음 순서의 것 b에 대한 비교 a - b의 결과가 음수 또는 0이면 a는 앞인 그 자리에 그대로 있고,
// 결과가 양수이면 자리를 바꾸는 것이다. ex) 40, 100 -> 40 - 100 은 음수 -60 so-> 자리 그대로 -> 40, 100 => 오름차순이 된다.  
// b-a 의 원리 => 똑같이 a를 기준으로 가는데 음수 양수의 계산은 둘을 바꿔서 하고 위에서의 정하는 원리는 그대로 가져와서 음수 또는 0이면 a는 앞인 그 자리에 그대로 있고, 
// 결과가 양수이면 자리를 바꾸는 것이다. ex) 40, 100 -> 100 - 40 은 양수 60 so-> 자리 바꾼다 -> 100, 40 => 내림차순이 된다. 


// 어쨌든 개념정리를 마치고 이 문제의 요지를 정리해보면
// sort를 한다. sort의 개념은 만약 "앞의 것이 더 크면(a-b>0) 위치를 바꿔준다"이다. 아니면 그대로 둔다.  
// 근데 만약 여기서 comparator가 들어오면 comparator의 
// 결과가 기준이 되어 양수면(comparator(a,b) > 0) 바꿔준다 이다. 아니면 역시 그대로 둔다. 
// 그리고 기본 sorting 개념에서 value가 같은게 나오면 i에 의해 sort를 한다. 하지만 i는 있는 순서대로 부여 받았으므로 특별히 i를 내림차순으로서 sort하는게 아니라면 
// 역시 그대로 두면 된다.

var insertionSort = function (array, comparator) {
  var sorting = (arr) => {
    var count = 0;
    var tmp;
    for (var i = 0; i < arr.length - 1; i++) {
      if (comparator) {
        if (comparator(arr[i], arr[i + 1]) > 0) {
          tmp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = tmp;
          count++;
        }
      } else {
        if (arr[i].value > arr[i + 1].value) {
          tmp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = tmp;
          count++;
        }
      }
    }
    if (count !== 0) {
      return sorting(arr)
    } else {
      return arr
    }
  }
  return sorting(array)
}

var array = testingTransform([1, 7, 2, 3, 3, 4, 5, 3]);
array[4].i = 2
var a = insertionSort(array, function (a, b) {
  return b.i - a.i
});
console.log(a)