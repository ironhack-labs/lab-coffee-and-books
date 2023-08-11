const express = require('express')
const Place = require('../models/Place.model');
const router = express.Router()

router.get('/create', (req, res, next) => {
    res.render('books/create');
});

router.post('/create', (req, res, next) => {
    const { name, type, latitude, longitude } = req.body;
    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})

router.get('/list', (req, res) => {
    Place
        .find()
        .then(items => res.render('list', { items }))
        .catch(err => console.log(err));
});

router.get('/edit/:place_id', (req, res) => {

    const { place_id } = req.params;
    Place
        .findById(place_id)
        .then(details => res.render('books/edit', details))
        .catch(err => console.log(err));
});

router.post('/edit/:place_id', (req, res, next) => {
    const { name, type, latitude, longitude } = req.body;
    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})

router.get('/delete/:id', (req, res, next) => {
    const { id } = req.params;
    Place
        .findByIdAndRemove(id)
        .then(() => res.redirect('/list'))
        .catch(err => console.log(err));
});



module.exports = router;
