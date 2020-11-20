const express = require('express')
const router = express.Router()

const Place = require('../models/place.model')


// Endpoints

router.get('/new', (req, res) => {
    
    Place
        .find()
        .then(allPlaces => res.render('Places/new-place', { allPlaces }))
        .catch(err => console.log(err))
}),


// New-place- CREAR
router.get('/new', (req, res) => res.render('Places/new-place'))
router.post('/new', (req, res, next) => {

    const { name, type } = req.body
    
    Place
        .create({ name, type })
        .then(() => res.redirect('/'))
        .catch(err => console.log('Error al crear el parque:',err))

})

// Details-place

router.get('/', (req, res) => {

    Place
        .find()
        .then(allPlaces => res.render('Places/details-place', {allPlaces}))
        .catch(err => console.log(err))
})

// DELETE

router.post('/:id/delete', (req, res) => {

    Place
        .findByIdAndDelete(req.params.id)
        .then(() => res.redirect('/places'))
        .catch(err => console.log(err))
})

// EDIT

router.get('/:id/edit', (req, res) => {

    Place
        .findById(req.params.id)
        .then(editPlace => res.render('Places/edit-place', editPlace))
        .catch(err => console.log(err))

})


router.post('/edit/:id', (req, res, next) => {

    const {name, type} = req.body

    Place
        .findByIdAndUpdate(req.params.id, { name, type} )
        .then(() => res.redirect('/places'))
        .catch(err => console.log(err))

})
module.exports = router