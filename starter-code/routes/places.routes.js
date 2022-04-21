const express = require('express');
const router = express.Router();

const Place = require('./../models/Place.model')

router.get('/new', (req, res) => {
    Place
        .find()
        .then(places => {
            res.render('new-place', { places })
        })
        .catch(err => console.log(err))
})

router.post('/new', (req, res) => {

    const { name, type, latitude, longitude } = req.body

    Place
        .create({ name, type, location: { type: "Point", coordinates: [latitude, longitude] } })
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => console.log(err))
})

router.get('/places', (req, res, next) => {
    Place
        .find()
        .then(places => {
            res.render('places', { places })
        })
        .catch(err => console.log(err))
});

router.post('/places/:id/delete', (req, res, next) => {

    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => console.log(err))

});

router.get('/places/:id/edit', (req, res) => {

    const { id } = req.params

    Place
        .findById(id)
        .then(places => {
            res.render('edit-place', { places })
        })
        .catch(err => console.log(err))
})

router.post('/places/:id/edit', (req, res) => {

    const { id } = req.params
    const { name, type } = req.body

    Place
        .findByIdAndUpdate(id, { name, type })
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => console.log(err))
})

module.exports = router;