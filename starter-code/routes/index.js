const express = require('express')
const router = express.Router()

const Climbing = require('../models/Climbing')

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index')
})

router.get('/climbing-walls', (req, res) => {
    Climbing.find({}).then(walls => {
        res.send(walls)
    })
})

module.exports = router
