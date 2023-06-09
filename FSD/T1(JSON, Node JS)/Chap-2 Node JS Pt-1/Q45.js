// Q45. Write node.js script to copy content of one file to the other file. data should
// be fetched from source.txt and insert to destination.txt
const fs = require('fs');
const sourceFilePath = 'Q45_Source.txt';
const destinationFilePath = 'Q45_Destination.txt';
fs.readFile(sourceFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading source file:', err);
    return;
  }
  fs.writeFile(destinationFilePath, data, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to destination file:', err);
      return;
    }
    console.log('Content copied from source to destination successfully.');
  });
});