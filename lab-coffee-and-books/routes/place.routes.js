const router = require("express").Router();
//const axios = require("axios");

const Place = require('../models/Place.model')


// Places list
router.get("/places", (req, res, next) => {

    Place
        .find()
        .then(place => res.render('places/places-list', { place }))
        .catch(err => next(err))
});


// Create places
router.get('/places/create', (req, res, next) => {
    
    res.render("places/places-create")

});

router.post('/places/create', (req, res, next) => {
    console.log(req.body)

    const { name, type, latitude, longitude } = req.body
    const location = {
        type: 'Point',
        coordinates: [ latitude, longitude ]
    }

    Place
        .create({ name, type, location })
        .then(()=> res.redirect('/places'))
        .catch(err => next(err))
});


// Update place
router.get('/places/:id/edit', (req, res, next) => {

    const { id } = req.params

    Place
        .findById(id)
        .then(place => res.render('places/places-update', place))
        .catch(err => next(err))
});

router.post('/places/:id/edit', (req, res, next) => {

    const { name, type, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [ latitude, longitude ]
    }

    const { id } = req.params

    Place
        .findByIdAndUpdate(id, { name, type, location})
        .then(place => res.redirect('/places'))
})


// Delete place
router.post('/places/:id/delete', (req, res, next) => {

    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(() => res.redirect('/places'))
        .catch(err => next(err))
});

module.exports = router;

