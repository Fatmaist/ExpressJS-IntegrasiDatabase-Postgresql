var express = require('express')
var app = express()
var pool = require('./queries.js')

var query = require('./query.js')

app.use('/query', query)

pool.connect((err, res) => {
    console.log(err)
    console.log('connected')
})

app.listen(3000)