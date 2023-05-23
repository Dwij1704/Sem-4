// Q50. Write a program to demonstrate various methods of path module in Node.js
const path = require('path');

// Path to a file
const filePath = 'D:\Github\Sem-4\FSD\T1(JSON, Node JS)\Chap-2 Node JS Pt-1\Q43.txt';

// Get the directories of a path
const directory = path.dirname(filePath);
console.log('Directories:', directory);

// Get the file extension of a path
const fileExtension = path.extname(filePath);
console.log('File extension:', fileExtension);

// Get the last part of a path
const fileName = path.basename(filePath);
console.log('File name:', fileName);

// Format a path string into a path object
const pathObject = path.parse(filePath);
console.log('Path object:', pathObject);