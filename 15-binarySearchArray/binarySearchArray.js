/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

var binarySearch = function (array, target) {
    function recursion(arr, accumulated) {
        if(arr.length === 2) {
            for(var i = 0; i < arr.length; i++) {
                if(arr[i] === target) {
                    return [i + accumulated]
                }
            }
        }
        var center = arr.length/2
        if(center.toString().split('').indexOf('.') === -1) {
            center -= 1;
        } else {
            center = Math.floor(arr.length/2)
        }
        var arrL = arr.slice(0, center);
        var arrR = arr.slice(center, arr.length)
        for(var i = 0; i < arrL.length; i++) {
            if(arrL[i] === target) {
                return [i + accumulated]
            }
        }
        accumulated += arrL.length;
        return recursion(arrR, accumulated); 
    }
    return recursion(array, 0)
};

 var index = binarySearch([1, 2, 3, 4, 5], 4);
 console.log(index); // [3]

