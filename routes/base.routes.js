const express = require('express')
const router = express.Router()

// Endpoints
router.get('/', (req, res) => res.render('index'))

router.get('/bookstories-map', (req, res) => res.render('bookstories/bookstories-map'))


module.exports = router
