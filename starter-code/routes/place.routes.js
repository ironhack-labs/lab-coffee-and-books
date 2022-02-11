const router = require('express').Router()
const Place = require('../models/place.model')

router.get("/", (req, res, next) => {
    res.render("index");

})

router.get('/listado', (req, res, next) => {
    Place
        .find()
        .then(places => res.render('places/list', { places }))
        .catch(err => console.log(err))
})


router.get('/detalles/:place_id', (req, res, next) => {
    // res.send('holii')
    const { place_id } = req.params
    Place
        .findById(place_id)
        .then(place => res.render('places/details', place))
        .catch(err => (err))
})


router.get('/crear', (req, res, next) => {
    res.render('places/create-form')

})

router.post('/crear', (req, res, next) => {
    const { name, type, lat, lng } = req.body



    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/listado'))
        .catch(err => (err))
})

router.get('/editar/:place_id', (req, res, next) => {
    const { place_id } = req.params

    Place
        .findById(place_id)
        .then(place => res.render('places/edit-form', place))
        .catch(err => console.log(err))

})

router.post('/editar/:place_id', (req, res, next) => {
    const { place_id } = req.params
    const { name, type } = req.body

    Place
        .findByIdAndUpdate(place_id, { name, type })
        .then(updated => res.redirect(`/detalles/${updated._id}`))
        .catch(err => console.log(err))
})


router.post('/eliminar/:place_id', (req, res, next) => {
    const { place_id } = req.params

    Place
        .findByIdAndDelete(place_id)
        .then(() => res.redirect('/listado'))
        .catch(err => console.log(err))
})

router.get('/mapa', (req, res, next) => {
    res.render('places/map-places')
})

module.exports = router