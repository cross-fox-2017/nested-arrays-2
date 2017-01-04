function tic_tac_toe_board() {
	var xo_random = ["X", "O", "X", "O", "X", "O", "X", "O", "X"]
	var tictac = [];
	var i, j, chunk = 3;

	for(i=0, j=xo_random.length; i<j; i+=chunk){
		tictac.push(xo_random.slice(i, i+chunk));
	}

	return tictac;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
