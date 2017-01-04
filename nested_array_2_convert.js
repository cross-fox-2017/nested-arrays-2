function convert_roster_format(nestedArray) {
    var arrObj = []
    var x = 1;
    while(x<nestedArray.length) {
      var obj = {}
        for (var i = 0; i < nestedArray[0].length; i++) {
            var nama = nestedArray[0][i]
            obj[nama] = nestedArray[x][i]
        }
        x++
        arrObj.push(obj)
    }
    return arrObj
}

//Data Yang Mau di convert
var roster = [
    ["Number", "Name", "Position", "Points per Game"],
    ["12", "Joe Schmo", "Center", [14, 32, 7, 0, 23]],
    ["9", "Ms. Buckets ", "Point Guard", [19, 0, 11, 22, 0]],
    ["31", "Harvey Kay", "Shooting Guard", [0, 30, 16, 0, 25]],
    ["7", "Sally Talls", "Power Forward ", [18, 29, 26, 31, 19]],
    ["22", "MK DiBoux ", "Small Forward ", [11, 0, 23, 17, 0]]
]
var object_roster = convert_roster_format(roster) //Panggil convert_roster_format

//Test outputs
console.log(object_roster[2])// => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }
console.log(object_roster[0]["Name"] == "Joe Schmo") // outputs true
