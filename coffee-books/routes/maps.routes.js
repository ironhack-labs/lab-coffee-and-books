const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/map", (req, res, next) => {
    res.render('maps/map');
});

router.get("/placesMap", (req, res, next) => {
    res.render('maps/placesmap');
});

module.exports = router;