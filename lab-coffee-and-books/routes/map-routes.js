const router = require('express').Router()

router.get('/basico', (req, res) => {
    res.render('maps/basic-map')
})

router.get('/places-map', (req, res) => {
    res.render('maps/places-map')
})

module.exports = router