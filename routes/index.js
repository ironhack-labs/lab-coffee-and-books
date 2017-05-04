const express = require('express');

const router = express.Router();

const CoofeeAndBook = require('../models/coffeeandbook');

// LIST ALL SHOPS
router.route('/').get((req, res, next) => {
  CoofeeAndBook.find({}).exec((error, shops) => {
    if (error) {
      next(error);
    } else {
      res.render('shops/index', {
        shops,
      });
    }
  });
});

// NEW FORM
router.route('/new').get((req, res, next) => {
  res.render('shops/new');
});

// EDIT FORM
router.route('/:id/edit').get((req, res, next) => {
  const id = req.params.id;
  CoofeeAndBook.findOne({ _id: id }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.render('shops/edit', { result });
    }
  });
});

// UPDATE USER
router.route('/:id').post((req, res, next) => {
  const id = req.params.id;
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude],
  };

  const newPlace = {
    name: req.body.name,
    description: req.body.description,
    location: location,
    business: req.body.business,
  };

  CoofeeAndBook.findOneAndUpdate({ _id: id }, newPlace, (err, result) => {
    if (err) {
      next(err);
    } else {
      res.redirect('/');
    }
  });
});

// SAVES the new shop
router.route('/').post((req, res, next) => {
  const shop = new CoofeeAndBook();
  shop.name = req.body.name;
  shop.description = req.body.description;
  shop.business = req.body.business;
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

// DELETE USER
router.route('/:id/delete').get((req, res, next) => {
  const id = req.params.id;
  CoofeeAndBook.findOneAndRemove({ _id: id }, (err, result) => {
    res.redirect('/');
  });
});


// SHOW ONE SHOP
router.route('/:shopId').get((req, res, next) => {
  CoofeeAndBook.findById(req.params.shopId, (error, shop) => {
    if (error) {
        next(error);
      } else {
        res.render('shops/show', { shop });
      }
  });
});

// SAVE NEW USER
router.route('/:shopId').post((req, res, next) => {
  Restaurant.findById(req.params.restaurant_id, (error, restaurant) => {
      if (error) {
        next(error);
      } else {
        restaurant.name = req.body.name;
        restaurant.description = req.body.description;
        restaurant.location.coordinates = [req.body.longitude, req.body.latitude];
        restaurant.save((error) => {
          if (error) {
            next(error);
          } else {
            res.redirect('/');
          }
        });
      }
  });
});


module.exports = router;
