var express = require('express')
var router = express.Router()
var pool = require('./queries.js')

router.get('/actor', function(req, res){
    pool.query('Select * From actor', (err, result) => {
        if (err) {
            throw err
        }
        res.send(result.rows)
    })
})

router.get('/film', function(req, res){
    pool.query('Select * From film', (err, result) => {
        if (err) {
            throw err
        }
        res.send(result.rows)
    })
})

router.get('/film/:id', function(req, res){
    const film_id = req.params.id
    pool.query('Select * From film WHERE film_id = $1', [film_id], (err, result) => {
        if (err) {
            throw err
        }
        res.send(result.rows)
    })
})

router.get('/category', function(req, res){
    pool.query('Select * From category', (err, result) => {
        if (err) {
            throw err
        }
        res.send(result.rows)
    })
})

router.get('/film/category/:name', function(req, res){
    const name = req.params.name

    const sqlQuery = `
        SELECT *
        FROM film
        INNER JOIN film_category ON film.film_id = film_category.film_id
        INNER JOIN category ON film_category.category_id = category.category_id
        WHERE category.name = $1
    `

    pool.query(sqlQuery, [name], (err, result) => {
        if (err) {
            throw err
        }
        res.send(result.rows)
    })
})

module.exports = router