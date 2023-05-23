// Q51. Write a node.js script to jump on a specific code by specifying path on
// address bar of browser.
const http = require('http');
http.createServer((req, res) => {
  const path = req.url;
  if (path === '/') {
    res.writeHead(200,{"content-type":"text/html"});
    res.write('<h1>Welcome to the Home Page!</h1>');
  } else if (path === '/about') {
    res.writeHead(200,{"content-type":"text/html"});
    res.write('<h1>About Us</h1>');
    res.write('<p>We are a company dedicated to providing exceptional services.</p>');
  } else if (path === '/contact') {
    res.writeHead(200,{"content-type":"text/html"});
    res.write('<h1>Contact Us</h1>');
    res.write('<p>Feel free to reach out to us for any inquiries.</p>');
  } else {
    res.writeHead(404,{"content-type":"text/html"});
    res.write('<h1>404 - Page Not Found</h1>');
  }
  res.end();
}).listen(8080);