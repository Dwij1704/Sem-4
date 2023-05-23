// Q47. Write a script to display sum of two numbers which are passed as an
// argument in function named Total. the sum should display in any html
// element. Use callback as third argument in Total function.
const http = require('http');
function Total(num1, num2, callback) {
  const sum = num1 + num2;
  callback(sum);
}
http.createServer((req, res) => {
  Total(5, 10, (result) => {
    res.writeHead(200,{"content-type":"text/html"});
    res.write(`<h1>Sum: ${result}</h1>`);
    res.end();
  });
}).listen(8080);