function tic_tac_toe_board() {
  var xo_random = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
  var index = [0,1,2,3,4,5,6,7,8];
  var result = [];
  var shuffIndex = shuffle(index);

  for(let i=0;i<3;i++){
    let x = [];
    result.push(x);
  }

  for(let i=0 ;i< 3 ;i++){
    result[0].push(xo_random[shuffIndex[i]]);
  }
  for(let i=3; i<6; i++){
    result[1].push(xo_random[shuffIndex[i]]);
  }
  for(let i=6;i<9;i++){
    result[2].push(xo_random[shuffIndex[i]]);
  }

  shuffIndex = shuffle(index);
  return result;
}

function shuffle(arr){
  var currentIndex = arr.length;
  var temp;
  var shuffIndex;
  while(currentIndex !== 0){
    shuffIndex = Math.floor(Math.random()* currentIndex);
      currentIndex -= 1;

      temp= arr[currentIndex];
      arr[currentIndex] = arr[shuffIndex];
      arr[shuffIndex] = temp;
    }
    return arr;
  }


console.log(tic_tac_toe_board()) // => make a random tic tic board
