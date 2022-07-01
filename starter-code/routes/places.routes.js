const router = require("express").Router()
const Place = require("./../models/Place.model")

// list of places

router.get('/list', (req, res) => {
    Place
        .find()
        .then(place => res.render('places/places-list', { place }))
        .catch(err => console.log(err))
})

// create places

router.get('/add-place', (req, res) => {
    res.render('places/create-place')
})

router.post('/add-place', (req, res) => {

    const { name, type, latitude, longitude } = req.body
    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .create({ name, type, location })
        .then(place => res.redirect('/places/list'))
        .catch(err => console.log(err))
})

router.get('/:id/details', (req, res) => {
    const { id } = req.params

    Place
        .findById(id)
        .then(place => res.render('places/place-details', place))
        .catch(err => console.log(err))
})

router.get('/:id/edit', (req, res) => {
    const { id } = req.params

    Place
        .findById(id)
        .then(place => res.render('places/place-edit', place))
        .catch(err => console.log(err))
})

router.post('/:id/edit', (req, res) => {
    const { id } = req.params
    const { name, type, latitude, longitude } = req.body
    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .findByIdAndUpdate(id, { name, type, location })
        .then(place = res.redirect('/places/list'))
        .catch(err => console.log(err))
})

router.post('/:id/delete', (req, res) => {
    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(() => res.redirect('/places/list'))
        .catch(err => console.log(err))
})



router.get("")










module.exports = router