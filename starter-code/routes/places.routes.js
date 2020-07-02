const express = require('express')
const router = express.Router()
const Place = require('../models/place.model')

//GET vista lista
router.get('/', (req, res, next) => {
    Place.find()
        .then(allPlaces => res.render('place/index', { allPlaces }))
        .catch(err => console.log("Error en la BBDD", err))
})

//GET vista detalle
router.get('/detail/:id', (req, res, next) => {
    Place.findById(req.params.id)
        .then(place => res.render('place/detail', place))
        .catch(err => console.log("Error en get detail", err))
})

//GET vista new form
router.get('/new', (req, res, next) => {
    res.render('place/new')
        .catch(err => console.log("Error en view form new"))
})
//POST new form
router.post('/new', (req, res, next) => {
    const { name, type } = req.body
    const location = { type: 'Point', coordinates: [req.body.longitude, req.body.latitude] }

    Place.create({ name, type, location })
        .then(() => res.redirect('/place'))
        .catch(err => console.log("Error en post new"))
})

//GET delete
router.get('/delete/:id', (req, res, next) => {
    Place.findByIdAndDelete(req.params.id)
        .then(() => res.redirect(`/place`))
        .catch(err => next(err))
});

//GET vista edit
router.get('/edit/:id', (req, res) => {
    console.log(req.body)

    Place.findById(req.params.id)
        .then(place => res.render('place/edit', place))
        .catch(err => console.log("Error en get edit", err))
})
//POST edit
router.post('/edit/:id', (req, res) => {
    const { name, type } = req.body
    const location = { type: 'Point', coordinates: [req.body.longitude, req.body.latitude] }
    Place.findByIdAndUpdate(req.params.id, { name, type, location }, { new: true })
        .then(() => res.redirect(`/place/detail/${req.params.id}`))
        .catch(err => console.log("Error en post edit", err))
})
//API, y con el axios desde script hasta aquí?
//POR QUÉ ESA FIJACIÓN CON TARANCÓN??
router.get('/api', (req, res, next) => {
    Place.find()
        .then(allPlacesAgain => res.json({ places: allPlacesAgain }))
        .catch(err => console.log("Error en get API", err))
})

router.get('/api/:id', (req, res, next) => {
    let placeId = req.params.id

    Place.findById(placeId)
        .then(onePlace => res.json({ place: onePlace }))
        .catch(err => console.log("Error en get API", err))
})

module.exports = router
