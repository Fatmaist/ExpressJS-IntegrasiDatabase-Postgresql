var express = require('express')
var router = express.Router()

router.get('/:name', function (req, res){
    res.send('Get Route' + req.params.name)
})

router.post('/', function (req, res){
    res.send('Post Route')
})

router.put('/', function (req, res){
    res.send('Put Route')
})

module.exports = router