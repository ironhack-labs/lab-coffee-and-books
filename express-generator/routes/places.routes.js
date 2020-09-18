const express = require('express')
const router = express.Router()
const Places = require('../models/place.model')


router.get('/', (req, res, next) => {   // Inddexa todos lo places de la DB

    Places.find()
        .then(places => res.render('places/indexPlaces', {places}))
        .catch(err => console.log(err))
})

router.get('/create', (req, res, next) => res.render('places/createPlaces'))    // Form para añadir nuevos places en DB

router.post('/create', (req, res, next) => {

    let location = {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude]
    }
    const newPlace={
        name:req.body.name,
        type:req.body.type,
        location
    }

    console.log(newPlace)

    Places.create(newPlace)
        .then(() => res.redirect('/'))
        .catch((err) => console.log(err))

})

router.get('/edit/:id', (req, res, next) => {
    
    const id = req.params.id

    Places.findById(id)
        .then(place => {
            const {name, type} = place
            const coordinates = place.location.coordinates

            res.render('places/editPlaces', {name, type, coordinates})})
        .catch(err => next(err))
})

router.post("/edit/:id", (req, res, next) => {

    const id = req.params.id
    console.log(req.body)
    const { name, type } = req.body

    // add the location object
    let location = {
        type: 'Point',
        coordinates: [req.body.latitude, req.body.longitude]
    }
    Place.findByIdAndUpdate(id, { name, type, location })
        .then(() => res.redirect("/"))
        .catch(err => next(err))
})

router.get('/delete/:id', (req, res, next) => {
    const id = req.params.id
    Places.findByIdAndRemove(id)
        .then(() => res.redirect('/places'))
        .catch(err => console.log(err))

    console.log(id)
})

module.exports = router