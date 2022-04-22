const router = require('express').Router()
// const Place = require('../models/User.model')
const Place = require("./../models/User.model")



router.get('/places', (req, res) => {

    Place
        .find()
        .then(places => res.json(places))
        .catch(err => console.log(err))
})

router.get('/basico', (req, res) => {
    res.render('map/basic-map')
})


module.exports = router

