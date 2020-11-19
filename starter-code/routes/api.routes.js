const express = require('express')
const router = express.Router()

const CoffeeBooks = require('../models/coffeebooks.model')

router.get('/coffeeBooks', (req, res, next)=>{
    CoffeeBooks.find()
        .then(response => res.json(response))
        .catch(err => next(err))
})





module.exports = router