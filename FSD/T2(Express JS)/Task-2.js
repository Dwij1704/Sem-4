// Write JS to perform Following task:
// - Create html which contain 2 input fields with number
// - 1 dropdown containing options like addition, Subtraction, Multiplication and division.
// - 1 submit button
// - Input field must contain value >0 else give message please enter valid number.
// - Also user must select any of the formula from dropdown else give a message Not selected
// - Message will be displayed on /calc page.
// - If 1 formula is selected and numbers are entered then perform on /calc.
// - Use get
const express = require('express');
app = express();
const path = require('path');
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'Task-2.html'))
})
app.get('/process', (req, res) => {
    if (req.query.a<0 || req.query.b<0) {
        res.send(`<center><h1>Enter Valid Value</h1></center>`);
    }
    else if(req.query.operation=="") {
        res.send(`<center><h1>Enter a Operation to perform</h1></center>`);
    }
    else if(req.query.operation=="add") {
        res.send(`<center><h1>${req.query.a}+${req.query.b}=${parseInt(req.query.a)+parseInt(req.query.b)}</h1></center>`);
    }
    else if(req.query.operation=="mul") {
        res.send(`<center><h1>${req.query.a}*${req.query.b}=${req.query.a*req.query.b}</h1></center>`);
    }
    else if(req.query.operation=="sub") {
        res.send(`<center><h1>${req.query.a}-${req.query.b}=${req.query.a-req.query.b}</h1></center>`);
    }
    else if(req.query.operation=="div") {
        res.send(`<center><h1>${req.query.a}/${req.query.b}=${req.query.a/req.query.b}</h1></center>`);
    }
})
app.listen(8080)