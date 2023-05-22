// Q22. Write a script to define two JSON objects named as “division1” and
// “division2” having an array to store names of students. These name should
// be sorted alphabetically in the object and should be be written to the file. At
// last, both division objects should be visible with names sorted alphabetically
// in file
const fs = require('fs');
const division1 = {
  "students": ["Dwij", "Jyoti", "Shubham", "Brijesh", "Mahmood"]
};
division1.students.sort();
const division2 = {
  "students": ["Vasu", "Vraj", "Shivraj", "Preet", "Jenish"]
};
division2.students.sort();
const divisions = [division1, division2];
fs.writeFile('divisions.json', JSON.stringify(divisions), function(err) {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('Data written to file successfully');
  }
});