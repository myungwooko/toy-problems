/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str){
    var arr = str.split('')
    var originModel = arr.sort().slice();
    var result = arr.sort().slice();

    function recursion(array, num, startPoint) {
        if(num > str.length) {
            return; 
        }
        var beforeLength = array.length;
        for(var i = startPoint; i < array.length; i++) {
            for(var z = 0; z < originModel.length; z++) {
                var ele = (array[i] + originModel[z]).split('').sort().join('')
                if(checkForSame(ele) && array.indexOf(ele) === -1) {
                    array.push(ele);
                }
            }
        }
        var afterLength = array.length;
        var nextStartPoint = afterLength - beforeLength;
        recursion(array, num+1, nextStartPoint)
    };
    
    recursion(result, 2, 0)
    var result = [''].concat(result).sort()
    return result
};

function checkForSame(str) {
    var arr = str.split('')
    for(var i = 0; i < arr.length - 1; i++) {
        for(var z = i+1; z < arr.length; z++) {
            if(arr[i] === arr[z]) {
                return false;
            }
        }
    }
    return true;
};

var a = powerSet("jump");
console.log(a)
var b = powerSet("abc");
console.log(b)