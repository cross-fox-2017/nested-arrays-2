var table=[];
for(var i=0;i<3;i++){
  var j=[ ];
  table.push(j);
}
function acak(arr){
  return
}
function tic_tac_toe_board() {
  var xo_random = ["X", "O", "X", "O", "X", "O", "X", "O", "X"]
  var x= 'X';
  var o= 'O';
  var rand=0;
  var xCount=0;
  var oCount=0;

  for(var i=0;i<3;i++){
    rand=Math.round(Math.random());
    for(var j=0;j<3;j++){

      if(rand===1 && xCount<=5){
        table[i].push(x)
        xCount++;
        rand = 0;
      }
      else if(rand===0 && oCount<=5){
        table[i].push(o)
        oCount++;
        rand= 1;
      }

    }
  }

  return table;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
