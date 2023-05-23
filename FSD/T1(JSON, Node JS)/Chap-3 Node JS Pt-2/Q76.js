// Q76. Write a node.js script to load a simple.html file on nodejs web server &
// prints its contents as an html content.
const http = require("http");
const fs = require("fs");
http.createServer(function (req, res) {
    fs.readFile("Q76.html", (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }).listen(8080);