const bp = require('body-parser');
const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express()
app.use(express.static(path.join(__dirname, 'Task-1'), { index: 'Task-1.html' }))
var storageForImage = multer.diskStorage({
    destination: path.join(__dirname,"Task-1/specific") ,
    filename: function (req, file, cb) {
        if (file.mimetype == 'application/pdf') {
            cb(null, file.originalname)
        }
        else {
            cb(new Error('File type is not supported'))
        }
    }
})
var upload = multer({storage : storageForImage})
app.post('/task1Process', upload.array('myfile', 5),
(err, req, res, next)=> {
    if (err) {
        res.status(400).send(err.message)
    } else {
        next()
    }
    },
    (req, res) => {
    const files=req.files
    if (files) {
        for (i of files) {            
            res.write('file '+JSON.stringify(i.originalname)+' has been uploaded to '+JSON.stringify(i.destination)+'\n')
        }
    }
    res.send()
})
app.listen(8080)
