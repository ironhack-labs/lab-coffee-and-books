const express = require('express')
const router = express.Router()


const CoffeBook = require('../models/coffe.model')


router.get('/crear', (req, res, next) => {
    res.render('places/create')
})


router.post('/crear', (req, res, next) => {

    const { name, description, place, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }


    CoffeBook
        .create({ name, description, place, location })
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})




router.get('/listado', (req, res, next) => {

    CoffeBook
        .find()
        .then(list => res.render('places/list', { list }))
        .catch(err => next(err))
})



router.get('/listado/editar/:detail_id', (req, res, next) => {

    const { detail_id } = req.params

    CoffeBook
        .findById(detail_id)
        .then(details => res.render('places/edit', details))
        .catch(err => next(err))
})






router.post('/listado/eliminar/:detail_id', (req, res, next) => {

    const { detail_id } = req.params

    CoffeBook
        .findByIdAndDelete(detail_id)
        .then(() => res.redirect('/listado'))
        .catch(err => next(err))
})






router.post('/listado/editar/:detail_id', (req, res, next) => {

    const { detail_id } = req.params
    const { name, description, place, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    CoffeBook
        .findByIdAndUpdate(detail_id, { name, description, place, location })
        .then(() => res.redirect('/listado'))
        .catch(err => next(err))

})


router.get('/mapas', (req, res, next) => {
    res.render('places/maps')
})


module.exports = router