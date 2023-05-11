const express = require('express');
const router = express.Router();
const Place = require('../models/place.model.js');



// Create Place//

router.get('/create', (req, res, next) => {
    res.render('places/places-create')
})

router.post('/create', (req, res, next) => {
    const { name, type, lat, long } = req.body;
    const location = {
        type: 'Point',
        coordinates: [lat, long]
    }
    Place
        .create({ name, type, location })
        .then(res.redirect('places/places-list'))
        .catch(err => console.log(err));

})

// Read//
router.get('/places/places-list', (req, res, next) => {
    Place
        .find()
        .then(allPlaces => res.render('places/places-list', { places: allPlaces }))
        .catch(err => console.log(err))
})

//edit//

router.get('/places/:id/edit', (req, res, next) => {
    // Iteration #4: Update the drone
    const { id } = req.params
    Place
        .findById(id)
        .then(place => res.render("places/places-update", place))
        .catch(err => console.log(err))
});


router.post('/places/:id/edit', (req, res, next) => {


    const { name, type, lat, long } = req.body;
    const location = {
        type: 'Point',
        coordinates: [lat, long]
    }
    const { id } = req.params
    Place
        .findByIdAndUpdate(id, { name, type, location })
        .then(() => res.redirect('/places/places-list'))
        .catch(() => res.redirect(`/places/${id}/edit`))

});

/// delete//
router.post('/places/:id/delete', (req, res, next) => {

    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(() => res.redirect('/places/places-list'))
        .catch(err => console.log(err))
});



module.exports = router;