/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function (n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function (i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function (i, j) {
    return !!this[i][j];
  }
  return board;
};

var robotPaths = function (n) {
  var count = 0;
  var board = makeBoard(n);

  function finding_path(i, j) {
    board.togglePiece(i, j)
    if (i === n - 1 && j === n - 1) {
      count++
    } else {
      if (j - 1 >= 0 && !board.hasBeenVisited(i, j - 1)) {
        finding_path(i, j - 1)
        board.togglePiece(i, j - 1)
      }
      if (i - 1 >= 0 && !board.hasBeenVisited(i - 1, j)) {
        finding_path(i - 1, j)
        board.togglePiece(i - 1, j)
      }
      if (j + 1 < n && !board.hasBeenVisited(i, j + 1)) {
        finding_path(i, j + 1)
        board.togglePiece(i, j + 1)
      }
      if (i + 1 < n && !board.hasBeenVisited(i + 1, j)) {
        finding_path(i + 1, j)
        board.togglePiece(i + 1, j)
      }
    }
  };
  finding_path(0, 0)
  return count;
};




console.log(robotPaths(3));