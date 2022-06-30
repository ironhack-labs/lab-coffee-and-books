const router = require('express').Router()

const Place = require('./../models/Place.model')

//new place
router.get('/create', (req, res, next) => {
    const types = ['coffee shop', 'bookstore']

    res.render('places/new-place', { types })
})

router.post('/create', (req, res, next) => {
    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/places/list'))
        .catch(err => console.log(err))
})

//all places
router.get('/list', (req, res, next) => {
    Place
        .find()
        .then(places => res.render('places/all-places', { places }))
        .catch(err => console.log(err))
})

//edit place
router.get('/edit/:place_id', (req, res, next) => {
    const { place_id } = req.params

    const types = [
        { name: 'coffee shop', isSelected: false },
        { name: 'bookstore', isSelected: false }
    ]

    Place
        .findById(place_id)
        .then(place => {
            types.forEach(type => {
                if (type.name === place.type) {
                    type.isSelected = true
                }
            })
            return { place, types }
        })
        .then(data => {
            console.log(data)
            res.render('places/edit-place', data)
        })
        .catch(err => console.log(err))
})

router.post('/edit/:place_id', (req, res, next) => {
    const { place_id } = req.params
    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .findByIdAndUpdate(place_id, { name, type, location })
        .then(place => res.redirect('/places/list'))
        .catch(err => console.log(err))
})

//delete place
router.get('/delete/:place_id', (req, res, next) => {
    const { place_id } = req.params

    Place
        .findByIdAndDelete(place_id)
        .then(place => res.redirect('/places/list'))
        .catch(err => console.log(err))
})

module.exports = router


