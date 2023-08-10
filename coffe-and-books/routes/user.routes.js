const express = require('express');
const router = express.Router();

const Place = require('../models/place.model');

//LISTADO

router.get('/places', (req, res) => {
    Place
        .find()
        .then(placeList => res.render('places/list-places', { placeList }))
        .catch(err => console.log(err))
});

//CREAR

router.get('/new-places', (req, res, next) => {
    res.render('places/new-places')
})

router.post('/new-places', (req, res, next) => {

    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/places'))
        .catch(err => next(err))
})


module.exports = router;