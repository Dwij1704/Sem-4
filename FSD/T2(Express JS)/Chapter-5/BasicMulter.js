const bp = require('body-parser');
const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express()
app.use(express.static(path.join(__dirname, 'Example 1'), { index: 'Example-1 Multer.html' }))
// Setting Up Multer
var storageForImage = multer.diskStorage({
    destination: path.join(__dirname,"Example 1/single") ,
    filename: function (req, file, cb) {
        cb(null,file.originalname)
    }
})
var upload = multer({storage : storageForImage})
app.post('/example1Process', upload.array('myfile',5), (req, res) => {
    const files=req.files
    if (files) {
        for (i of files) {            
            res.write('file '+JSON.stringify(i.originalname)+' has been uploaded to '+JSON.stringify(i.destination)+'\n')
        }
    }
    res.send()
})
app.listen(8080)