const express = require('express')
const router = express.Router()

const Place = require('../models/place.model')
const { findByIdAndUpdate } = require('../models/place.model')



//RUTAS GET DE PLACES
router.get('/api', (req, res) => {
    Place
        .find({})
        .then(allPlacesDB => res.json({ places: allPlacesDB }))
        
})

router.get('/api/:id', (req, res) => {

    let placeID = req.params.id

    Place
        .findById(placeID)
        .then(onePlaceFromDB => res.json({ place: onePlaceFromDB }))
        
})

router.get('/', (req, res) => {
    Place
        .find()
        .then(allPlaces => {
            res.render('places/all-places', { allPlaces })
        })
        .catch(err => {
            console.log("error en la BBDD", err)
            next()
        })
})

router.get('/new', (req, res) => {
    res.render('places/new-place')
})

router.get('/:id', (req, res) => {
    Place
        .findById(req.params.id)
        .then(thePlace => res.render('places/detail-place', { thePlace }))
        .catch(err => {
            console.log("error en la BBDD", err)
            next()
        })

})

router.get('/delete/:id', (req, res) => {
    Place
        .findByIdAndRemove(req.params.id)
        .then(res.redirect('/places'))
        .catch(err => {
            console.log("error en la BBDD", err)
            next()
        })

})
router.get('/edit/:id', (req, res) => {

    Place
        .findById(req.params.id)
        .then(thePlace => {
            res.render('places/edit-place', { thePlace })

        })

        .catch(err => {
            console.log("error en la BBDD", err)
            next()
        })

})




//RUTAS POST DE PLACES


router.post('/new', (req, res) => {
    const { name, type } = req.body
    const location = { type: 'Point', coordinates: [req.body.longitude, req.body.latitude] }
    Place
        .create({ name, type, location })
        .then(res.redirect('/places'))
        .catch(err => {
            console.log("error en la BBDD", err)
            next()
        })
})

router.post('/edit/:id', (req, res) => {
    const { name, type } = req.body
    const location = { type: 'Point', coordinates: [req.body.longitude, req.body.latitude] }

    Place
        .findByIdAndUpdate(req.params.id, { name, type, location })
        .then(res.redirect('/places'), console.log({ name, type, location }))
})


module.exports = router