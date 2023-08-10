// const express = require('express')

const router = require("express").Router();

const Place = require('../models/Place.model')

//Ruta para mostrar la lista

router.get('/places', (req, res, next) => {

    Place
        .find()
        .then(place => res.render('places/place-list', { place }))
        .catch(err => console.log(err))
})

//Ruta para crear nuevo lugar

router.get('/places/create', (req, res) => {
    res.render('places/place-create');
});


router.post('/places/create', (req, res) => {
    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    Place
        .create({ name, type, location })
        .then(places => res.redirect('/places'))
        .catch(err => console.log(err))
})

//Ruta para eliminar

router.post('/places/delete/:place_id', (req, res) => {

    const { place_id } = req.params

    Place
        .findByIdAndDelete(place_id)
        .then(() => res.redirect(`/places`))
        .catch(err => console.log(err))
})

//Ruta para editar

router.get('/places/:place_id/edit', (req, res) => {

    const { place_id } = req.params

    Place
        .findById(place_id)
        .then(place => res.render("places/place-update", place))
        .catch(err => console.log(err))
})

router.post('/places/:place_id/edit', (req, res) => {

    const { place_id } = req.params
    const { name, type } = req.body

    Place
        .findByIdAndUpdate(place_id, { name, type })
        .then(place => res.redirect('/places'))
        .catch(err => console.log(err))
})


module.exports = router;
