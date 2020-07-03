const express = require('express')
const router = express.Router()

const Place = require('../models/place')

//READ - funciona ok

router.get('/', (req, res, next) => {

    Place.find()
        .then(allPlaces => res.render('places-list', {allPlaces}))
         .catch(err => next(err))
})



//CREATE  - crea en postman y con console ( al final no está mostrando el formulario)

router.get('/new', (req, res) => res.render('places-new'))

router.post('/new', (req, res, next) => {
    const { name, type } = req.body
    Place.create({ name, type })
        .then(() => res.redirect('/places'))
        .catch(err => next(err))
    
})


//UPDATE - Pendiente



//DELETE - no está funcionando ( "la ruta no existe")

router.get('/delete', (req, res, next) => {
    Place.findByIdAndDelete(req.query.id)
    then(() => res.redirect('/places'))
    .catch(err => next(err))
})


//READ one - funciona ok

router.get('/:id', (req, res, next) => {
    Place.findById(req.params.id)
        .then(thePlace => res.render('places-details', {
            thePlace
        }))
        .catch(err => next(err))
})

module.exports = router
