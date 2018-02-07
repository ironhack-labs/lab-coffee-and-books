const express = require('express');
const mongoose = require('mongoose');
const authRouter = express.Router();
const Places = require('../models/places');

authRouter.get('/', (req, res, next) => {
    res.render('index');
});

/* POST form to add the location. */
authRouter.post('/', function (req, res, next) {


    const newPlace = new Places({
        name: req.body.name,
        establishment: req.body.establishment,
        longitude: req.body.longitude,
        latitude: req.body.latitude
        

    });

    newPlace.save((err) => {
        console.log(err);
        if (err) {
            console.log(err);
            return next(err);
        }
        res.redirect('/places/map');
    });
});

authRouter.get('/map', (req, res, next) => {
    console.log("aqui");
    res.render('map')
});


module.exports = authRouter;