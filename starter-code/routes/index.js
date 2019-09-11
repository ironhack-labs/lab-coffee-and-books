const express = require('express');
const router = express.Router();
const { allPlaces, createPlace, createPlaceForm, deletePlace, updatePlace, updatePlaceForm } = require('../controllers/maps-controller')

/* GET home page */
router.get('/', allPlaces)

// Create
router.get('/place/new', createPlaceForm)
router.post('/place/new', createPlace)

// Edit
router.get('/place/:id/edit', updatePlaceForm)
router.post('/place/:id/edit', updatePlace)

// Delete
router.get('/place/:id/delete', deletePlace)

module.exports = router;
