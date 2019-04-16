const express = require('express');
const Router = express.Router();
const Place = require("../models/place")

// router.get('/airports', (req, res, next) => {
//   Airports
//     .find({name: /Ironhack/gi})
//     .select({ _id: 0 })
//     // .limit(5)
//     .then(airports => res.json(airports))
// });

// router.get('/theMap', (req, res) => {
//   res.render("map")
// })

Router.get('/', (req, res, next) => {
  res.render("places/indexPlaces")
})

Router.post('/', (req, res, next) => {
//   if (req.body.longitude < -180 || req.body.longitude > 180) {
//     res.status(500).json({error: true, "reason" : "longitude is wrong"})
//   }

const {name, type, longitude, latitude} = req.body
  Place.create( {name, type, longitude, latitude})
    .then(completedPlaces => res.redirect("/places/indexPlaces"));
})

Router.get("/showPlaces", (req, res, next) => {
    Place.find()
    .then(places => {
        res.render("places/showPlaces", {places});
      })
    .catch(err => {
        console.log('Error while finding all places', err)
        next()
    })
})

module.exports = Router;