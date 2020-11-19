const express = require('express')
const router = express.Router()

const Place = require('../models/place.model')

//Endpoints
router.get('/', (req, res, next) => {
    Place
        .find()
        .then(allPlaces => {
            res.render('places/places-index', { allPlaces })
        })
        .catch(err => next(new Error(err)))
})


router.get('/new', (req, res) => { res.render('places/new-place') })

router.post('/new', (req, res, next) => {

    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .create({ name, type, location })
        .then(() => res.redirect('/'))
        .catch(err => next(new Error(err)))
})


router.get('/delete', (req, res, next) => {
    const placeId = req.query.id

    Place
        .findByIdAndRemove(placeId)
        .then(() => res.redirect('/places'))
        .catch(err => next(new Error(err)))

})

router.get('/edit', (req, res, next) => {
    const placeId = req.query.id

    Place
        .findById(placeId)
        .then(thePlace => res.render('places/place-edit', thePlace))
        .catch(err => next(new Error(err)))


})



router.post('/edit', (req, res, next) => {
    const placeId = req.query.id
    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    if (name === "" || type === "" || latitude === "" || longitude === "") {
        res.render("places/place-edit", { errorMsg: "Fill the gaps" })
        return
    }
    else {
        Place
            .findByIdAndUpdate(placeId, { name, type, location })
            .then(() => res.redirect('/places'))
            .catch(err => next(new Error(err)))
    }

})


module.exports = router