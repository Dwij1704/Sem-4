// Q14. Write a script of JSON array containing objects and display the same in console.
var jsonArray = [
  {
    "name": "Dwij Patel",
    "age": 19,
    "city": "Ahmedabad"
  },
  {
    "name": "Jyoti Mistry",
    "age": 22,
    "city": "Navsari"
  },
  {
    "name": "Shubham Jain",
    "age": 19,
    "city": "Ahmedabad"
  }
];
var jsonString = JSON.stringify(jsonArray);
console.log(jsonString);
//  JSON.stringify() function is used to convert the JSON array to a string before displaying it in the console.