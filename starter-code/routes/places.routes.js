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

router.post('/:id', (req, res, next) => {
  placesController.updatePlace(req.params.id, req.body)
    .then(() => res.json({ status: 200, message: 'Place updated successfully'}))
    .catch(err => res.status(500).json({ status: 500, message: err}));
});

router.post('/:id/delete', (req, res, next) => {
  placesController.removePlace(req.params.id)
    .then(() => res.json({ status: 200, message: 'Place removed successfully'}))
    .catch(err => res.status(500).json({ status: 500, message: err}));
});



module.exports = router;