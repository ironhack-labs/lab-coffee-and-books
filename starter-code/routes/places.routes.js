const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Places = require("../models/place.model")

// Crear un lugar


router.get('/new', (req, res) => res.render('places/new-form'))


router.post('/new', (req, res) => {

    const {
        name,
        type
    } = req.body

    const location = {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude]
    }

    Places

        .create({
            name,
            type,
            location
        })

        .then(() => res.redirect('/places/lista'))

        .catch(err => console.log(err))

})

// Lista

router.get('/lista', (req, res) => {

    Places
        .find()
        .then(allPlaces => {
            res.render('places/lista', {
                allPlaces
            })
        })
        .catch(err => console.log(err))

})

// Edita un lugar 

router.get('/edit/:id', (req, res) => {

    Places
        .findById(req.params.id)
        .then(onePlace => {
            res.render('places/edit-form', onePlace)
        })
        .catch(err => console.log(err))
})

router.post('/edit', (req, res) => {

    const {
        name,
        type
    } = req.body

    Places
        .findByIdAndUpdate(req.query.placeId, {
            name,
            type
        })
        .then(() => res.redirect('/places/lista'))
        .catch(err => console.log(err))
})

// Elimina un lugar

router.get('/delete', (req, res) => {

    const id = req.query.PlaceId

    Places

        .findByIdAndDelete(id)
        .then(() => res.redirect('/places/lista'))
        .catch(err => console.log(err))


})



module.exports = router