// Q21. Write a JS to store an array of objects having height and name. display name
// and height of person with highest height. 
var people = [
  { "name": "Dwij", "height": 180 },
  { "name": "Jyoti", "height": 165 },
  { "name": "Shubham", "height": 190 },
  { "name": "Brijesh", "height": 175 },
  { "name": "Mahmood", "height": 195 }
];
// With Reduce():-
// var tallestPerson = people.reduce(function(prev, current) {
//   return (prev.height > current.height) ? prev : current;
// });
// console.log("Name: " + tallestPerson.name);
// console.log("Height: " + tallestPerson.height);
// Without Reduce():-
var tallestPerson = null;
var tallestHeight = 0;
for (var i = 0; i < people.length; i++) {
  var person = people[i];
  
  if (person.height > tallestHeight) {
    tallestPerson = person;
    tallestHeight = person.height;
  }
}
if (tallestPerson) {
  console.log("Name: " + tallestPerson.name);
  console.log("Height: " + tallestPerson.height);
} else {
  console.log("No person found");
}