const expr = require('express');
const path=require('path');
const app=expr();
app.set('view engine','pug');
app.use('/',(req,res)=>{
    res.render(path.join(__dirname,'p2Task.pug'))
});
app.listen(8080);