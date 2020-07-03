const express = require('express')
const router = express.Router()

// Endpoints
router.get('/', (req, res) => res.render('index'))

router.get('/places', (req, res) => res.render('./../place/list-place'))
router.get('/places/new', (req,res) => res.render('./../place/create-place'))

module.exports = router
