var express = require('express')
var app = express()
var pool = require('./queries.js')
var things = require('./things.js')

app.use('/things', things)

app.get('/', function(req, res){
    res.send("Tes")
})

pool.connect((err, res) => {
    console.log(err)
    console.log('connected')
})

app.listen(3000)