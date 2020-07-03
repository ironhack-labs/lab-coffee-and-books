const express = require('express')
const router = express.Router()

const Place = require('./../model/place')


// Endpoints

//lista de lugares

router.get('/', (req, res) => {

    Place
    .find()
        .then(allPlaces => res.render('place/list-place', { allPlaces }))
        .catch(err => next(new Error(err)))
})

//detalles de lugares

router.get('/detalle/:placeId', (req, res) => {

    Place
        .findById(req.params.placeId)
        .then(thePlace => res.render('place/details-place', thePlace))
        .catch(err => next(new Error(err)))
})

//crear lugar

router.get('/crear', (req, res) => {
    res.render('place/create-place')
})

router.post('/crear', (req, res) => {

    const { name, type } = req.body

    Place
        .create({ name, type})
        .then(() => res.redirect('/place/list-place'))
        .catch(err => next(new Error(err)))
})

//editar lugar

router.get('/editar', (req, res) => {

    Place
        .findById(req.query.placeId)
        .then(thePlace => res.render('place/details-place', thePlace))
        .catch(err => next(new Error(err)))
})


router.post('/editar/:placeId', (req, res) => {

    const { name, type} = req.body

    Place
        .findByIdAndUpdate(req.params.placeId, { name, type})
        .then(() => res.redirect(`/place/details-place/${req.params.placeId}`))
        .catch(err => next(new Error(err)))
})

//borrar lugar

router.get('/delete/:id', (req, res) => {

    Place
    .findByIdAndDelete(req.params.placeId)
    .then(() => res.redirect('/list-place'))
    .catch(err => next(new Error(err)))
})



module.exports = router