const express = require('express')
const router = express.Router()

const Place = require('./../models/place')

//Crear es vivir :)

router.get('/new', (req, res) => res.render('places/new'))

router.post('/new', (req, res) => {
    const { name, type } = req.body
    const location = {
        type: "Point",
        coordinates: [req.body.lng, req.body.lat]
    }
    Place 
        .create({ name, type, location })
        .then(res.redirect('/places'))
        .catch(err => console.log("Error crear lugar BBDD:", err))
})

//lista (me gustaría serlo más)

router.get('/', (req, res) => {
    Place 
        .find()
        .then(allPlaces => res.render('places/list', {allPlaces}))
        .catch(err => console.log("Error mostrar lista BBDD:", err))
})

//Editar (esta chulo)

router.get('/edit', (req, res) => {
    Place
        .findById(req.query.id)
        .then(thePlace => res.render('places/edit', thePlace))
        .catch(err => console.log("Error formulario de edición BBDD:", err))
})

router.post('/edit', (req, res) => {
    const {name, type } = req.body
    const location = { type: 'Point', coordinates: [req.body.lng, req.body.lat] }
    Place
        .findByIdAndUpdate(req.query.id, { name, type, location }, { new: true })
        .then(res.redirect('/places'))
        .catch(err => console.log('Error al editar BBDD', err))
})

//Eliminar

router.get('/delete', (req, res) => {
    Place
        .findByIdAndRemove(req.query.id)
        .then(res.redirect('/places'))
        .catch(err => console.log('Error Eliminar lugar BBDD', err))

})

// Datos para la API (json)
router.get('/api', (req, res, next) => {
    Place
        .find()
        .then(allPlaces => res.json({ places: allPlaces }))
        .catch(err => next(err))
})

module.exports = router