// Q23. Write a JSON object which contains array of 3 objects. Each object contains
// 2 properties name and age. Now, sort an array values by age in descending
// order. Print name in terminal as per the sorted age.
var data = {
  "people": [
    { "name": "Dwij", "age": 25 },
    { "name": "Jyoti", "age": 30 },
    { "name": "Shubham", "age": 20 }
  ]
};

// Simple way to sort age:-
data.people.sort((a, b) => b.age - a.age);
data.people.forEach((person)=> {
  console.log(person.name);
})
// for (let i = 0; i < data.people.length - 1; i++) {
//   for (let j = 0; j < data.people.length - i - 1; j++) {
//     if (data.people[j].age < data.people[j + 1].age) {
//       // Swap the positions of two elements
//       let temp = data.people[j];
//       data.people[j] = data.people[j + 1];
//       data.people[j + 1] = temp;
//     }
//   }
// }
// data.people.forEach(function(person) {
//   console.log(person.name);
// });