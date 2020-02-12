const express = require('express')
const router = express.Router()

const Place = require("../models/place.model")

// CHECK TYPE
let checkBook = (type) => type == "BookStore" ? true : false
let checkCoffee = (type) => type == "CoffeeShop" ? true : false

// INDEX
router.get('/', (req, res) =>
    Place.find().then(places => {
        res.render('places/index', {
            places: places
        })
    }).catch(err => console.log(`Error al buscar lugares en la base de datos`)))


// API
router.get('/api', (req, res, next) => {
    Place.find()
        .then(allRestaurantsFromDB => res.json(allRestaurantsFromDB))
        .catch(err => next(err))
})

// API UNIQUE
router.get('/apiU/:id', (req, res, next) => {
    Place.findById(req.params.id)
        .then(place => res.json(place))
        .catch(err => next(err))
})

// ADD PLACE
router.post('/addPlace', (req, res) => {
    const location = {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude]
    }

    const newRestaurant = {
        name: req.body.name,
        type: req.body.type,
        location
    }

    Place.create(newRestaurant)
        .then(() => res.redirect('/places'))
        .catch(err => `Error al buscar en la base de datos ${err}`)
})

// // DELETE PLACE
router.post('/delete/:id', (req, res) => {
    Place.findByIdAndDelete(req.params.id)
        .then(() => res.redirect('/places'))
        .catch(err => console.log(`Fallo al eliminar lugar en la base de datos ${err}`))
})

// // GO TO EDIT PLACE  
router.get('/edit/:id', (req, res) =>
    Place.findById(req.params.id)
    .then(place => res.render('places/edit', {
        place: place,
        book: checkBook(place.type),
        coffee: checkCoffee(place.type)
    }))
    .catch(err => console.log(`Fallo al editar el lugar en la base de datos ${err}`))
)

// // EDIT PLACE
router.post('/edit/:id', (req, res) => {
    const location = {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude]
    }

    const newRestaurant = {
        name: req.body.name,
        type: req.body.type,
        location
    }
    Place.findByIdAndUpdate(req.params.id, newRestaurant)
        .then(() => res.redirect('/places'))
        .catch(err => console.log(`Fallo al editar el lugar en la base de datos ${err}`))
})

// DETAIL
router.get('/:id', (req, res) =>
    Place.findById(req.params.id)
    .then(place => {
        console.log(place)
        res.render('places/detail', place)
    }).catch(err => console.log(`Error al buscar lugares en la base de datos`)))

module.exports = router