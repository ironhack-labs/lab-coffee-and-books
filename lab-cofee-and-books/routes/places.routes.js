const express = require('express')
const router = express.Router()

const Place = require('../models/place')

router.get('/crear', (req, res, next) => {
    res.render('places/create-places')
})

router.post('/crear', (req, res, next) => {

    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/'))
        .cacth(err => next(err))

})

router.get('/porfin', (req, res, next) => {                     // en realidad es /sitios/porfin
    res.render('places/map2')                                 // Aqui renderizo la vista del mapa con los marcadores!
})




router.get('/listado', (req, res, next) => {
    Place
        .find()
        .then(places => res.render('places/list', { places }))
        .catch(err => next(err))
})

// router.get('/eliminar', (req, res, next) => {

// })



module.exports = router