function tic_tac_toe_board() {

  let x = 0;
  let o = 0;
  let board = [[],[],[]];

  for (let i = 0; i < 3; i++) {
    let board =[]
    for (let j = 0; j < 3; j++) {
      board.push([])
      let random = Math.random();
      if( x < 5 && o < 5){
        if (random > 0.5) {
          x++;
          board[i].push('X')
        }
        else {
          o++;
          board[i].push('O')
        }
      }
      else {
        if (x == 5) {
          board[i].push('O')
        }
        else {
          board[i].push('X')
        }
      }
    }
  }
  return board;
}

console.log(tic_tac_toe_board()) // => make a random tic tac toe board
