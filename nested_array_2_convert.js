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
    var obj = [];
    var value = [[],[],[],[]];
    var column = roster[0];
    for(var i = 0; i < roster.length; i++){
    	// for (var k = 0; k < roster.length; k++){
    	// 	value[k].push(roster[i][k]);
    	// }
    	value[0].push(roster[i][0]);
    	value[1].push(roster[i][1]);
    	value[2].push(roster[i][2]);
    	value[3].push(roster[i][3]);
    }
    for(var j = 0; j < value.length; j++){
    	var temp2 ={};
    	for(var k=0; k < column.length; k++){
    		temp2[column[k]] = value[k][j];
    	}
    	obj.push(temp2);
    }
    return obj;
}

var object_roster = convert_roster_format(roster)
console.log(object_roster[2])

// => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }

console.log(object_roster[1]["Name"] == "Joe Schmo") // outputs true
