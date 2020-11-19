const express = require('express')
const router = express.Router()

const Places = require('./../models/place.model')

// LIST
router.get('/', (req, res, next) => {

    Places
        .find()
        .then(allPlaces => {
            res.render('places/list', { allPlaces })
        })
        .catch(err => next(err))
})

//NEW PLACE
router.get('/new', (req, res) => res.render('places/new-place'))

router.post('/new', (req, res, next) => {
    const { name, latitude, longitude, type } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }
    console.log(type)
    if (name === "" || latitude === "" || longitude === "" || type == "Seleccionar") {
        res.render("places/new-place", { errorMsg: "Rellena todos los campos" })
        return
    }
    console.log(req.body)
    Places
        .create({ name, type, location })
        .then(newPlace => {
            console.log('Has creado:', newPlace)
            res.redirect('/places')
        })
        .catch(err => next(err))

})

// DELETE
router.get('/delete', (req, res, next) => {
    const placeId = req.query.place_id

    Places
        .findByIdAndDelete(placeId)
        .then(deleted => {
            console.log('Has eliminado:', deleted)
            res.redirect('/places')
        })
        .catch(err => next(err))
    console.log(placeId)
})


// EDIT
router.get('/edit', (req, res, next) => {

    const placeId = req.query.place_id

    Places
        .findById(placeId)
        .then(place => res.render('places/edit', place))
        .catch(err => next(err))
})

router.post('/edit', (req, res, next) => {
    const placeId = req.query.place_id
    const { name, type } = req.body
    Places
        .findByIdAndUpdate(placeId, { name, type })
        .then(place => res.redirect(`/places`))
        .catch(err => next(err))

})


module.exports = router
