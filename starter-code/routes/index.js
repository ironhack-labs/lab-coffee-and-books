const express = require('express');
const router  = express.Router();

const Place = require("../models/place");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});



module.exports = router;
