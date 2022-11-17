const express = require('express');
const router = express.Router();
const Place = require('../models/place.model')

//create a new place
router.get("/palces/create", (req, res, next) => {
    res.render('./../views/place/create-place')

});

router.post('/palces/create', (req, res, next) => {

    const { name, type, latitude, longitude } = req.body
    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Place
        .create({ name, type, location })
        .then(Place => {

            res.redirect(`/palces`)
        })
        .catch(err => console.log(err))
});


//all places
router.get('/palces', (req, res, next) => {

    Place
        .find()
        .then(place => {
            res.render('./../views/place/list', { place: place })
        })
        .catch(err => console.log(err))
})


//update o edit the place
router.get('/palces/:id/edit', (req, res, next) => {
    const { id: place_id } = req.params
    Place
        .findById(place_id)
        .then(place => {
            console.log(typeof place.location.coordinates)
            res.render('place/edit-place', place)
        })
        .catch(err => console.log(err))

});


router.post('/palces/:id/edit', (req, res, next) => {

    const { name, type } = req.body
    const { id: place_id } = req.params
    console.log(req.params)
    Place
        .findByIdAndUpdate(place_id, { name, type })
        .then(() => res.redirect(`/palces`))
        .catch(err => console.log(err))

});


//delete one place. delete usa con formulario con POST, o get con get sin formulario
router.get('/palces/:id/delete', (req, res, next) => {
    const { id: place_id } = req.params

    Place
        .findByIdAndDelete(place_id)
        .then(() => res.redirect(`/palces`))
        .catch(err => console.log(err))

});






module.exports = router;
