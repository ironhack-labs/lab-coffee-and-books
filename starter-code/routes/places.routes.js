const express = require('express');
const router  = express.Router();

const Place = require('../models/Place.model')

router.get('/places', (req, res, next) => res.render('places/place-list'))
router.post('/places', (req, res, next) => {
  const {name, type} = req.body

  Place.create({name, type})
  .then((x) => console.log(x))
})

router.get('/view-details', (req, res, next) => {
  const searchName = req.params.name
  console.log(searchName)
  Place.find({searchName})

  .then(eachPlace => {res.render('places/view-details', {eachPlace})
  console.log(eachPlace)
})

  .catch(err => {
    console.log('Error al pasar a la wiew details', err)
    next()
  })
})



module.exports = router