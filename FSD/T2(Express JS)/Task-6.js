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
    rating: req.query.feedback
  };

  res.cookie('feedback', data, { maxAge: 10000 });

  res.send('<center><h1>Thank You For Feedback</h1><br><a href="feedbackView"><button>View Feedback</button></a><br><a href="/"><button>Logout</button></a><br></center>');
});
app.use('/feedbackView', (req, res) => {
    if (req.cookies.feedback) {
        res.send('<center><h1>Name: '+req.cookies.feedback.name+'<br>Email: '+req.cookies.feedback.email+'<br>Message: '+req.cookies.feedback.message+'<br>Ratings: '+req.cookies.feedback.rating+'<br></h1><br><a href="/"><button>Logout</button></a><br></center>')
    }
    else {
        res.send('<center><h1>Cookie Expired</h1><br></center>')
    }
})
app.listen(8080);
