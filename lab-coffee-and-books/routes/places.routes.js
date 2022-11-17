const express = require('express');
const { listIndexes } = require('./../models/place.model');
const router = express.Router();
const Place = require('./../models/place.model')

router.get('/list', (req, res) => {
    Place
        .find()
        .then(places => res.render('places/list', { places }))
        .catch(err => console.log(err))
})

router.get("/create", (req, res, next) => {

    res.render("places/create")
})

router.post("/create", (req, res, next) => {

    const { name, type } = req.body


    Place
        .create({ name, type })
        .then(() => res.redirect('/places/list'))
        .catch(err => console.log(err))
})

router.get('/details/:places_id', (req, res) => {

    const { places_id } = req.params

    Place
        .findById(places_id)
        .then(places => {
            res.render('places/details', places)
        })
        .catch(err => console.log(err))

})

router.get('/edit/:places_id', (req, res) => {

    const { places_id } = req.params

    Place
        .findById(places_id)
        .then(places => {
            res.render('places/update', places)
        })
        .catch(err => console.log(err))
})

router.post('/edit', (req, res) => {

    const { name, type } = req.body
    const { places_id } = req.query

    Place
        .findByIdAndUpdate(places_id, { name, type })
        .then(() => res.redirect(`/places/list`))
        .catch(err => console.log(err))
})





module.exports = router;