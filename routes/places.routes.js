const express = require('express');
const router = express.Router();

const Place = require('./../models/Place.model')


//
router.get("/", (req, res, next) => {
    res.render("index");
});

//crear
router.get("/create", (req, res, next) => {
    res.send("places/places-create")
    //res.render("places/places-create")
})
// router.post("/create", (req, res, next) => {
//     const { name, type } = req.body
//     const location = {
//         type: 'Point',
//         coordinates: [latitude, longitude]

//     }

//     Place
//         .create({ name, description, location })
//         .them(() => res.redirect('/'))
//         .catch(err => next(err))




module.exports = router;