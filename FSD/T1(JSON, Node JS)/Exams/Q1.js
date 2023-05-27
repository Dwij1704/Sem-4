var obj1 = { "name": "1" }
var obj2={"name":"2"}
var obj3={"name":"3"}
const url = require('url');
const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" })
    var u = url.parse(req.url).pathname;
    if (u == "/obj1") {
        res.end(obj1)
    }
    else if (u == "/obj2") {
        res.end(obj2)
    }
    else if (u == "/obj3") {
        res.end(obj3)
    }
    else {
        res.end("404")
        }
}).listen(8080)