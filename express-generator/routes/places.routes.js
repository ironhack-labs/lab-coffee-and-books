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
    Places.findById(req.query.id)
        .then(place => res.render('places/editPlaces', {place}))
        .catch(() => next())
})

router.post('/edit/:id', (req, res, next) => res.redirect('places/indexPlaces'))

router.get('/delete/:id', (req, res, next) => {
    const id = req.params.id
    Places.findByIdAndRemove(id)
        .then(() => res.redirect('/places'))
        .catch(err => console.log(err))

    console.log(id)
})

module.exports = router