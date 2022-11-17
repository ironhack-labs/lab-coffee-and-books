const express = require('express');
const { response } = require('../app');
const router = express.Router();
const Place = require('../models/Place.model')

/* GET home page */

router.get('/list', (req, res, next) => {

    Place
        .find()
        .then(places => {
            res.render('places/list-place', { places })
        })

})


router.get("/create", (req, res, next) => res.render("places/create-place"));

router.post('/create', (req, res, next) => {

    const { name, type, latitude, longitude } = req.body


    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .create({ name, type, location })
        .then(place = res.redirect('/'))
        .catch(err => console.log(err))
})

router.get('/list/:id/edit', (req, res, next) => {

    const { id: place_Id } = req.params

    Place
        .findById(place_Id)
        .then(place => { res.render("places/update-place", place) })

})

router.post('/list/:id/edit', (req, res, next) => {
    const { id: place_Id } = req.params
    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .findByIdAndUpdate(place_Id, { name, type, location })
        .then(() => res.redirect('/places/list'))
        .catch(err => console.log(err))

})


router.post('/list/:id/delete', (req, res, next) => {

    const { id: place_Id } = req.params

    Place
        .findByIdAndDelete(place_Id)
        .then(() => res.redirect('/places/list'))
        .catch(err => console.log(err))

})

module.exports = router;
