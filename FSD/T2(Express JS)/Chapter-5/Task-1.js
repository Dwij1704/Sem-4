// Write an Express JS script to only allow pdf files to be uploaded using multer middleware.
// and saves the file to a specific directory or folder called 'specific', if other than
// pdf file is uploaded then give an error message.
const bodyParser = require('body-parser');
const express = require('express');
const multer = require('multer');
const path = require('path');
var app = express()
var pathForImage = path.join(__dirname,'Task-1/specific')
var storageForImages = multer.diskStorage({
    destination: pathForImage,
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
app.use(express.static(path.join(__dirname, 'Task-1'), { index: 'Task-1.html' }))
var upload = multer({ storage: storageForImages })
app.use(bodyParser.urlencoded({extended:false}))
app.post('/task1Process', (req, res, next) => {
    // if (f)
    // var file = req.body
    console.log(req.body)
})
// app.post('/task1Process', upload.single('myfile'), (req, res) => {
//     var file = req.body
//     if (file) {
//         // file.mimetype
//         // var filepath = file.path.split("\\")[(file.path.split("\\").length)-1]
//         // console.log(path.join(__dirname,'Task-1/specific//'+filepath))
//         // res.send('Uploaded <img src="' + filepath + '">')
//     }
// })
app.listen(8080)