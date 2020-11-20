const express = require('express')
const Place = require('../models/place.model')
const router = express.Router()

// Endpoints
router.get('/', (req, res) => {
    Place
        .find({type: 'bookstore'})
        .then(AllBookstores => {
            Place
                .find({ type: 'coffee shop' })
                .then(AllCoffeeShops => {
                    res.render('places/index', { bookstores: AllBookstores, coffeeShops: AllCoffeeShops })
                })
                .catch(err => console.log(err))
                })
        .catch(err => console.log(err))
})

router.get('/new', (req, res) => res.render('places/new-place'))

router.post('/new', (req, res) => {
    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/places'))
        .catch(err => console.log(err))   
})

router.get('/edit', (req, res) => {
    Place
        .findByIdAndUpdate(req.query.id)
        .then(thePlace => {
            res.render('places/edit-place', thePlace)
        })
        .catch(err => console.log(err))
})

router.post('/edit', (req, res) => {
    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }
    
    Place
        .findByIdAndUpdate(req.query.id, { name, type, location })
        .then(() => res.redirect('/places'))
        .catch(err => console.log(err))     
})

router.get('/delete', (req, res) => {
    Place
        .findByIdAndDelete(req.query.id)
        .then(() => res.redirect('/places'))
        .catch(err => console.log('There was an error:', err))
})

module.exports = router