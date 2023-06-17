const express = require('express');
const app=express()
const path = require('path');
app.listen(8080,()=>{console.log("Server Running")})
app.use(express.static(path.join(__dirname)))
app.get('/index', (req, res) => {
    res.set("Content-Type", "text/html");
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/login', (req, res) => {
    res.set("Content-Type", "text/html");
    res.sendFile(path.join(__dirname, 'login.html'));
});