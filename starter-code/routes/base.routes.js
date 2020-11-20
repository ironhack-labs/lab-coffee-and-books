const express = require('express')
const Place = require('../models/place.model')
const router = express.Router()

// Endpoints
router.get('/', (req, res) => res.render('index'))
router.get('/api/sitios', (req, res) => {
  Place
    .find()
  .then(data=>res.json(data)) 
  
})

module.exports = router
