const express = require('express');
const router = express.Router();

const Place = require('../models/Place.model')

router.get('/list', (req, res, next) => {
    Place
        .find()
        .then(places => res.render('places/list', { places }))
        .catch(err => next(err))
});

router.get('/create', (req, res, next) => {
    res.render('places/create-place')
});

router.post('/create', (req, res, next) => {
    const { name, type, latitude, longitude } = req.body
    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/list'))
        .catch(err => res.redirect('/create'))
});

router.get('/edit/:id', (req, res, next) => {
    const { id } = req.params

    Place
        .findById(id)
        .then(place => res.render('places/update-place', place))
        .catch(err => next(err))
});

router.post('/edit:id', (req, res, next) => {
    const { name, type, latitude, longitude, id } = req.body


    Place
        .findByIdAndUpdate(id, { name, type, latitude, longitude })
        .then(() => res.redirect('/list'))
        .catch(err => next(err))

});

router.post('/delete/:id', (req, res, next) => {
    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(() => res.redirect('/list'))
        .catch(err => next(err))

})

module.exports = router;