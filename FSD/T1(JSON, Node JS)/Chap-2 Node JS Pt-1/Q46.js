// Q46. Write node.js script to print “Welcome Admin” on home page of server. If
// user request for second page it display “This is second page” in italic fontstyle and if any other request is requested it shows “Page not found”
// message.
const http = require('http');
http.createServer((req, res) => {
  if (req.url === '/') {
  res.writeHead(200,{"content-type":"text/html"});
    res.write('<h1>Welcome Admin</h1>');
  }
  else if (req.url === '/second-page') {
    res.writeHead(200,{"content-type":"text/html"});
    res.write('<p style="font-style: italic;">This is the second page</p>');
  }
  else {
    res.writeHead(404,{"content-type":"text/html"});
    res.write('<h1>Page not found</h1>');
  }
  res.end();
}).listen(8080);