const router = require("express").Router()

const Restaurant = require('./../models/place.model')

router.get('/places', (req, res) => {

    Restaurant
        .find()
        .then(places => res.json(places))
        .catch(err => res.json({ Message: 'server error', err }))
})

module.exports = router