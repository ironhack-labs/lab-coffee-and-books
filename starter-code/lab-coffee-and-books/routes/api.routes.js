const router = require("express").Router()

const Restaurant = require('./../models/Places.model')

router.get('/places', (req, res) => {

    Places
        .find()
        .then(places => res.json(places))
        .catch(err => res.json({ Message: 'server error', err }))
})

module.exports = router