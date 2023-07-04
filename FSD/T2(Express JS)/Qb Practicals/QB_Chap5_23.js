const exp=require('express')
const multer=require('multer')
const path=require('path')
const app=exp()
app.set('view engine','pug')
app.get('/',(req,res)=>{
    res.render(path.join(__dirname,'QB_Chap5_23.pug'))
})
var storageImage=multer.diskStorage({
    destination : path.join(__dirname,"specific"),
    filename : function(req,file,cb){
        if(file.mimetype=='application/pdf'){
            cb(null,file.originalname)
        }
        else{
            cb(new Error('Only PDF Allowed'))
        }
    }
})
var upload=multer({storage:storageImage})
app.post('/process',upload.single('myfile'),
(err,req,res,next)=>{
    if(err){
        res.status(400).send(err.message)
    }
    else{
        next()
    }
},
(req,res)=>{
    res.render(path.join(__dirname,'QB_Chap5_23Confirmation.pug'))
})
app.listen(8080)