var express = require('express')
var app = express()

app.get('/', function(req, res){
    res.send("Tes")
})

app.listen(3000)