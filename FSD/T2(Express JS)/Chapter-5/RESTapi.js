const express = require('express');
var app = express()
const movies = require('./REST/movies')
app.use('/restMovies', movies)
app.listen(8080)