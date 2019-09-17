const express = require('express');
const router  = express.Router();
const Places = require("../models/Places")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
