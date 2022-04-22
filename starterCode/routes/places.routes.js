const router = require('express').Router()
const Place = require('./../models/Place.model')


// -------------> PLACES LIST <-------------
router.get('/places', (req, res) => {

    Place
        .find()
        .then(allPlaces => res.render('places-list', { allPlaces }))
        .catch(err => console.log(err))
})


// -------------> CREATE PLACES <-------------
router.get('/places-new', (req, res) => {
    res.render('new-place')
})

router.post('/places-new', (req, res) => {

    const { name, type, lat, lng } = req.body

    Place
        .create({ name, type, location: { type: "Point", coordinates: [lat, lng] } })
        .then(place => res.redirect('/places'))
        .catch(err => console.log(err))
})


// -------------> EDIT PLACES <-------------
router.get('/place-edit/:id', (req, res) => {

    const { id } = req.params

    Place
        .findById(id)
        .then(selectedPlace => {
            res.render('place-edit', selectedPlace)
        })
        .catch(err => console.log(err))
})

router.post('/place-edit/:id', (req, res) => {

    const { id } = req.params
    const { name, type } = req.body

    Place
        .findByIdAndUpdate(id, { name, type })
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => console.log(err))
})

// -------------> DELETE PLACES <-------------
router.post('/place-delete/:id', (req, res) => {

    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => console.log(err))
})



module.exports = router