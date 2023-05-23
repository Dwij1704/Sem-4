// Q43. Write a Node.Js program to sort an interger array, where all element are
// available in a file separated by white space. Print sorted array elements on
// node.js server.
const http = require('http');
const fs = require('fs');
fs.readFile('Q43.txt', 'utf8', (err, data) => {
  if (err) throw err;
  const numbers = data.split(' ');
  const integerArray = numbers.map(Number);
  integerArray.sort((a, b) => a - b);
    http.createServer((req, res) => {
    console.log(`Sorted Array: ${integerArray.join(', ')}`)
  }).listen(8080);
});