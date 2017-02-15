/* jshint esversion:6 */
var express = require('express');
var router = express.Router();
const Place = require('../models/place');

/* GET home page. */

router.get('/', function(req, res, next) {
    Place.find((error, places) => {
        if (error) {
            next(error);
        } else {
            res.render('index', {
                places,
                jsonPlaces: JSON.stringify(places),
            });
            console.log(places);
        }
    });
});

/* GET news. */
router.get('/new', function(req, res, next) {
    res.render('new');
});

router.post('/', (req, res, next) => {
    // Get Params from POST
    let location = {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude]
    };

    // Create a new place with location
    const newPlace = {
        name: req.body.name,
        kind: req.body.kind,
        location: location
    };
    const place = new Place(newPlace);

    // Save the place to the Database
    place.save((error) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/');
        }
    });
});

module.exports = router;
