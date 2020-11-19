const express = require('express')
const router = express.Router()

const Places = require('./../models/place.model')


router.get('/', (req, res) => {

    Places
        .find({}, { name: 1 })                                            
        .sort({ name: 1 })                                                 
        .then(allPlaces => {
            console.log(allPlaces)
            res.render('places/places-list', { allPlaces })
        })     
        .catch(err => console.log(err))
})



router.get('/detalle/:places_id', (req, res) => {

    const placesId = req.params.places_id

    Places
        .findById(placesId)
        .then(Place => res.render('places/details', Place))
        .catch(err => console.log(err))
})







router.get('/crear-local', (req, res) => res.render('places/new-place'))

router.post('/crear-local', (req, res) => {  
    

    const { name, type, latitude, longitude } = req.body
     const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Places
        .create({ name, type, location})
        .then(() => res.redirect('/locales'))
        .catch(err => console.log('Error:', err))
})



// Formulario edición libro: renderizar (GET)
router.get('/editar-local', (req, res) => {

    const placesId = req.query.place_id

    Places
        .findById(placesId)
        .then(Place => res.render('places/edit-place', Place))
        .catch(err => console.log(err))
})




router.post('/editar-local', (req, res) => {

    const placesId = req.query.place_id                         

    const { name, type } = req.body     

    Places
        .findByIdAndUpdate(placesId, { name, type })
        .then(place => res.redirect('/locales'))
        .catch(err => console.log(err))
})


// Eliminar libro
router.get('/eliminar-local', (req, res) => {

     const placesId = req.query.place_id   

    Places
        .findByIdAndDelete(placesId)
        .then(() => res.redirect('/locales'))
        .catch(err => console.log(err))
})



module.exports = router