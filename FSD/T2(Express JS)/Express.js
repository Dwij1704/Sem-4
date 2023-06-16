const express = require('express')
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const cp = require('cookie-parser');
const sess = require('express-session');
const app = express()
const port = 8080
// app.get("pathname/pagename",callback)
app.use(express.static(path.join(__dirname)))
app.get('/', (req, res) => res.sendFile(path.join(__dirname,"index.html")))
// app.listen(port,callback)
// res.set("Content-Type", "text/html");
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
//
//
//
// Lecture-1
//
//
// 
app.get('/example1/HomePage', (req, res) => {
    res.set("Content-Type", "text/html");
    fs.readFile("Example-1HomePage.html", (err, data) => {
        if (err) throw err;
        res.send(data.toString());
    });
});
app.get('/example1/StudentPage', (req, res) => {
    res.set("Content-Type", "text/html");
    fs.readFile("Example-1StudentPage.html", (err, data) => {
        if (err) throw err;
        res.send(data.toString());
    });
});
app.get('/example1/AboutUs', (req, res) => {
    res.set("Content-Type", "text/html");
    fs.readFile("Example-1AboutUs.html", (err, data) => {
        if (err) throw err;
        res.send(data.toString());
    });
});
app.get('/example2/sortByAge', (req, res) => {
    const users = [{ name: "xyz", age: 22 }, { name: "abc", age: 20 }]
    const sortByAge = users.sort((a, b) => { return a.age - b.age });
    res.set("Content-Type", "text/html");
        res.send(sortByAge);
});
app.get('/example2/sortByName', (req, res) => {
    const users = [{ name: "xyz", age: 22 }, { name: "abc", age: 20 }]
    // names=[users[0].name,users[1].name]
    // names.sort();
    const sortByName = users.sort((a, b) => { return a.name.localeCompare(b.name) });
    res.set("Content-Type", "text/html");
        res.send(sortByName);
});
//
//
//
// Lecture-2
//
//
// 
app.use(express.static("Example 3 Source"))
app.get('/example3/index', (req, res) => {
    res.set("Content-Type", "text/html");
    res.sendFile(path.join(__dirname, 'Example 3 Source', 'index.html'));
});
app.get('/example3/example3login', (req, res) => {
    res.set("Content-Type", "text/html");
    res.sendFile(path.join(__dirname, 'Example 3 Source', 'login.html'));
});
app.get('/example3/example3loginCheck', (req, res) => {
    res.set("Content-Type", "text/html");
    const login = { user: req.query.username, password: req.query.password };
    res.send(login);
});
app.get('/example3/example3Split', (req, res) => {
    res.set("Content-Type", "text/html");
    res.send("<form action=\"example3Splitter\" method=\"get\"><input type=\"text\" name=\"message\" id=\"message\"><input type=\"submit\" value=\"Submit\"></form>");
});
app.get('/example3/example3Splitter', (req, res) => {
    res.set("Content-Type", "text/html");
    message = req.query.message.split(".");
    for (i in message) {
        res.write(message[i]+"<br>")
    }
    res.send();
});
//
//
//
// Lecture-3
//
//
// 
app.use(express.static("Example 4 Source"))
app.get('/example4/example4Login', (req, res) => {
    res.set("Content-Type", "text/html");
    res.sendFile(path.join(__dirname, 'Example 4 Source', 'login.html'));
});
app.get('/example4/example4loginCheck', (req, res) => {
    res.set("Content-Type", "text/html");
    username = req.query.username;
    password = req.query.password;
    res.send(`<H1>Username is ${username} and password is ${password}`)
});
app.get('/example4/example4loginCheck', (req, res) => {
    res.set("Content-Type", "text/html");
    username = req.query.username;
    password = req.query.password;
    res.send(`<H1>Username is ${username} and password is ${password}`)
});
app.get('/example4/example4PostLogin', (req, res) => {
    res.set("Content-Type", "text/html");
    res.sendFile(path.join(__dirname, 'Example 4 Source', 'postlogin.html'));
});
app.use(bodyParser.urlencoded({ extended: false }))
app.post('/example4/example4loginPostCheck', (req, res) => {
    res.set("Content-Type", "text/html");
    // console.log(req.body)
    res.send(`<H1>Username is ${req.body.username} and password is ${req.body.password}`)
});
//
//
//
// Lecture-4
//
//
// 
app.use('/example5/example5middleware', (req, res, next) => {
    res.write('request received on ' + new Date());
    next();
})
app.use('/example5/example5middleware', (req, res, next) => {
    res.write('Hello');
    next();
})
app.use('/example5/example5middleware', (req, res, next) => {
    res.send()
})
app.use('/example5/example5middlewareHTML', (req, res, next) => {
    res.set("Content-Type", "text/html");
    res.write('request received on ' + new Date());
    next();
}, (req, res, next) => {
    res.write('<h1><center>Hello</center></h1>');
    next();
}, (req, res) => {
    res.write('<br><h1><center>Hello</center></h1>');
    res.send()
})
app.use(cp())
app.get('/example6/example6Cookie', (req, res, next) => {
    res.cookie(('username','xyz',{expires:new Date(Date.now()+20000)}))
    next();
}, (req, res, next) => {
    console.log(req.cookies)
    next();
    res.send("Hello")
})
//
//
//
// Lecture-5
//
//
// 
app.use(sess({
    reserve: false,            //Doesn't save session if not modified
    saveUninitialized: false,  //Dont Create session if something is not stored
    secret:"key"               //If the Secret key is changed, the session is considered as fresh session and its value will be reset
}))
app.get('/example7/index', (req, res) => {
    if (req.session.count) {
        req.session.count++;
        res.send('You have visited this page '+req.session.count+' times')
    }
    else {
        req.session.count = 1
        res.send('Welcome 1st Time')
    }
})