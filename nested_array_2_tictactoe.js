function tic_tac_toe_board() {

  var xo_random = ["X", "O", "X", "O", "X", "O", "X", "O", "X","O"];

  var result = [];
  var mainArr =[];
  var arr = [];
  var countX = 0;
  var countO = 0;

  for(let i = 0; i < 9;i++){

    var rand = Math.floor(Math.random()*9);
    arr.push(rand);
  }
  mainArr.push(arr);

  for(let m = 0; m < mainArr.length;m++){

    for(let n = 0; n < mainArr[m].length;n++){

      result.push(xo_random[mainArr[m][n]])
    }
  }

  for(let o = 0; o < result.length;o++){
    
    if(result[o] === "X" )
    {
      countX += 1;
    }else {
      countO += 1;
    }
  }

  if(countX == 4 && countO == 5 || countO == 4 && countX == 5 )
  {
    return result;
  }else {
    return tic_tac_toe_board();
  }

}

console.log(tic_tac_toe_board()) // => make a random tic tic board
