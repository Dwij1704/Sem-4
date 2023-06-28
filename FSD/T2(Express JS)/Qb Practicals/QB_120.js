// write an express.js script to load an HTML file having username and password and submit button. On clicking submit button. It should jump on "check" page using "POST" method. If 
// username is "admin" , then jump on next middleware to print "welcome… admin" , if username is not "admin" , then stay on same middleware to print "warning msg" in red color. 
const exp=require('express');
const bp=require('body-parser')
const app=exp();
app.use(exp.static(__dirname,{index:'QB_120.html'}))
app.use(bp.urlencoded({extended:false}))
app.post('/check',(req,res,next)=>{
    if(req.body.uname=='Admin'){
        next();
    }
    else{
        res.send('<h1>You are not Admin</h1>')
    }
},
(req,res)=>{
    res.send('Welcome Admin')
})
app.listen(8080)