var table=[];
for(var i=0;i<3;i++){
  var j=[ ];
  table.push(j);
}


function tic_tac_toe_board() {
  var xo_random = ["X", "O", "X", "O", "X", "O", "X", "O", "X"]
  var x= 'X';
  var o= 'O';
  var rand=0;
  var xCount=0;
  var oCount=0;

  for(var i=0;i<3;i++){

    for(var j=0;j<3;j++){
      if(rand===0 && xCount<5){
        table[i].push(x)
        xCount++;
        rand =1;
      }
      else if(rand===1 && oCount<5){
        table[i].push(o)
        oCount++;
        rand=0;
      }

    }
  }
  return table;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
