/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

//Done
rockPaperScissors = function (number) {
  var model = ["rock", "paper", "scissors"];
  result = []
  for(var i = 0; i < model.length; i++) {
    recursion(number-1, [model[i]])
  }
  function recursion (number, arr) {
    if(number === 1) {
      for(var i = 0; i < model.length; i++) {
        var arr1 = arr.slice(); 
        arr1.push(model[i])
        result.push(arr1) 
      }
    } else {
        for(var i = 0; i < model.length; i++) {
          var arr1 = arr.slice();       //slice()를 안해주면 array들이 참조로 연결되기 때문에 해당 순서의 for문 안에서 다음 순서로 넘어갔을때  
          arr1.push(model[i])           //변형된 것을 가지고 다음을 진행시키기 때문에 결과적으로 점점 늘어난 개수의 것이 result에 더해지게 된다. 그러므로  
          recursion(number-1, arr1)     //원하는 결과를 얻으려면 각각의 순서는 원래의 것을 slice()를 통해 그대로 copy한 뒤 진행하여 영향을 주지도 받지도
        }                               //않아야 한다.
      }
  }
  return result;
  }
  var result = rockPaperScissors(6);
  console.log(result);
  

// Wrong version - except slice() 
// rockPaperScissors = function (number) {
// var model = ["rock", "paper", "scissors"];
// result = []
// for(var i = 0; i < model.length; i++) {
//   recursion(number-1, [model[i]])
// }
// function recursion (number, arr) {
//   if(number === 1) {
//     for(var i = 0; i < model.length; i++) {
//       var arr1 = arr.slice(); 
//       arr1.push(model[i])
//       result.push(arr1) 
//       console.log('result:', result)
//     }
//   } else {
//       for(var i = 0; i < model.length; i++) {
//         arr.push(model[i])
//         recursion(number-1, arr)      
//       }
//     }
// }
// return result;
// }

// var result = rockPaperScissors(3);
// console.log(result);

// result-->
// [...
//   [ 'scissors', 'rock', 'paper', 'rock' ],
//   [ 'scissors', 'rock', 'paper', 'paper' ],
//   [ 'scissors', 'rock', 'paper', 'scissors' ],
//   [ 'scissors', 'rock', 'paper', 'scissors', 'rock' ],
//   [ 'scissors', 'rock', 'paper', 'scissors', 'paper' ],
//   [ 'scissors', 'rock', 'paper', 'scissors', 'scissors' ] ]
// ]
//
//


