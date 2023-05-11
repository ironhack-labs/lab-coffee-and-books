const express = require('express');
const router = express.Router();

const Place = require('./../models/Place.model')


//crear (render)
router.get("/create", (req, res, next) => {
    res.render("places/places-create")
});

router.post("/create", (req, res, next) => {
    const { name, type, latitude, longitude } = req.body
    const location = {
        type: 'point',
        coordinates: [latitude, longitude]
    }

    Place
        .create({ name, type, latitude, longitude })
        .then(() => {
            res.redirect('/')
        })
        .catch(err => console.log(err))
})

//lista
router.get('/places', (req, res, next) => {
    Place
        .find()
        .then(allPlaces => {
            res.render('places/places-list', { places: allPlaces })
        })
        .catch(err => console.log(err))
})

//details
router.get('/place/:id', (req, res, next) => {

    const { id } = req.params

    Place
        .findById(id)
        .then((place) => {
            res.render('places/places-details', place)
        })
        .catch(err => console.log(err))
});



//editar (render)
router.get('/places/:id/edit', (req, res) => {
    const { id } = req.params

    Place
        .findById(id)
        .then((place) => { res.render('places/places-edit', place) })
        .catch(err => console.log(err))
})


//editar (hanler)

router.post('/places/:id/edit', (req, res) => {

    const { name, type, latitude, longitude } = req.body
    const { id } = req.params

    Place
        .findByIdAndUpdate(id, { name, type, latitude, longitude })
        .then(() => { res.redirect(`/places`) })
        .catch(err => console.log(err))

})

router.post('/places/:id/delete', (req, res) => {

    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(() => { res.redirect(`/places`) })
        .catch(err => console.log(err))

})


module.exports = router;