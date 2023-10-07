var express = require('express')
var app = express()
var pool = require('./queries.js')
var things = require('./things.js')

app.use('/things', things)

app.get('/actor', function(req, res){
    pool.query('Select * From actor', (err, result) => {
        if (err) {
            throw err
        }
        res.send(result.rows)
    })
})

pool.connect((err, res) => {
    console.log(err)
    console.log('connected')
})

app.listen(3000)