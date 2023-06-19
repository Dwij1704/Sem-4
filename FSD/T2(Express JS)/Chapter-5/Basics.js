const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express()
app.use(express.static(path.join(__dirname, 'Example 1'), { index: 'Example-1 Multer.html' }))
var storageForImage = multer.diskStorage({
    destination: path.join(__dirname,"Example 1/single") ,
    filename: function (req, file, cb) {
        cb(null,file.originalname)
    }
})
var upload = multer({storage : storageForImage})
app.post('/example1Process', upload.single('myfile'), (req, res) => {
    const file=req.file
    if (file) {
        res.send('file '+file.originalname+' has been uploaded to '+file.destination)
    }
})
app.listen(8080)