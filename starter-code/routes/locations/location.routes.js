const express = require('express')
const router = express.Router()
const Place = require('../../models/place.model')
const bodyParser = require('body-parser')


// Create new places

router.get('/new', (req, res) => res.render('locations/new'))
router.post('/new', (req, res) => {

    const location = {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude]
    }

    const {
        name,
        type,
    } = req.body

    Place.create({
            name,
            type,
            location
        })
        .then(() => res.redirect('/locations'))
        .catch(err => console.log(err))
})


// List of places
router.get('/', (req, res) => {
    Place.find()
        .then(allPlaces => res.render('locations/index', {
            place: allPlaces
        }))
        .catch(err => console.log("Error consultando los places en la BBDD: ", err))
})


// Details of places
router.get('/details/:locationId', (req, res) => {

    const locationId = req.params.locationId

    Place.findById(locationId)
        .then(place => res.render('locations/show', place))
        .catch(err => console.log("Error consultando los detalles del place en la BBDD: ", err))
})

//Delete places


router.get('/delete/:id', (req, res, next) => {

    const placeId = req.params.id

    Place.findByIdAndRemove(placeId)
        .then(() => res.redirect('/locations'))
        .catch(err => console.log(err))
})

// Edit places
router.get('/edit/:locationId', (req, res) => {

    const locationId = req.params.locationId

    Place.findById(locationId)
        .then(place => res.render('locations/edit', place))
        .catch(err => console.log(err))
})
router.post('/edit/:locationId', (req, res) => {

    const locationId = req.params.locationId
    const location = {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude]
    }

    const {
        name,
        type,
    } = req.body

    console.log(req.body)

    Place.findByIdAndUpdate(locationId, req.body)
        .then(x => res.redirect(`/locations/details/${locationId}`))
        .catch(err => console.log(err))
})

// to see raw data in your browser, just go on: http://localhost:3000/api
router.get('/api', (req, res, next) => {
    Place.find()
        .then(allPlacesFromDB => res.json(allPlacesFromDB))
        .catch(err => next(err))
})

router.get('/api/:id', (req, res, next) => {
    Place.findById(req.params.id)
        .then(thePlace => res.json(thePlace))
        .catch(err => next(err))
})

module.exports = router