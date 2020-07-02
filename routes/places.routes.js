const express = require('express')
const router = express.Router()

// YOUR MODEL GOES HERE --> const Book = require('./../models/book.model')

const Place = require('./../models/place.model')

//YOUR ROUTES GO HERE 


// ACCESO A MONGO - DEVUELVE JSON PARA MAPS

router.get('/api', (req, res) => {

    Place
        .find()
        .then(placesArr => res.json({placesArr}))
        .catch(err => console.log('error', err))
})


// LIST PLACES
router.get('/', (req,res) => {
    
    Place
        .find()
        .then(placesArr=> res.render('places/places-list', {placesArr}))
        .catch(err => console.log('error', err))
    
})


// CREATE PLACES
router.get('/add-place', (req,res) => res.render('places/places-add'))

router.post('/add-place', (req,res) => {

    const {name, type, lat, lng} = req.body

    Place
        .create({name, type, location :{lat, lng}})
        .then(() => res.redirect('/places') )
        .catch(err => console.log('error', err))
})


// DELETE PLACES

router.get('/delete/:id', (req, res) =>{

    Place
        .findByIdAndDelete(req.params.id)
        .then(()=> res.redirect('/places'))
        .catch(err => console.log('error', err))

})

// EDIT

router.get('/edit/:id', (req, res)=> {

    Place
        .findById(req.params.id)
        .then((place) => {
            console.log(place)
            return res.render('places/places-edit', place)})
        .catch(err => console.log('error', err))

})

router.post('/edit/:id', (req, res) =>{

    const {name, type, lat, lng} = req.body

    Place
        .findByIdAndUpdate(req.params.id, {name, type, location :{lat, lng}})
        .then(()=> res.redirect('/places'))
        .catch(err => console.log('error', err))

})

// DETAILS

router.get('/:id', (req, res) => {

    Place
        .findById(req.params.id)
        .then((place) => res.render('places/places-details', place))
        .catch(err => console.log('error', err))
})

module.exports = router