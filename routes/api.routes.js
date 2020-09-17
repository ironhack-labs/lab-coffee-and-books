const express = require('express')
const router = express.Router()

const Place = require('../models/place.model')

// Endpoints
router.get('/', (req, res) => {
    Place.find()
    .then(allPlaces => res.json({allPlaces}))
    .catch(err => console.log('Disaster!!', err))
})




module.exports = router
