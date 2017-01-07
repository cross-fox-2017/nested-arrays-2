function tic_tac_toe_board() {
	var xo_random = ["X", "O", "X", "O", "X", "O", "X", "O", "X", "O"].sort(function(){return .5-Math.random()});
	xo_random.pop();

	var tictac = [];
	var i, j, chunk = 3;

	for(i=0, j=xo_random.length; i<j; i+=chunk){
		tictac.push(xo_random.slice(i, i+chunk));
	}

	return tictac;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board

function test() {
	let data = tic_tac_toe_board();
		data = data.join('').split(',').join('');
		x = data.split('O').join('') .length;
		o = data.split('X').join('') .length;
	if((o===4||o===5)&&(x===4||x===5)){
		return true;
	}
	return false;
}

console.log(test());
