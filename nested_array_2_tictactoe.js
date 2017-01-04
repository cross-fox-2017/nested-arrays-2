"use strict"

function tic_tac_toe_board() {
  var xo_random = ["X", "O", "X", "O", "X", "O", "X", "O", "X", "O"]
  var table = []
  var countO = 0;
  var countX = 0;
  for (let i = 0; i < 3; i++) {
    table.push([]);
    table[i].push(xo_random[Math.floor(Math.random() * 10)]);
    table[i].push(xo_random[Math.floor(Math.random() * 10)]);
    table[i].push(xo_random[Math.floor(Math.random() * 10)]);
  }
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (table[i][j] == "X") {
        countX += 1;
      } else {
        countO += 1;
      }
    }
  }

  if (countX > 5 || countO > 5) {
    return tic_tac_toe_board();
  } else {
    return table;
  }
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
