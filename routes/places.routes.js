const express = require('express')
const router = express.Router()

const Place = require('./../models/place')

//Crear
router.get('/new', (req, res) => res.render('places/new'))

router.post('/new', (req, res) => {
    const {name, type} = req.body
    const location = {type: 'Point', coordinates: [req.body.longitude, req.body.latitude]}

    Place
        .create({name, type, location})
        .then(res.redirect('/places'))
        .catch(err => console.log('Error al crear el lugar: ', err))
})

//Lista
router.get('/', (req, res) => {
    Place
        .find()
        .then(allPlaces => res.render('places/list', {allPlaces}))
        .catch(err => console.log('Error al mostrar la lista: ', err))
})

//Editar
router.get('/edit', (req, res) => {
    Place
        .findById(req.query.id)
        .then(thePlace => res.render('places/edit', thePlace))
        .catch(err => console.log('Error al acceder al formulario de edición: ', err))
})

router.post('/edit', (req, res) => {
    const {name, type} = req.body
    const location = {type: 'Point', coordinates: [req.body.longitude, req.body.latitude]}
    Place
        .findByIdAndUpdate(req.query.id, {name, type, location}, {new: true})
        .then(res.redirect('/places'))
        .catch(err => console.log('Error al editar el lugar: ' , err))
})

//Eliminar
router.get('/delete', (req, res) => {
    Place
        .findByIdAndRemove(req.query.id)
        .then(res.redirect('/places'))
        .catch(err => console.log('Error al eliminar el lugar: ', err))
})

//Emite los datos necesarios para la API en forma de json
router.get('/api', (req, res, next) => {
    Place
        .find()
        .then(allPlaces => res.json({places: allPlaces}))
        .catch(err => next(err))
})

module.exports = router