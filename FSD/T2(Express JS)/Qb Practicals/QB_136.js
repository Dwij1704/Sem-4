// write an ExpressJS to take a textarea & submit button. After clicking submit button the content of textarea should be represented on next page by writing each sentence (separated by dot) in 
// new line.
const exp=require('express');
const app=exp();
app.use(exp.static(__dirname,{index:'QB_136.html'}))
app.get('/process',(req,res)=>{
    data=req.query.textArea;
    newData=data.replace('.','<br>')
    res.send(newData)
})
app.listen(8080)