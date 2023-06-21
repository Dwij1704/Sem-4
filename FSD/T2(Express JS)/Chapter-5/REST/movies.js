const express = require('express');
const router = express.Router();
const movies = [
    {
        id: 101,
        name: "YJHD",
        year:2012
    },
    {
        id: 102,
        name: "ZNMD",
        year:2014
    }
]
module.exports = router
router.get('/', (req, res) => {
    res.json(movies)
})
router.get('/:id([0-9]{3,})', (req, res) => {
    var curMovie = movies.filter((m) => {
        if (m.id == req.params.id) {
            return true
        }
    })
        if (curMovie.length == 1) {
            res.json(curMovie[0])
        }
        else {
            res.json("Not Found")
        }
})
