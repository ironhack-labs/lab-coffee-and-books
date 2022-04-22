const router = require("express").Router()

const Place = require('../models/place')

router.get('/places', (req,res) => {
    Place
        .find()
        .then(places => {
            res.render('place/places', {places})
        })
        .catch(err => console.log(err))
})

router.get('/places/create', (req,res) => {
    res.render('place/create-places')
})

router.post('/places/create', (req,res) => {
    const {name, type, longitude, latitude} = req.body

    Place
        .create({name, type, location: {type: 'Point', coordinates: [longitude, latitude]}})
        .then(newPlace => {
            res.redirect('/places')
        })
        .catch(err => console.log(err))
})

router.get('/places/:id/edit', (req,res) => {
    
    const {id} = req.params
    
    Place
        .findById(id)
        .then(place => {
            res.render('place/edit-places', place)
        })
})

router.post('/places/:id/edit', (req,res) => {

    const {id} = req.params
    const {name, type, longitude, latitude} = req.body

    Place
        .findByIdAndUpdate(id, {name, type, location: {type: 'Point', coordinates: [longitude, latitude]}})
        .then(updatedPlace => {
            res.redirect('/places')
        })
})

router.post('/places/:id/delete', (req,res) => {
    
    const {id} = req.params

    Place
        .findByIdAndDelete(id)
        .then(()=>{
            res.redirect('/places')
        })
})

router.get('/mapa', (req,res) => {
    res.render('maps/places-map')
})


module.exports = router