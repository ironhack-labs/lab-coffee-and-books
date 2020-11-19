const express = require('express')
const router = express.Router()

// Endpoints
router.get('/', (req, res) => res.render('index'))
router.get('/places-map', (req, res) => res.render('places-map'))


module.exports = router
