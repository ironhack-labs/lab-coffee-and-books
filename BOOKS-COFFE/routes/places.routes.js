const express = require('express');
const router = express.Router();
const Place = require('./../models/place.model')

/* GET home page */

router.get('/', (req, res, next) => {
    Place
        .find()
        .then(places => res.render('places/list', { places }))
        .catch(err => next(err))
})




router.get("/create", (req, res, next) => {
    res.render("places/new-places");
});

router.post('/create', (req, res, next) => {
    const { name, type, latitude: lat, longitude: lng } = req.body

    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/places'))
        .catch(err => next(err))


})

router.get('/edit/:id', (req, res, next) => {
    const { id } = req.params
    Place
        .findById(id)
        .then(places => res.render("places/edit", places))
        .catch(err => next(err))
})

router.post('/edit/:id', (req, res, next) => {
    const { name, type, latitude: lat, longitude: lng } = req.body
    const { id } = req.params

    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    Place
        .findByIdAndUpdate(id, { name, type, location })
        .then(() => res.redirect('/places'))
        .catch(err => next(err))
})

router.post('/delete/:id', (req, res, next) => {

    const { id } = req.params
    Place
        .findByIdAndDelete(id)
        .then(() => res.redirect('/places'))
        .catch(err => next(err))

})


router.get('/map', (req, res, next) => {
    res.render('places/placesMap')
})

module.exports = router;
