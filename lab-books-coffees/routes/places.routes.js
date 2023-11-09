const express = require('express')
const router = express.Router()

const Place = require('./../models/place.model')



router.get('/create', (req, res) => {
    res.render('place/create-place')
})

router.post('/create', (req, res, next) => {
    const { name, type, latitude, longitude } = req.body
    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }
    Place
        .create({ name, type, location })
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})
router.get('/', (req, res) => {
    Place
        .find()
        .then(places => res.render('place/place-list', { places }))
        .catch(err => next(err))
})
router.get('/details/:place_id', (req, res) => {
    const { place_id } = req.params
    Place
        .findById(place_id)
        .then(place => res.render('place/details-place', place))
        .catch(err => next(err))

}
)

router.get('/edit/:place_id', (req, res) => {
    const { place_id } = req.params
    Place
        .findById(place_id)
        .then(place => res.render('place/edit-place', place))
        .catch(err => next(err))

}
)
router.post('/edit/:place_id', (req, res) => {
    const { name, type, latitude, longitude } = req.body
    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    Place
        .findByIdAndUpdate(place_id, { name, type, location })
        .then(place => res.redirect('/places'))
        .catch(err => next(err))

}
)


router.post('/delete/:place_id', (req, res) => {
    const { place_id } = req.params


    Place
        .findByIdAndDelete(place_id)
        .then(place => res.redirect('/places'))
        .catch(err => next(err))

})



module.exports = router;