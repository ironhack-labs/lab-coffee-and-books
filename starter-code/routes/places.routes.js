const express = require('express');
const router = express.Router();


Place = require("../models/place.model")

router.get('/new', (req, res) => res.render('places/add'))

router.get('/', (req, res) => {

  Place.find()
    .then(allPlaces => res.render('places/index-places', { places: allPlaces }))
    .catch(err => console.log("Error consultadno los libros en la BBDD: ", err))
})


router.post('/new', (req, res, next) => {


  console.log("----------------------------", req.body.longitude, req.body.latitude)

  const location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  }

  const { name, type } = req.body

  Place.create({ name, type, location })
    .then(() => res.redirect('/places'))
    .catch(err => console.log(err))
})


module.exports = router;