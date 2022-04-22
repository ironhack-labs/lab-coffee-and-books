const router = require('express').Router()
const Place = require('./../models/places')

router.get('/api/stores', (req, res, next) => {
    Place
        .find()
        .then(places => res.json(places))
        .catch(err => console.log('soy eroor', err))
})
module.exports = router