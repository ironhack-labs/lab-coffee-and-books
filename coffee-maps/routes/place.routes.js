const express = require('express');
const router = express.Router();
const Place = require('../models/place')



router.get("/create", (req, res, next) => {

    res.render("places/new-place")
});
router.post("/create", (req, res, next) => {

    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }
    Place
        .create({ name, type, location })
        .then(() => res.redirect('/places/list'))
        .catch(err => next(err))
})

router.get('/list', (req, res, next) => {
    Place
        .find()
        .then(places => res.render("places/list-places", { places }))
        .catch(err => next(err))
})

router.post('/:id/delete', (req, res, next) => {
    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(() => res.redirect('/places/list'))
        .catch(err => next(err))
})

router.get('/:id/edit', (req, res, next) => {

    const { id } = req.params

    Place
        .findById(id)
        .then(places => res.render('places/edit-place', places))
        .catch(err => next(err))
})

router.post('/:id/edit', (req, res, next) => {

    const { name, type, latitude, longitude, id } = req.body

    Place

        .findByIdAndUpdate(id, { name, type, latitude, longitude })
        .then(() => res.redirect('/places/list'))
        .catch(err => next(err))
})

module.exports = router;