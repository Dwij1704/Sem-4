const express = require('express');
const path = require('path');
const app = express()
app.set('view engine', 'pug')
app.use('/', (req, res) => {
    res.render((path.join(__dirname,'Pug/Basics.pug')))
})
app.listen(8080)