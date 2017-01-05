var roster = [
    ["Number", "Name", "Position", "Points per Game"],
    ["12", "Joe Schmo", "Center", [14, 32, 7, 0, 23]],
    ["9", "Ms. Buckets ", "Point Guard", [19, 0, 11, 22, 0]],
    ["31", "Harvey Kay", "Shooting Guard", [0, 30, 16, 0, 25]],
    ["7", "Sally Talls", "Power Forward ", [18, 29, 26, 31, 19]],
    ["22", "MK DiBoux ", "Small Forward ", [11, 0, 23, 17, 0]]
]

// [[roster[0][0], roster[1][0]], [roster[0][1], roster[1][1]],...
var key = [];
var value = [];
function convert_roster_format(nestedArray) {

  for(let count = 0; count < roster[0].length;count++){
    key.push(roster[0][count]);
  }

  for(let m = 1; m < roster.length; m++){

    var objectArr = {};

    for(let n = 0;n < roster[m].length; n++){

      objectArr[key[n]] = roster[m][n];

    }
  value.push(objectArr);

  }
  return value;
  // your convert code here
}

var object_roster = convert_roster_format(roster)
console.log(object_roster[2])

// => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }

console.log(object_roster[0]["Name"] == "Joe Schmo") // outputs true
