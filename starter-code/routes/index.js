const express = require('express');
const router = express.Router();
const Place = require('../models/Place');

/* GET home page */
router.get('/', (req, res, next) => {
	res.render('index');
});

/* Places routes */
const places = require('./places');
router.use('/places', places);

/* API routes */
const api = require('./api');
router.use('/api', api);

module.exports = router;
