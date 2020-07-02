const express = require('express');
const router  = express.Router();

/* ENDPOINTS*/
router.get('/', (req, res, next) => res.render('index'));
router.get('/places', (req, res) => res.render('../views/places/places-index.hbs'))
router.get('/places/new', (req,res) => res.render('../views/places/places-new.hbs'))

module.exports = router;
