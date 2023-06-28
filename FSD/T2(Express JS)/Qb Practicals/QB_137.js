// Write a code snippet to configure the multer middleware to store uploaded files in a specific directory called "uploads".
const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express()
app.use(express.static(__dirname,{index:'QB_137.html'}))
const storageImage=multer.diskStorage({
    destination:path.join(__dirname,'specific'),
    filename: function (req, file, cb) {
        cb(null,file.originalname)
    }
})
var upload=multer({storage:storageImage})
app.post('/process',upload.single('file'),(req,res)=>{
    console.log(req)
    console.log(req.files)
    console.log(req.file)
    res.send()
})
app.listen(8080)