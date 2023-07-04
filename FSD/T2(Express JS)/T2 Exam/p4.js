const exp = require('constants');
const expr = require('express');
const sess = require('express-session');
const app=expr();
app.use(expr.static(__dirname,{index:'p4.html'}))
app.use(sess({
    resave:true,
    saveUninitialized:true,
    secret:'key'
}))
app.get('/savesession',(req,res)=>{
    req.session.username=req.query.uname;
    req.session.gender=req.query.gender;
    res.redirect('/fetchsession')
})
app.use('/fetchsession',(req,res)=>{
    res.send(`<h1>Username is ${req.session.username} and gender is ${req.session.gender}</h1><br><a href="/deletesession"><button>Logout</button></a>`)
})
app.use('/deletesession',(req,res)=>{
    req.session.destroy();
    res.redirect('/')
})
app.listen(8080)