/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character. (*number is first)
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function (string) {
  var obj = {}
  var result = [];
  var alp = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  for (var i = 0; i < string.length; i++) {
    if (!obj[string[i]]) {
      obj[string[i]] = 1;
    } else {
      obj[string[i]]++;
    }
  }
  for (var key in obj) {
    result.push([key, obj[key]])
  }
  result.sort(function (a, b) {
    return b[1] - a[1]
  })
  var sorting = (arr) => {
    var count = 0
    var tmp;
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i][1] === arr[i + 1][1]) {
        if (alp.indexOf(arr[i][0]) > alp.indexOf(arr[i + 1][0])) {
          tmp = arr[i][0]
          arr[i][0] = arr[i + 1][0]
          arr[i + 1][0] = tmp
          count++
        }
      }
    }
    if (count !== 0) {
      return sorting(arr)
    } else {
      return arr
    }
  }
  return sorting(result)
};

var a = characterFrequency('mmmaaaiiibbb')
console.log(a)