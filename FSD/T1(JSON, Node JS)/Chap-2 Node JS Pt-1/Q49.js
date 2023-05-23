// Q49. Write a node.js script to write contents to the file in original manner. Delete
// file after finishing writing
const fs = require('fs');
const contents = [
  'This is line 1.',
  'This is line 2.',
  'This is line 3.',
  'This is line 4.',
  'This is line 5.'
];
const filePath = 'output.txt';
fs.writeFile(filePath, contents.join('\n'), 'utf8', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('Contents written to file successfully.');
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error('Error deleting file:', err);
      return;
    }
    console.log('File deleted successfully.');
  });
});