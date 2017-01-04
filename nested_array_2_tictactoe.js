function tic_tac_toe_board() {
  var board = [];
  var xo_random = ["X", "O", "X", "O", "X", "O", "X", "O", "X", "O"]
  for (var i = 0; i < 3; i++) {
    board[i] = []
    for (var j = 0; j < 3; j++){
      var randomer = Math.floor(Math.random()*xo_random.length)
      board[i].push(xo_random[randomer])
      xo_random.splice(randomer, 1)
    }
  }
  return board
}
function randomer (){
}

console.log(randomer());
console.log(tic_tac_toe_board()) // => make a random tic tic board
