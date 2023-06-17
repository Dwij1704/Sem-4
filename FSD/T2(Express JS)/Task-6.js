// You have been assigned to develop a user feedback form for website using express js and cookies
// Fields:-
// 1. Name
// 2. Email
// 3. Message (textarea)
// 4. Rating (Radio Button) [Bad, average, good, very good, excellent]
// When the user submits the form, store the feedback info (name email message and rating)
// in a cookie Named feedback that expires in 10 seconds.
// Display confirmation message to the user afer succesfully submitting the form and create a link
// to display the feedback details, stored in cookie. also include a link for logout
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.static(__dirname, { index: 'Task-6.html' }));
app.use(cookieParser());

app.get('/process', (req, res) => {
  const data = {
    name: req.query.name,
    email: req.query.email,
    message: req.query.message,
    rating: req.query.rating
  };

  res.cookie('feedback', data, { maxAge: 10000 });
  console.log(req.cookies.feedback);

  res.send('Form submitted successfully!');
});

app.listen(8080);
