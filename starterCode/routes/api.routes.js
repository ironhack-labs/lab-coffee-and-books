const router = require('express').Router()
const Place = require('../models/place')


router.get('/places', (req, res) => {

    Place
        .find()
        .then(place => res.json(place))
        .catch(err => console.log(err))
})


module.exports = router