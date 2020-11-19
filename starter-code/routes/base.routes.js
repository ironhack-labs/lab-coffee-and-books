const express = require('express')
const router = express.Router()
const Place = require('../models/place.model')

// Endpoints
router.get('/', (req, res) => res.render('index'))

module.exports = router
