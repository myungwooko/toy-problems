/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */

//The easiest way
// var deepEquals = function(apple, orange){
//   var apple  = JSON.stringify(apple);
//   var orange = JSON.stringify(orange);
//   if(apple === orange) {
//     return true;
//   } else {
//     return false;
//   }
// };


//Another way using recursion
var deepEquals = function(apple, orange){
  return recursion(apple, orange)
};

function recursion(obj1, obj2) {
  var key1 = Object.keys(obj1);
  var key2 = Object.keys(obj2);
  if(key1.length !== key2.length) {
    return false;
  } 
  for(var i = 0; i < key1.length; i++) {
    if(typeof obj1[key1[i]] === 'object' && typeof obj2[key2[i]] === 'object') {
      return recursion(obj1[key1[i]], obj2[key2[i]])
    } else {
      if(obj1[key1[i]] !== obj2[key2[i]]) {
        return false;
      }
    }
  }
  return true;
}


var a = deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
var b = deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
var c = deepEquals({a:1, b: {c: {d: 3}}},{a:1, b: {c: {d: 3}}}); // true
var d = deepEquals({a:1, b: {c: {d: 3}}},{a:1, b: {c: {e: 6}}}); // false

console.log(a)
console.log(b)
console.log(c)
console.log(d)