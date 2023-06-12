// Write an Express JS script to load a html that have username password and submit,
// On Submit, it should jump on check page using POST method, if username is admin
// then jump on next Middleware to print welcome Admin. else stay on same middleware
// to print warning message in RED color.
const express = require('express');
const path = require('path');
const bp = require('body-parser');
const app = express();
app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname,'Task-3.html'))
})
app.use(bp.urlencoded({ extended: false }));
app.post('/check', (req, res, next) => {
    // console.log('out')
    res.set('Content-Type', 'text-html');
    if (req.body.username == 'admin') {
        //console.log('if')
        next();
    }
    else {
      //  console.log('else')
        res.send("<center><h1 style='color:red'>Warning⚠️</h1></center>")
    }
}, (res,req)=>{
   // console.log('next')
    res.send('Welcome'+req.body.username)    
})
app.listen(8080)