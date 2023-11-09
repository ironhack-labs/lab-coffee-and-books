const router = require("express").Router();

const Place = require("./../models/Place.model")
router.get("/places", (req, res, next) => {

    Place

        .find()
        .then((place) => res.render('places/list-place', { place }))
        .catch(err => next(err))

})
router.get("/places/create", (req, res, next) => {

    Place
        .find()
        .then((place) => res.render('places/create-place', { place }))
        .catch(err => next(err))
})

router.post("/places/create", (req, res, next) => {

    const { name, type, longitude, latitude } = req.body;

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    Place
        .create({ name, type, location })
        .then(() => { res.redirect('/places') })
        .catch(err => next(err))
});

router.get('/places/:id', (req, res, next) => {

    const { id } = req.params

    Place

        .findById(id)
        .then((place) => res.render('places/details-place', place))
        .catch(err => next(err))

})

router.get('/places/:id/edit', (req, res, next) => {

    const { id } = req.params

    Place
        .findById(id)
        .then(place => res.render(`places/edit-place`, place))
        .catch(err => next(err))
})

router.post('/places/:id/edit', (req, res, next) => {

    const { id } = req.params

    const { name, type, longitude, latitude } = req.body;

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    Place
        .findByIdAndUpdate(id, { name, type, location })
        .then(() => res.redirect(`/places`))
        .catch(err => next(err))
})

router.post('/places/:id/delete', (req, res, next) => {

    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(() => res.redirect(`/places`))
        .catch(err => next(err))
})

router.get('/map', (req, res, next) => {
    res.render('places/maps-place')
})

module.exports = router;