const router = require('express').Router()

router.get('/basic-map', (req, res, next) => res.render('map/basic'))

router.get('/places-map', (req, res, next) => res.render('places/places-map'))

module.exports = router