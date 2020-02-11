const express = require('express')
const router = express.Router()
const Place = require('../models/place.model')

router.get('/places', (req, res) => {
  Place.find()
    .then(allPlaces => res.render('places/list', { places: allPlaces }))
    .catch(err => console.log("Error consultando los lugares en la BBDD: ", err))
})

// Inclusión de un nuevo sitio en la BBDD
router.get('/new', (req, res) => res.render('places/new'))
router.post('/new', (req, res) => {
  const { name, type, date, coords } = req.body
  Place.create({ name, type, date, coords })
    .then(() => { res.redirect('/places') })
    .catch(err => {
      res.redirect('/')
      console.log("Error incluyendo la entrada en la BBDD: ", err)
    })
})

module.exports = router