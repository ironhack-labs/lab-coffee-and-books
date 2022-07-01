const router = require("express").Router()

const Place = require('./../models/Places.model')


router.get("/create", (req, res, next) => {
    res.render("places/new-place")
})

router.post("/create", (req, res, next) => {

    const { name, type } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .create({
            name, type, location 
        })
        .then(() => res.redirect('/places/all-places'))
        .catch(err => console.log(err))
})


router.get("/all-places", (req, res, next) => {

    Place
        .find()
        .then(places => res.render('places/all-places', { places }))
        .catch(err => console.log(err))
})


router.get("/details/:id", (req, res, next) => {

    const { id } = req.params

    Place
        .findById(id)
        .then(place => res.render('places/details', { place }))
        .catch(err => console.log(err))
})

// Edit rend
router.get('/edit/:id', (req, res) => {

    const { id } = req.params

    Place
        .findById(id)
        .then(place => res.render('places/edit-place', place))
        .catch(err => console.log(err))
})

//edit handle
router.post('/edit/:id', (req, res) => {

    const { name, type } = req.body

    const { id } = req.query

    Place
        .findByIdAndUpdate(id, { name, type })
        .then(() => res.redirect(`places/all-places`))
        .catch(err => console.log(err))
})

//delete
router.post('/delete/:id', (req, res) => {

    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(() => res.redirect(`/places/all-places`))
        .catch(err => console.log(err))
})


module.exports = router