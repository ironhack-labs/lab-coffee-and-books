const express = require('express')
const router = express.Router()

const Place = require('../models/place')


// Endpoints

router.get('/api', (req, res) => {
	Place.find()
		.then(places => res.json({ places }))
		.catch(err => (console.log(err)))
})

router.get('/', (req, res) => {
    Place.find()
    .then(allPlaces => res.render('index', {allPlaces}))
    .catch(err => (console.log(err)))
})

router.get('/create', (req, res) => res.render('create'))

router.post('/create', (req, res) => {
    
    const { name, type } = req.body
    const location = { type: 'Point', coordinates: [req.body.longitude, req.body.latitude] }

    Place
        .create({name, type, location})
        .then(() => res.redirect('/'))
        .catch(err => (console.log(err)))
})

router.get('/details')

router.get('/edit/:id', (req, res) => {

    Place
        .findById(req.params.id)
        .then(place => res.render('edit', place))
        .catch(err => (console.log(err)))
})

router.post('/edit/:id', (req, res) => {

    const {name, type} = req.body

    const location = { type: 'Point', coordinates: [req.body.longitude, req.body.latitude] }

    console.log(req.body)


    Place
        .findByIdAndUpdate(req.params.id, {name, type, location})
        .then(() => res.redirect('/'))
        .catch(err => (console.log(err)))
})

router.get('/delete/:id', (req, res) => {

    Place
        .findByIdAndDelete(req.params.id)
        .then(() => res.redirect('/'))
        .catch(err => (console.log(err)))
})





module.exports = router
