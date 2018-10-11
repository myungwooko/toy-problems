/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var balancedParens = function(input) {
    var storage = [];
    for(var i = 0; i < input.length; i++) {
        if(['[', '{', '('].includes(input[i])) {
            storage.push(input[i]);
        } else if(input[i] === ']') {
            if(storage.pop() !== '[')  return false; 
        } else if(input[i] === '}') {
            if(storage.pop() !== '{')  return false; 
        } else if(input[i] === ')') {
            if(storage.pop() !== '(')  return false; 
        }
    }
    return storage.length === 0 ? true : false;
}


var a = balancedParens('(');  // false
var b = balancedParens('()'); // true
var c = balancedParens(')(');  // false
var d = balancedParens('(())');  // true
var e = balancedParens('[](){}'); // true
var f = balancedParens('[({})]');   // true
var g = balancedParens('[(]{)}'); // false
var h = balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
var i = balancedParens(' var hubble = function() { telescopes.awesome();'); // false

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)
console.log(h)
console.log(i)

//powered by hv