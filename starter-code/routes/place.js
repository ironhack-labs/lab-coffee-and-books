const express = require('express');
const placeRouter = express.Router();
const Place = require('../models/place');

placeRouter.get('/newPlace', (req, res, next) => {
    res.render('places/newPlace');
});

placeRouter.post('/newPlace', (req, res, next) => {

    let { name, type } = req.body;
    let coordinates = {
        'lat': req.body.lat,
        'long': req.body.long
    }

    Place.create({ name, type, coordinates })
        .then(() => {
            res.redirect('/');
        })
        .catch(err => {
            return res.render('places/newPlace', { errorMessage: "There was an error, please resend the form" });
        })
});

placeRouter.get('/deletePlace/:id', (req, res, next) => {
    let id = req.params.id;

    Place.findByIdAndRemove(id)
        .then(() => res.redirect('/'))
        .catch(err => next(err))
});

placeRouter.get('/updatePlace/:id', (req, res, next) => {
    let id = req.params.id;

    Place.findById(id)
        .then(place => {
            return res.render('places/updatePlace', { place });
        })
        .catch(err => next(err));

});

placeRouter.post('/updatePlace/:id', (req, res, next) => {

    let id = req.params.id;
    const { name, type } = req.body;
    let coordinates = {
        'lat': req.body.lat,
        'long': req.body.long
    }

    Place.updateOne({ _id: id }, { $set: { name, type, coordinates } })
        .then(() => res.redirect('/'))
        .catch(err => next(err));
});

placeRouter.get('/apiJson', (req, res, next) => {
    Place.find({})
        .then(jsonPlaces => {
            res.json({ jsonPlaces });
        })
        .catch(err => next(err));
});


module.exports = placeRouter;
