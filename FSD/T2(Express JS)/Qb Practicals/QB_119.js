// process a form using post method. Form has fields like username, password, confirm password, gender, submit and reset buttons. After entering all fields, If password and confirm password 
// matches, then form should be processed and all relevant and selected fields’ values should be printed. Otherwise, by printing warning message in red color, it should terminate. No need to 
// write file having form elements
const exp=require('express')
const bp=require('body-parser')
const app=exp()
app.use(bp.urlencoded({extended:false}))
app.use(exp.static(__dirname,{index:'QB_119.html'}))
app.post('/process',(req,res)=>{
    if(req.body.pass==req.body.cpass){
        res.send(req.body)
    }
    else{
        res.send('<h1 style=\'color:red\'>Enter all fields</h1>')
    }
})
app.listen(8080)