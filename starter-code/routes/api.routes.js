const router = require('express').Router()

// requerir el modelo de places
const Place = require('./../models/Place.model')

// api routes
router.get('/places', (req, res, next) => {
    Place
        .find()
        .then(allPlaces => res.json(allPlaces))
        .catch(err => console.log(err))
})

module.exports = router