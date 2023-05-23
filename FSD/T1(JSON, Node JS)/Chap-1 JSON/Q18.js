// Q18. Write a JSON script to display array of object using for in loop as per table.
var jsonArray = [
    {
        "Division-A": "Division-A"
    },
    {
        "Student Details": "Student Details"
    },
    {"Details": [
        { "Name": "Dwij Patel", "Number": "19", "Subject Opted": ["Physics","SS"] },
        { "Name": "Jyoti Mistry", "Number": "18", "Subject Opted": ["Maths","Python"] },
        { "Name": "Shubham Jain", "Number": "22", "Subject Opted": ["Science","C++"] }
    ]}
];
// For in Loop
for (var i = 0; i < jsonArray.length; i++) {
  var obj = jsonArray[i];
  for (var key in obj) {
    if (Array.isArray(obj[key])) {
      console.log(key + ":");
      for (var j = 0; j < obj[key].length; j++) {
        console.log("Name:", obj[key][j]["Name"]);
        console.log("Age:", obj[key][j]["Number"]);
        console.log("Subject Opted:", obj[key][j]["Subject Opted"]);
      }
    } else {
      console.log(obj[key]);
    }
  }
}
// console.log(jsonArray[0]['Division-A'])
// console.log(jsonArray[1]['Student Details'])
// console.log("Name: "+jsonArray[2]['Details'][0]['Name']+" "+jsonArray[2]['Details'][1]['Name']+" "+jsonArray[2]['Details'][2]['Name'])
// console.log("Age: "+jsonArray[2]['Details'][0]['Number']+" "+jsonArray[2]['Details'][1]['Number']+" "+jsonArray[2]['Details'][2]['Number'])
// console.log("Subject Opted: "+jsonArray[2]['Details'][0]['Subject Opted']+" "+jsonArray[2]['Details'][1]['Subject Opted']+" "+jsonArray[2]['Details'][2]['Subject Opted'])