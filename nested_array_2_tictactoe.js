// function tic_tac_toe_board() {
//   var xo_random = ["X", "O", "X", "O", "X", "O", "X", "O", "X"]
// }

// console.log(tic_tac_toe_board()) // => make a random tic tic board


function tictactoeRandom() {
  var temp = []
  for (var i = 0; i < 3; i++) {
    var random = Math.random()
    if (random > 0.5) {
      temp.push('X')
    }else if (random < 0.5) {
      temp.push('O')
    }
  }
  return temp
}

function newTable() {
  var table = []
  for (var i = 0; i < 3; i++) {
    console.log(tictactoeRandom());
  }
}

newTable()
