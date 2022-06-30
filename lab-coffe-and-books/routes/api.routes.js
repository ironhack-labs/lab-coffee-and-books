const router = require("express").Router()

const Restaurant = require('./../models/Place.model')

router.get('/restaurants', (req, res) => {

    Restaurant
        .find()
        .then(restaurants => res.json(restaurants))
        .catch(err => res.json({ Message: 'server error', err }))
})

module.exports = router