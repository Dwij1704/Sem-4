// write a sript to meet foll requirements. 
// 1) create index.html page and open it on localhost
// 2) after clicking submit button, it should jump to savesessionpage.store username in session.
// 3) After saving session, redirect to fetchsession page and read session value. put a logout link button here.
// 4) destroy the session on this page and redirect to index.html
const exp=require('express')
const sess=require('express-session')
const app=exp();
app.use(exp.static(__dirname,{index:'QB_121.html'}))
app.use(sess({
    resave:false,
    saveuninitialized:false,
    secret:'key'
}))
app.get('/saveSessionPage',(req,res)=>{
    console.log(req.query)
    req.session.username=req.query.uname
    res.redirect('/fetchSessionPage')
})
app.get('/fetchSessionPage',(req,res)=>{
    res.send(`<h1>Your Username is${req.session.username}</h1><a href='/logout'><button>Logout</button></a>`)
})
app.get('/logout',(req,res)=>{
    req.session.destroy()
    res.redirect('/')
})
app.listen(8080)