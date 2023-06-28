// write an express.js script to print "hello World" also run on localhost:4000 
const exp=require('express')
const app=exp()
app.use('/',(req,res)=>{
    res.send('Hello World')
})
app.listen(4000)