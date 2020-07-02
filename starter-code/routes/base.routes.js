const express = require('express');
const router  = express.Router();

// Endpoints
router.get('/', (req, res) => res.render('index'))

router.get('/places', (req, res) => res.render('../views/places/details.hbs'))
router.get('/places/new', (req, res) => res.render('./places/new'))



module.exports = router