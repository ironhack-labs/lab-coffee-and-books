const router = require('express').Router()

const Place = require('../models/place.model')

// Places list

router.get('/places', (req, res, next) => {
    // res.send('por favor no arriesgues')
    Place
        .find()
        .then(places => res.render('places/places', { places }))
        .catch(err => console.log(err))
})

// New place - GET

router.get('/places/create', (req, res, next) => res.render('places/new-place'))

// New place - POST

router.post('/places/create', (req, res, next) => {


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

// Edit place - GET

router.get('/places/edit/:id', (req, res, next) => {
    const { id } = req.params

    Place
        .findById(id)
        .then(places => res.render('places/edit-place', places))
        .catch(err => console.log(err))
})

// Edit place - POST

router.post('/places/edit/:id', (req, res, next) => {
    const { name, type, latitude, longitude } = req.body
    const { id } = req.params

    Place
        .findByIdAndUpdate(id, { name, type, latitude, longitude })
        .then(() => res.redirect('/places'))
        .catch(err => console.log(err))

})


// Delete place


router.post('/places/delete/:id', (req, res, next) => {
    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(response => res.redirect('/places'))
        .catch(err => console.log(err))
})





module.exports = router