const express = require('express');
const router = express.Router();
const Place = require('../models/Place')

/* GET home page */
router.get('/', (req, res, next) => {
    Place.find((error, places) => {
        if (error) { next(error) } else {
            res.render('index', { places });
        }
    })
});


//evitar el save*
/* POST a new place */
router.post('/', (req, res, next) => {
    //get parameters
    let location = {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude]
    };
    //create a new place 
    const newPlace = new Place({
        name: req.body.name,
        kind: req.body.kind,
        location: location
    })

    newRestaurant.save((error) => {
        if (error) { next(error) } else {
            res.redirect('/');
        }
    })
});

/* GET page to add new place*/
router.get('/new', (req, res, next) => {
    res.render('places/new');
})

module.exports = router;