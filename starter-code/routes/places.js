const express = require('express');
const router = express.Router();
const placesController = require('../controllers/places.controller');

router.get('/', (req, res, next) => {
  placesController.getPlaces()
    .then(places => res.json(places))
    .catch(err => res.status(500).json({ status: 500, message: err}));
});

router.post('/new', (req, res, next) => {
  placesController.createPlace(req.body)
    .then(() => res.json({ status: 200, message: 'Place created successfully'}))
    .catch(err => res.status(500).json({ status: 500, message: err}));
});

module.exports = router;