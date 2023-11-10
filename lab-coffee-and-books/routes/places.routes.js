const express = require('express');
const router = express.Router();

const Places = require('./../models/place')


router.get("/places", (req, res, next) => {
    res.render("booksandcoffee/map")
})

router.get("/create", (req, res, next) => {
    res.render("booksandcoffee/create")
})

router.post("/create", (req, res, next) => {

    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    Places
        .create({ name, type, location })
        .then(() => res.redirect('/list'))
        .catch(err => next(err))
})

router.get("/list", (req, res, next) => {

    Places
        .find()
        .then(places => res.render("booksandcoffee/list", { places }))
        .catch(err => next(err))
})


router.get('/edit/:place_id', (req, res, next) => {

    const { place_id } = req.params

    Places
        .findById(place_id)
        .then(place => res.render('booksandcoffee/edit', place))
        .catch(err => next(err))
})


router.post('/edit/:place_id', (req, res, next) => {

    const { place_id } = req.params
    const { name, type, latitude, longitude } = req.body


    Places
        .findByIdAndUpdate(place_id, { name, type, latitude, longitude })
        .then(() => res.redirect(`/details/${place_id}`))
        .catch(err => next(err))
})

router.get("/details/:place_id", (req, res, next) => {

    const { place_id } = req.params

    Places
        .findById(place_id)
        .then(place => res.render('booksandcoffee/details', place))
        .catch(err => next(err))
})

router.post('/delete/:place_id', (req, res, next) => {

    const { place_id } = req.params

    Places
        .findByIdAndDelete(place_id)
        .then(() => res.redirect('/list'))
        .catch(err => next(err))
})


module.exports = router;