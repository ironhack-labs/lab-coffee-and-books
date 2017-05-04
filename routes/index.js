const express = require('express');

const router = express.Router();

const CoofeeAndBook = require('../models/coffeeandbook');

router.route('/').get((req, res, next) => {
  CoofeeAndBook.find({}).exec((error, shops) => {
    if (error) {
      next(error);
    } else {
      res.render('shops/index', { shops });
    }
  });
});

router.route('/new').get((req, res, next) => {
  res.render('shops/new');
});

router.route('/').post((req, res, next) => {
  const shop = new CoofeeAndBook();
  shop.name = req.body.name;
  shop.description = req.body.description;
  shop.location.type = 'Point';
  shop.location.coordinates = [req.body.longitude, req.body.latitude];
  shop.save((error) => {
    if (error) {
      next(error);
    } else {
      res.redirect('/');
    }
  });
});

module.exports = router;
