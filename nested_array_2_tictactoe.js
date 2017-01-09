function tic_tac_toe_board() {
  var xo_random = ["X", "O", "X", "O", "X", "O", "X", "O", "X"]
  var tampung = [];
  var countX = 0;
  var countO = 0;
  for (var i = 0; i < 9; i++){
  	var random = Math.floor((Math.random() * 2) + 1);
  	if(random == 1){
  		if(countX !== 5){
  			tampung.push("X");
  			countX++
  		}
  	}
  	else if (random == 2){
  		if(countO !== 5){
  			tampung.push("O");
  			countO++;
  		}
  	}
  }
  	return tampung;
}
 
// console.log(tic_tac_toe_board()) // => make a random tic tic board
console.log(tic_tac_toe_board());