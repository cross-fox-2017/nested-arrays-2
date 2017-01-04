var roster = [
    ["Number", "Name", "Position", "Points per Game"],
    ["12", "Joe Schmo", "Center", [14, 32, 7, 0, 23]],
    ["9", "Ms. Buckets ", "Point Guard", [19, 0, 11, 22, 0]],
    ["31", "Harvey Kay", "Shooting Guard", [0, 30, 16, 0, 25]],
    ["7", "Sally Talls", "Power Forward ", [18, 29, 26, 31, 19]],
    ["22", "MK DiBoux ", "Small Forward ", [11, 0, 23, 17, 0]]
]

// [[roster[0][0], roster[1][0]], [roster[0][1], roster[1][1]],...

function convert_roster_format(nestedArray) {
  let arr = [];
  let key = nestedArray[0];
  let a;

  for(var j = 1; j < nestedArray.length; j++){
    let object = {};
    for (var i = 0; i < nestedArray[j].length; ++i){
      object[key[i]] = nestedArray[j][i];
    }
    arr.push(object);
  }
  return arr;
}

var object_roster = convert_roster_format(roster)
console.log(object_roster);

// => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }

console.log(object_roster[0]["Name"] == "Joe Schmo") // outputs true
