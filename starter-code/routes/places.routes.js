const express = require('express');
const router = express.Router();
const Place = require('../models/place');


router.get('/details/:id', (req, res, next) => {

    Place.findById(req.params.id)
        .then(place => res.render('places/details', place))
        .catch(err => next(err))
})

//Iteration #4: Adding New 

router.get('/new', (req, res, next) => res.render('places/new'))
router.post('/new', (req, res, next) => {
    console.log('entra post')
    let location = {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude]
    }

    const newPlace = {
        name: req.body.name,
        description: req.body.description,
        location
    }

    Place.create(newPlace)
        .then((res.redirect('/')))
        .catch(err => next(err))

})

router.post('/:id/delete', (req, res, next) => {
    Place.findByIdAndRemove(req.params.id)
        .then(PlaceDelate => res.redirect('/'))
        .catch(err => next(err))
})


router.get('/:id/edit', (req, res, next) => {
    Place.findById(req.params.id)
        .then(placeEdit => res.render('places/edit', placeEdit))
        .catch(err => next(err))
})

router.post('/:id', (req, res, next) => {

    let location = {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude]
    }
    const newPlace = {
        name: req.body.name,
        description: req.body.description,
        location
    }
    Place.findByIdAndUpdate(req.params.id, newPlace, { new: true })
        .then(updatePlace => {
            console.log(updatePlace)
            res.redirect(`/details/${updatePlace._id}`)
        })
        .catch(err => next(err))
})

module.exports = router;