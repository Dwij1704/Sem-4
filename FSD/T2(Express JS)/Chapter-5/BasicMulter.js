const bp = require('body-parser');
const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express()
app.use(express.static(path.join(__dirname, 'Example 1'), { index: 'Example-1 Multer.html' }))
// Setting Up                                                                                                                                                      
var storageForImage = multer.diskStorage({
    destination: 'single' ,
    filename: function (req, file, cb) {
        cb(null,'jyoti'+file.originalname)
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
    console.log(files)
})
app.listen(8080)