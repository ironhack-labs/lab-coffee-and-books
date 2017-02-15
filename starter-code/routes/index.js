/* jshint esversion: 6 */

var express = require('express');
var router = express.Router();

const Place = require('../models/Place');

/* GET home page. */
router.get('/', function(req, res, next) {
    Place.find((error, places) => {
        if (error) {
            next(error);
        } else {
            res.render('index', {
                title: 'Coffee & Books',
                places,
                jsonPlaces: JSON.stringify(places)
            });
        }
    });
});

router.post('/', (req, res, next) => {
    const {
        name,
        kind,
        description
    } = req.body;

    // Get Params from POST
    let location = {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude]
    };

    // Create a new Restaurant with location
    const p = new Place({
        name,
        kind,
        description,
        location
    });

    // Save the restaurant to the Database
    p.save((error) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/');
        }
    });

});

router.get('/bookstores', (req, res, next) => {
  Place.find({kind: 'books'}, (error, bookstores) => {
    if (error) {
        next(error);
    } else {
        res.render('index', {
            title: 'Bookstores',
            places: bookstores,
            jsonPlaces: JSON.stringify(bookstores)
        });
    }
  });
});

router.get('/cafes', (req, res, next) => {
  Place.find({kind: 'coffee'}, (error, cafes) => {
    if (error) {
        next(error);
    } else {
        res.render('index', {
            title: 'Cafes',
            places: cafes,
            jsonPlaces: JSON.stringify(cafes)
        });
    }
  });
});

router.get('/add', (req, res, next) => {
    res.render('add');
});



module.exports = router;
