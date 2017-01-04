function tic_tac_toe_board() {
  var board = [];
  var xo_random = ["X", "O", "X", "O", "X", "O", "X", "O", "X"]
  for (var i = 0; i < 3; i++) {
    board[i] = []
    for (var j = 0; j < 3; j++){
      board[i].push(xo_random[j*i])
    }
  }
  return board
}
function randomer (){
  return Math.floor(Math.random()*xo_random.length)
}

console.log(randomer());
console.log(tic_tac_toe_board()) // => make a random tic tic board
