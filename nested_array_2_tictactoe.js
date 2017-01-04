function tic_tac_toe_board() {
  var xo_random = [];
  var tictactoe = [];
  let x = 0;
  let o = 0;

  for(var i = 0; i < 9;i++){
    let random = Math.random();
  if( x < 5 && o < 5 ){
    if(random < 0.5){
      x++;
      xo_random.push("X")
    }else{
      o++;
      xo_random.push("O")
    }
  } else {
    if(x = 5){
      x++
      xo_random.push("X")
    }else{
      o++
      xo_random.push("O")
    }
  }
}

  var chunk = 3;
  for (var k = 0; k < xo_random.length; k += chunk ){
    tictactoe.push(xo_random.slice(k, k+chunk));
  }

  return tictactoe;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
