const router = require('express').Router()
const Place = require('../models/Place.model')


router.get('/place', (req, res) => {

    Place
        .find()
        .then(place => res.json(place))
        .catch(err => console.log(err))
})


module.exports = router