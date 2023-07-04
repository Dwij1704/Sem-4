const bp = require('body-parser');
const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express()
app.set('view engine','pug')
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
app.post('/task1Process', upload.single('myfile'),
(err, req, res, next)=> {
    if (err) {
        res.status(400).send(err.message)
    } else {
        next()
    }
    },
    (req, res) => {
    const files=req.file
    res.render(path.join(__dirname, 'Task-1/Task-1.pug'),{file:files.originalname})
})
app.listen(8080)
