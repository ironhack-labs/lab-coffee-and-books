const express = require('express')
const router = express.Router()

const Place = require('../models/place.model')



//RUTAS GET DE PLACES
router.get('/', (req, res) => {
    Place
        .find()
        .then(allPlaces => { 
            res.render ('places/all-places', {allPlaces})
        })
})

router.get('/new', (req, res) => {
    res.render ('places/new-place')
})

router.get('/:id', (req, res) => { 
    Place
        .findById(req.params.id)
        .then(thePlace => res.render('places/detail-place', {thePlace}) )
    
})

router.get('/delete/:id', (req, res) => { 
    Place
        .findByIdAndRemove(req.params.id)
    .then (res.redirect ('/places'))
   
})



//RUTAS POST DE PLACES


router.post('/new', (req, res) => {
    const { name, type } = req.body
    Place
        .create({ name, type })
        .then (res.redirect ('/places'))
})


module.exports = router