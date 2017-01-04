function tic_tac_toe_board() {
  var xo_random = ["X", "O", "X", "O", "X", "O", "X", "O", "X"]
  var board = [];
  for (var i = 0; i < 3; i++) {
    board[i] = []
    for (var j = 0; j < 3; j++){
      board[i].push(xo_random[j*i])
    }
  }
  return board
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
