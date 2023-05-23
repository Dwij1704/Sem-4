// Q42. Write a Node.js program to CRUD operation of file management.
// 1)Create folder named "Hello".
// 2) Create file in it named abc.txt and enter data in to it.
//  3) Add more data at last in file.
// 4)Read data without getting buffer data at first.
// 5)rename file
// 6)Delete both file and folder
const fs = require('fs');
fs.mkdir('Hello', (err) => {
  if (err) throw err;
  console.log('Folder created successfully.');
  fs.writeFile('Hello/abc.txt', 'Initial data', (err) => {
    if (err) throw err;
    console.log('File created and data written successfully.');
    fs.appendFile('Hello/abc.txt', '\nAdditional data', (err) => {
      if (err) throw err;
      console.log('Additional data appended to file.');
      fs.readFile('Hello/abc.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('File content:', data);
        fs.rename('Hello/abc.txt', 'Hello/def.txt', (err) => {
          if (err) throw err;
          console.log('File renamed successfully.');
          fs.unlink('Hello/def.txt', (err) => {
            if (err) throw err;
            fs.rmdir('Hello', (err) => {
              if (err) throw err;
              console.log('File and folder deleted successfully.');
            });
          });
        });
      });
    });
  });
});