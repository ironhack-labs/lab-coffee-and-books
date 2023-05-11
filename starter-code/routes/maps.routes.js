const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/basic-map", (req, res, next) => {
  res.render('maps/basicMap');
});

router.get("/places-map", (req, res, next) => {
  res.render('maps/placesMap');
});

module.exports = router;
