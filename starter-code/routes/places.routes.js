const router = require("express").Router();

// all your routes here
const Place = require('../models/Place.model')


router.get('/', (req, res) => {

    Place
        .find()
        .then(places => {
            res.render("places/places", { places })
        })
        .catch(err => console.log(err))

})

router.get('/create', (req, res) => {


    res.render('places/new-place')

})

router.post('/create', (req, res) => {

    const { name, type, longitude, latitude } = req.body

    Place
        .create({
            name, type, location:{type: 'Point', coordinates:[longitude, latitude]}
        })
        .then(() => {
            res.redirect("/places")
        })
        .catch(err => res.redirect("/places/create"))

})





router.post('/:id/delete', (req, res) => {

    const { id } = req.params
    Place
        .findByIdAndRemove(id)
        .then(place => {
            res.redirect("/places")
        })
        .catch(err => console.log(err))

})

router.get('/:id/edit', (req, res) => {



    const { id } = req.params
    Place
        .findById(id)
        .then(place => {
            res.render('places/edit-place', place)
        })
        .catch(err => console.log(err))




})

router.post('/:id/edit', (req, res) => {

    const { name, type, latitude, longitude } = req.body
    const { id } = req.params

    Place
        .findByIdAndUpdate(id, {
            name, type, location: { type: 'Point', coordinates: [longitude, latitude] }
        })
        .then(() => {
            res.redirect("/places")
        })
        .catch(err => {
            res.redirect(`/places/${id}`)
            console.log(err)
        })
})

router.get('/:id', (req, res) => {

    const { id } = req.params
    Place
        .findById(id)
        .then(place => {
            res.render("places/place-details", place)
        })
        .catch(err => console.log(err))

})

module.exports = router;