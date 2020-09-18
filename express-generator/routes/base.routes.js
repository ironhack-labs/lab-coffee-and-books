const express = require('express')
const router = express.Router()

// Endpoints
router.get('/', (req, res) => res.render('index'))
router.get('/map', (req, res) => res.render('mapView'))


module.exports = router
