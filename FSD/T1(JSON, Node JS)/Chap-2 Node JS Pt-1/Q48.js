// Q48. Write a script to define two JSON objects named as “division1” and
// “division2” having an array to store names of students. These names should
// be sorted alphabetically in the object and should be written to the file. At last,
// both division objects should be visible with names sorted alphabetically in
// file.
const fs = require('fs');
const division1 = {
  division: 'Division 1',
  students: ['Dwij', 'Jyoti', 'Shubham', 'Brijesh', 'Mahmood']
};
const division2 = {
  division: 'Division 2',
  students: ['Vraj', 'Vasu', 'Shivraj', 'Jenish', 'Preet']
};
division1.students.sort();
division2.students.sort();
const allDivisions = [division1, division2];
const jsonData = JSON.stringify(allDivisions);
fs.writeFile('divisions.json', jsonData, 'utf8', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('Data written to divisions.json file successfully.');
});