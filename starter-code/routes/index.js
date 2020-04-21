const express = require('express')
const router = express.Router()

const Place = require('../models/Place.model')

/* GET home page */
router.get('/', (req, res, next) => {
  Place.find()
    .then((places) => {
      console.log(places)
      res.render('index', { places })
    })
    .catch((err) => {
      next(err)
    })
})

router.get('/create', (req, res) => res.render('create-form'))

router.post('/create', (req, res, next) => {
  const { name, type } = req.body

  Place.create({ name, type })
    .then(() => {
      res.redirect('/')
    })
    .catch((err) => {
      next(err)
    })
})

router.get('/edit/:placeID', (req, res, next) => {
  Place.findById(req.params.placeID)
    .then((fetchedPlace) => {
      res.render('edit-form', fetchedPlace)
    })
    .catch((err) => {
      next(err)
    })
})

router.post('/edit/:placeID', (req, res, next) => {
  const { name, type } = req.body

  Place.findByIdAndUpdate(req.params.placeID, { name, type }, { new: true })
    .then(() => {
      res.redirect('/')
    })
    .catch((err) => {
      next(err)
    })
})

module.exports = router
