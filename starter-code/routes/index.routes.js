const express = require('express');
const router  = express.Router();
const Places = require("../models/place.model")

/* GET home page */
router.get('/', (req, res) => res.render('index'))

module.exports = router
