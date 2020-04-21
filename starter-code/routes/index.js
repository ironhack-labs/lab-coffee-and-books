const express = require('express');
const router = express.Router();
const Places = require("../models/place.model")

/* GET home page */
router.get('/', (req, res, next) => {
  Places.find()
    .then(allPlaces => res.render('index', {allPlaces}))
    .catch(error => next(error))
});

router.get('/edit/:id', (req, res, next) => {
  Places.findById(req.params.id)
    .then(foundPlace => res.render('edit', foundPlace))
    .catch(error => next(error))
})

router.post('/edit/:id', (req, res, next) => {
  const location = {
    type: "Point",
    coordinates: [req.body.latitude, req.body.longitude]
  }
  const {name, type } = req.body
  Places.findByIdAndUpdate(req.params.id, {name, type, location}, {new:true})
    .then(res.redirect('/'))
    .catch(error => next(next))
})

router.get('/add', (req, res, next) => res.render('add'))

router.post('/add', (req, res, next) => {
  const location = {
    type: "Point",
    coordinates: [req.body.latitude, req.body.longitude]
  }
  const { name, type } = req.body
  Places.create({ name, type, location })
    .then(res.redirect('/'))
    .catch(error => next(error))
})

router.post('/delete/:id', (req, res, next) => {
  Places.findByIdAndRemove(req.params.id)
    .then(res.redirect('/'))
    .catch(error => next(error))
})

router.get('/api', (req, res, next) => {
  Places.find()
    .then(allPlaces => res.json(allPlaces))
    .catch(error => next(error))
})

module.exports = router