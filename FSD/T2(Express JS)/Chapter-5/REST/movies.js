const express = require('express');
const router = express.Router();
module.exports = router
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
