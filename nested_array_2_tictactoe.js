// "use strict"

function tic_tac_toe_board() {
  let xo_random = [];
  let playBoard = [];
  let valueO	= 0;
  let valueX	= 0;

  for(var i = 0; i < 9;i++){
  	let randomCount = Math.random();
  	if(valueO < 5 && valueX < 5){
  		if(randomCount < 0.5){
  			valueO++;
  			xo_random.push("O")
  		} else{
  			valueX++;
  			xo_random.push("X")
  		}
  	} else{		
  		if(valueO = 5){
  			valueO++;
  			xo_random.push("O")
  		} else{
  			valueX++;
  			xo_random.push("X")
  		}
  	}
  }

  let chunk = 3;
  for (var j = 0; j < xo_random.length; j += chunk ){
    playBoard.push(xo_random.slice(j, j+chunk));
  }
  return playBoard;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
