const express = require('express')
const router = express.Router()

// Endpoints
router.get('/', (req, res) => res.render('index'))
// router.get('/',(req,res)=>res.render('coffee/coffee-list'))


// router.get('/parks-map', (req, res) => res.render('parks-map'))

module.exports = router