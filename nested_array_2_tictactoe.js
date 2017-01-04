"use strict"

function tic_tac_toe_board() {
  var xo_random = ["X", "O", "X", "O", "X", "O", "X", "O", "X"]
  var table = []
  for (let i = 0; i < 3; i++) {
    table.push([]);
    table[i].push(xo_random[Math.floor(Math.random() * 9)]);
    table[i].push(xo_random[Math.floor(Math.random() * 9)]);
    table[i].push(xo_random[Math.floor(Math.random() * 9)]);
  }
  return table;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
