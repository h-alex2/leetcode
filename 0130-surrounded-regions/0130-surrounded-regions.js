/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  const visited = [...board].map(v => [...v]);

  function DFS(i, j) {
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
      return;
    } else {
      if (visited[i][j] === "O") {
        visited[i][j] = "X";
        DFS(i + 1, j);
        DFS(i - 1, j);
        DFS(i, j + 1);
        DFS(i, j - 1);
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    if (i === 0 || i === board.length - 1) {
      for (let j = 0; j < board[0].length; j++) {
        DFS(i, j);
      }
    } else {
      DFS(i, 0);
      DFS(i, board[0].length - 1);
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "O" && visited[i][j] === "O") {
        board[i][j] = "X";
      }
    }
  }
};
