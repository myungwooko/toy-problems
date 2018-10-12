'use strict';

/* Implement the function asyncMap:
 *
 * asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
 * Each of the tasks takes a separate callback and invokes that callback when complete.
 *
 * The callback passed to asyncMap is then performed on the results of the callbacks of the tasks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
 * on the results array.
 *
 *
 * Example:
 *
 * asyncMap([
 *  function(cb){
 *    setTimeout(function(){
 *      cb('one');
 *    }, 200);
 *  },
 *  function(cb){
 *    setTimeout(function(){
 *      cb('two');
 *    }, 100);
 *  }
 * ],
 *  function(results){
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
 *    console.log(results); // ['one', 'two']
 * });
 *
 *
 */


function a () {
  return 1
}

function asyncMap(tasks, callback) {
  var a = JSON.stringify(tasks[0])
  var resultsArray = [];
  var resultsCount = 0;
   for (var i = 0; i < tasks.length; i++) {
    (function (i) {
      tasks[i](function (val) {
        resultsArray[i] = val;
        resultsCount++;
        if (resultsCount === tasks.length) { //resultsCount를 해주는 이유는 지금의 예에서 takks[1]이 먼저 실행되면 resultsArray의 index1이 바로 채워지면서  
          callback(resultsArray);            // resultArray[0]은 그와동시에 <empty>로 일단 채워지기 때문에 length는 2가 된다.
        }                                    // 근데 우리가 원하는 건 제 순서에 제값을 다 받는 거라서 그것들의 실행이 이루어진 것을 체크하는 resultCount를 사용한 것이다. 
      });
    })(i);
  }
}


var a = asyncMap([
  function(cb){
    setTimeout(function(){
      cb('one');
    }, 8000);
  },
  function(cb){
    setTimeout(function(){
      cb('two');
    }, 3000);
  }
 ],
  function(results){
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
    console.log(results); // ['one', 'two']
 });
 
 
 console.log(a)
