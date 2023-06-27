const express = require('express');
app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname),{index:'Task-1.html'}))
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/process', (req, res) => {
    data = req.body;
    if (data.username == "admin") {
        res.send(`<center><h1>Welcome ${data.username}</h1></center>`);
    }
    else {
        res.send(`<center><h1>You are not welcomed</h1></center>`);
    }
})
app.listen(8080)