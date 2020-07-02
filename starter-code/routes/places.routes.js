const express = require('express')
const router = express.Router()

const Place = require('../models/place.model')

//Endpoints

//Mostrar listado
router.get('/', (req, res, next) => {
    Place.find()
        .then(allPlaces => res.render('places/list', { allPlaces }))
        .catch(err => next(new Error(err)))
})

//Crear lugar

router.get('/add', (req, res) => res.render('places/add'))
router.post('/add', (req, res) => {

    const { name, type } = req.body

    Place.create({ name, type })
        .then(response => {
            console.log(response)
            res.redirect('/')

        })
        .catch(err => console.log("Error en la BBDD", err))
})

//Borrar lugar

router.post('/:id/delete', (req, res) => {
    Place.findByIdAndDelete(req.params.id)
        .then(() => res.redirect('/places'))
        .catch(err => console.log("Error en la BBDD", err))
})

//Editar lugar
router.get('/edit/:id', (req, res, next) => {
    Place.findById(req.params.id)
        .then(thePlace => res.render('places/edit', thePlace))
        .catch(err => next(err))
})
router.post('/edit/:id', (req, res) => {
    const { name, type } = req.body

    Place.findByIdAndUpdate(req.params.id, { name, type })
        .then(() => res.redirect('/places'))
        .catch(err => console.log("Error en la BBDD", err))

})
router.get('/api', (req, res, next) => {
    Place.find()
        .then(allPlacesFromDB => res.json(allPlacesFromDB))
        .catch(err => next(err))
})


//Mostrar detalle
router.get('/details/:id', (req, res, next) => {
    Place.findById(req.params.id)
        .then(thePlace => res.render('places/details', thePlace))
        .catch(err => next(err))
})

module.exports = router;
