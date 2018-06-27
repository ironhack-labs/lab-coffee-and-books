const express = require('express');
const router = express.Router();
const Place = require('../models/place');

router.get((req, res, next) => {
    Place.find()
        .then(place => {
            res.render('locations/show', {place});
        })
        .catch(err => {
            console.log(err);
            next();
        });
});

router.get('/', (req, res, next) => {
    Place.find()
        .then(place => {
            res.render('locations/locations', {place});
        })
        .catch(err => {
            console.log('No place to be but here: ', err);
            next();
        })
});

router.get('/add', (req, res, next) => {
    res.render('locations/add');
});

router.post('/add', (req, res, next) => {
    const location = {
        type: "Point",
        coordinates: [req.body.latitude, req.body.longitude]
    };
    const newPlace = new Place({
        name: req.body.name,
        description: req.body.description,
        location: location
    });

    newPlace.save()
        .then(place => {
            res.redirect('/');
        })
        .catch(err => {
            console.log('Nahhhhh only real places allowed', err);
            next();
        });
});

router.get('/:id', (req, res, next) => {
    Place.findOne({_id: req.params.id})
        .then(place => {
            res.render('locations/show', {place})
        })
        .catch(err => {
            console.log('If you want to see this location you\'re gonna have to go to it yourself: ', err);
            next();
        });
});

module.exports = router;