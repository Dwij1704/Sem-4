const expr = require('express');
const app=expr();
app.use(expr.static(__dirname,{index:'p3.html'}))
app.get('/process',(req,res)=>{
    res.send(`<h1>Username is ${req.query.uname} and country is ${req.query.opt}</h1>`)
});
app.listen(8080);