const express = require('express')
const router = express.Router()

// Endpoints
router.get('/', (req, res) => res.render('index'))
router.get('/detalle', (req, res) => res.render('details')) //repasar por si es detalle o details al principio


module.exports = router
