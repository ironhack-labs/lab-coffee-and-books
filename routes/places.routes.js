const router = require('express').Router()

const Place = require('../models/Place.model')


router.get('/create', (req, res, next) => {
    res.render('places/create-place')
})

router.post('/create', (req, res) => {

    const { name, type, longitude, latitude } = req.body

    const location = {
        type: 'point',
        coordinates: [longitude, latitude]
    }

    Place
        .create({ name, type, location })
        .then(newPlace => {
            res.redirect(`/`)
        })
        .catch(err => console.log(err))
})

router.get('/', (req, res) => {

    Place
        .find()
        .then(places => {
            res.render('places/places', { places })
        })
        .catch(err => console.log(err))
})

router.get('/:id/edit', (req, res) => {

    const { id } = req.params

    Place
        .findById(id)
        .then(place => {
            res.render('places/edit', place)
        })
        .catch(err => console.log(err))
})

router.post('/:id/edit', (req, res) => {

    const { id } = req.params
    const { name, type, longitude, latitude } = req.body

    const location = {
        type: 'point',
        coordinates: [longitude, latitude]
    }

    Place
        .findByIdAndUpdate(id, { name, type, location }, { new: true })
        .then(place => {
            res.redirect('/places')
        })
        .catch(err => console.log(err))
})

router.post('/:id/delete', (req, res, next) => {

    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => console.log(err))
});

module.exports = router;