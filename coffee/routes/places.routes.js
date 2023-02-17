const express = require('express');
const router = express.Router();
const Place = require('../models/Place.model')

require('../db/index')

/* GET home page */
router.get("/", (req, res, next) => {
    res.render("index");
});


router.get("/create-place", (req, res, next) => {
    res.render('places/create-place')
})

router.post("/create-place", (req, res, next) => {

    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place

        .create({ name, type, location })
        .then(() => res.redirect('/'))
        .catch(err => next(err))

})


router.get("/list-place", (req, res, send) => {

    Place
        .find()
        .then(places => res.render('places/list-place', { places }))
        .catch(err => next(err))
})
module.exports = router;

router.get("/edit-place/:id", (req, res, next) => {
    const { id } = req.params

    Place
        .findById(id)
        .then(response => res.render('places/edit-place', { places: response.data }))
        .catch(err => next(err))
})

router.post("/edit-place/:id", (req, res, next) => {
    const { name, type, latitude, longitude } = req.body
    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .findByIdAndUpdate(id, { name, type, location })
        .then(() => res.redirect('places/list-place'))
        .catch(err => next(err))
})

router.post("/delete/:id", (req, res, next) => {
    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(() => res.redirect('places/list-place'))
        .catch(err => next(err))

})
