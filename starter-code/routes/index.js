const express      = require('express');
const router       = express.Router();
const placeRoutes  = require('./places');
const mapRoutes    = require('./map');


router.use('/', placeRoutes);
router.use('/', mapRoutes);

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/allPlaces', (req, res, next) => {
  Place.find()
    .then((allPlaces) => {
      res.json(allPlaces);
    });
});

module.exports = router;
