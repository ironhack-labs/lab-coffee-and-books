const express = require('express');
const Place = require('../models/place.js');
const router  = express.Router();


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/restaurants', (req, res, next) => {
  Place.find({type : "coffee shop"})
  .then(places => {
      res.render("restaurants", { places });
  })
  .catch(error => {
    console.log(error)
  })
});

router.post('/restaurants', (req, res, next) => {
  const { name, type } = req.body;
  const newRestaurant = new Place({ name, type});

  newRestaurant.save()
  .then((book) => {
    res.redirect('/restaurants');
  })
  .catch((error) => {
    console.log(error);
  })
});

router.get('/bookstores', (req, res, next) => {
  Place.find({type : "bookstore"})
  .then(places => {
      res.render("bookstores", { places });
  })
  .catch(error => {
    console.log(error)
  })
});

router.post('/bookstores', (req, res, next) => {
  const { name, type } = req.body;
  const newBookstore = new Place({ name, type});

  newBookstore.save()
  .then((book) => {
    res.redirect('/bookstores');
  })
  .catch((error) => {
    console.log(error);
  })
});





module.exports = router;
