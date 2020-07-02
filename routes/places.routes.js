const express = require('express')
const router = express.Router()
const Place = require('../models/places.model')

//LISTADO

router.get('/', (req, res) => {
    Place.find()

        .then(allPlaces => {res.render('place/place-index', {allPlaces})})
        .catch(err => console.log('error en la BBDD', err))


})

//CREAR 

router.get('/new', (req, res) => {
    Place.find()
        
        .then(allPlaces => res.render('place/new-place', { allPlaces }))
        .catch(err => console.log('error al crear un nuevo sitio', err))
    
})

router.post('/new', (req, res) => {
    const { name, placeType, photo } = req.body
    
    Place
        .create({ name, placeType, photo })
        .then(response => {
            console.log(response)
            res.redirect('/place') 
        })
        .catch(err => ('error en la BBDD', err))
})

//LISTADO

router.get('/', (req, res) => {
    Place.find()
        
        .then(allPlaces => {
            console.log(allPlaces)
            res.render('place/place-index', { allPlaces })
        })
        .catch(err => console.log('error en la BBDD', err))
    

})

//VER DETALLES

router.get('/:placeId', (req, res) => {

    Place
        .findById(req.params.placeId)
        .then(thePlace => res.render('place/place-details', thePlace))
        .catch(err => console.log('error en la BBDD', err))
})


//ELIMINAR

router.get('/:id/remove', (req, res) => {

    Place
        .findByIdAndRemove(req.params.id)
        .then(thePlace => res.redirect('/place'))
        .catch(err => ('error en la BBDD', err))
})

//EDITAR

router.get('/edit/:id', (req, res) => {
    Place
        .findById(req.params.id)
        .then(thePlace => res.render('place/place-edits', thePlace))
        .catch(err => console.log('error en la BBDD', err))
})

router.post('/edit/:placeId', (req, res) => {

    const { name, placeType, photo } = req.body
    
    Place
        .findByIdAndUpdate(req.params.placeId, { name, placeType, photo }, { new: true })
        .then(thePlace => res.redirect('/place'))
        .catch(err => console.log('error en la BBDD', err))
})


module.exports = router