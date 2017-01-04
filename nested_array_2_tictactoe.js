
function tic_tac_toe_board() {
  var xo_random = random(xo_random_choosen());
  var xo_chunk = [];
  var chunk = 3;
  var i,j;

  for(i=0,j=xo_random.length; i<j; i+=chunk){
    xo_chunk.push(xo_random.slice(i, i+chunk))
  }
  return xo_chunk;
}

function random(array){
  //for(var k=array.length-1; k>0; k--){
  for(var k=0; k<array.length; k++){
    var l = Math.floor(Math.random()*(k+1));
    var temp = array[l];
    array[l] = array[k];
    array[k] = temp;
  }
  return array;
}

function xo_random_choosen(){
  var arr_random_choosen = [["X", "O", "X", "O", "X", "O", "X", "O", "X"],["O", "X", "O", "X", "O", "X", "O", "X","O"]];

  return arr_random_choosen[Math.floor((Math.random()*2))];
}

//console.log(tic_tac_toe_board()) // => make a random tic tic board
console.log(tic_tac_toe_board());
