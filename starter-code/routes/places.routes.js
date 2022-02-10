const router = require('express').Router()
const Place = require('./../models/Place.model')

// Create Place
router.get('/crear', (req, res, next) => {
    res.render('places/create-place-form')
})

router.post('/crear', (req, res, next) => {
    const { name, type, lat, lng } = req.body

    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    Place
        .create({ name, type, location })
        .then(newPlace => {
            console.log(newPlace)
            res.redirect('/places')
        })
        .catch(err => console.log(err))
})


// list all Places
router.get('/places', (req, res, next) => {
    Place
        .find()
        .then(allPlaces => res.render('places/list-places', { allPlaces }))
        .catch(err => console.log(err))
})


// edit Place
router.get('/places/:id/editar', (req, res, next) => {
    const { id } = req.params

    Place
        .findById(id)
        .then(place => res.render('places/edit-place-form', place))
        .catch(err => console.log(err))
})

router.post('/places/:id/editar', (req, res, next) => {
    const { id } = req.params
    const { name, type, lat, lng } = req.body

    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    Place
        .findByIdAndUpdate(id, { name, type, location }, { new: true })
        .then(place => res.redirect('/places'))
        .catch(err => console.log(err))
})


// delete
router.post('/places/:id/delete', (req, res, next) => {
    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(() => res.redirect('/places'))
        .catch(err => console.log(err))
})




module.exports = router;
