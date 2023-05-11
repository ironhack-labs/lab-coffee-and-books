const express = require('express')
const router = express.Router()

const Place = require('../models/Place.model')

// create place

router.get('/create-place',(req, res, next) => {

res.render('place/create-place')
    
})

router.post('/create-place', (req, res, next) => {

    const { name, type, latitude, longitude } = req.body
    const location = {
        type: 'Point',
         coordinates: [latitude, longitude]
    }

    Place
        .create({ name, type, location })
        .then( () => res.redirect('/place/place-list'))
        .catch(err => next(err))

})

// place list

router.get('/place-list', (req, res, next) => {

    Place
    .find()
    .then(places => res.render('place/place-list', { places }) )
    .catch(err => next(err))
})

// place edit

router.get('/edit-place/:place_id', (req, res, next) => {
    const { place_id } = req.params

    Place
    .findById( place_id )
    .then(places =>res.render('place/edit-place',  places))
    .catch(err => next(err))

})

router.post('/edit-place/:place_id', (req, res, next) => {

     const { name, type, latitude, longitude } = req.body
     const { place_id } = req.params

     Place
     .findByIdAndUpdate(place_id, { name, type, latitude, longitude } )
     .then(() => res.redirect(`place/place-list`))
     .catch(err => next(err))
})

// delete place

router.post('/delete-place/:place_id', (req, res, next) => {

    const { place_id } = req.params

    Place
    .findByIdAndDelete(place_id )
    .then(() => res.redirect('/place/place-list'))
    .catch(err => next(err))
})


module.exports = router