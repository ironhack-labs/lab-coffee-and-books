const express = require('express');
const Place = require('../models/place.model');
const router = express.Router();

/* GET home page */

router.get("/listado", (req, res, next) => {
    Place
        .find()
        .select({ name: 1 })
        .then(places => {
            res.render('places/list-places', { places: places })
        })
        .catch(err => console.log(err))
})

router.get('/detalles/:place_id', (req, res) => {

    const { place_id } = req.params

    Place
        .findById(place_id)
        .then(places => {
            res.render('places/place-details', places)
        })
        .catch(err => console.log(err))
})

router.get("/editar/:place_id", (req, res, next) => {

    const { place_id } = req.params

    Place
        .findById(place_id)
        .then(place => {
            res.render('places/edit-places', place)
        })
        .catch(err => console.log(err))
})

router.post('/editar/:place_id', (req, res) => {

    const { name, type } = req.body
    const { place_id } = req.params

    Place
        .findByIdAndUpdate(place_id, { name, type })
        .then(() => res.redirect(`/places/detalles/${place_id}`))
        .catch(err => console.log(err))
})



router.get("/crear", (req, res, next) => {
    res.render('places/create-place')
})

router.post("/crear", (req, res, next) => {

    const { name, type } = req.body

    Place
        .create({ name, type })
        .then(place => {
            res.redirect('/places/listado')
        })
        .catch(err => console.log(err))
})


router.post('/eliminar/:place_id', (req, res) => {

    const { place_id } = req.params

    Place
        .findByIdAndDelete(place_id)
        .then(() => res.redirect('/places/listado'))
        .catch(err => console.log(err))

})






module.exports = router