const express = require('express')
const router = express.Router()

const Place = require('../models/Place.model')

/* GET home page -- READ*/
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

//CREATE

router.get('/create', (req, res) => res.render('create-form'))

router.post('/create', (req, res, next) => {
  const { name, type, address } = req.body

  Place.create({ name, type, address })
    .then(() => {
      res.redirect('/')
    })
    .catch((err) => {
      next(err)
    })
})

//UPDATE

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
  const { name, type, address } = req.body

  Place.findByIdAndUpdate(
    req.params.placeID,
    { name, type, address },
    { new: true }
  )
    .then(() => {
      res.redirect('/')
    })
    .catch((err) => {
      next(err)
    })
})

//DELETE

router.post('/delete/:placeID', (req, res, next) => {
  Place.findByIdAndDelete(req.params.placeID)
    .then(() => {
      res.redirect('/')
    })
    .catch((err) => {
      next(err)
    })
})

module.exports = router

//Raw data

router.get('/api', (req, res, next) => {
  Place.find({}, (error, allPlacesFromDB) => {
    if (error) {
      next(error)
    } else {
      res.json({ places: allPlacesFromDB })
    }
  })
})

router.get('/api/:id', (req, res, next) => {
  let placeId = req.params.id
  Restaurant.findOne({ _id: placeId }, (error, place) => {
    if (error) {
      next(error)
    } else {
      res.json({ place })
    }
  })
})
