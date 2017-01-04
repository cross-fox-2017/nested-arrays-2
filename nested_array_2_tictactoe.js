function tic_tac_toe_board() {
  var xo_random = ["X", "O", "X", "O", "X", "O", "X", "O", "X"]
  let ticTacToe = [];
  let randomIndex = [0,1,2,3,4,5,6,7,8]
  let acak = shuffle(randomIndex);

  for(let i = 0; i < 3; i++){
    let arr = [];
    ticTacToe.push(arr);
  }

  for(let i = 0; i < 3; i++){
    ticTacToe[0].push(xo_random[acak[i]]);
  }
  for(let i = 3; i < 6; i++){
    ticTacToe[1].push(xo_random[acak[i]]);
  }
  for(let i = 6; i < 9; i++){
    ticTacToe[2].push(xo_random[acak[i]]);
  }

  acak = shuffle(randomIndex);

  return ticTacToe;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
