const express = require('express')
const router = express.Router()

const Place = require('../models/place.model')



// Endpoints

router.get('/', (req, res) => {
    Place.find()
    .then(allPlaces => res.render('index',{allPlaces}))
    .catch(err => console.log('Disaster!!', err))
})

router.get('/new', (req, res) => res.render('new-place'))

router.post('/new', (req, res) => {
    const {name, type, lat, lng} = req.body 
    const coordinates = {
        lat,
        lng
    }

    Place.create({name, type, coordinates })
        .then(() => res.redirect('/'))
        .catch(err => console.log('Disaster!!', err))
})

router.get('/delete', (req, res, next) => {
    const placeId = req.query.id

    Place.findByIdAndRemove(placeId)
        .then(() => res.redirect('/'))
        .catch(err => console.log('Disaster!!', err))
})

router.get('/edit', (req, res, next) => {
    const placeId = req.query.id

    Place.findById(placeId)
        .then(placeToEdit => res.render('edit-place', placeToEdit))
        .catch(err => console.log('Disaster!!', err))

})

router.post('/edit', (req, res, next) => {
    const placeId = req.query.id
    const {name, type, lat, lng } = req.body
    const coordinates = {
        lat,
        lng
    }

    Place.findByIdAndUpdate(placeId, {name, type, coordinates})
        .then(() => res.redirect('/'))
        .catch(err => console.log('Disaster!!', err))
})

module.exports = router
