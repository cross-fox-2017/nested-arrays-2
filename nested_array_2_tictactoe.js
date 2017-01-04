function tic_tac_toe_board() {
    var array = []
    var cek1 = []
    var cek2 = []
    while (array.length < 9) {
        var acak = Math.ceil(Math.random() * 2)
        if(acak==1 && cek1.length<5){
          cek1.push(acak)
          array.push("X")
        }else if(acak ==2 && cek2.length<5){
          cek2.push(acak)
          array.push("O")
        }
    }

    var letter_gird = [];
    var chunk = 3;
    for (var j = 0; j < array.length; j += chunk) {
        letter_gird.push(array.slice(j, j + chunk))//array yang dipush ke letter_gird adalah berdasarkan slice (1,3)(3,6) artinya tiga digit dan kemudian 3 digit berikutnya
    }
    console.log("Complete With Extra Credit");
    return letter_gird;
}

console.log(tic_tac_toe_board())
