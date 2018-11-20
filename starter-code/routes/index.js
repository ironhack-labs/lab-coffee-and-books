const express = require('express');
const router  = express.Router();
const Place = require('../models/Place');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/coffeandrestaurants')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/restList', (req, res, next) => {
 res.render('./restaurant/restList');
});

router.get('/new', (req, res, next) => {
 res.render('./restaurant/new');
});

router.get('/restList', (req, res, next) => {
  res.render('./restaurant/restList');
});

router.post('/new', (req, res, next) => {

 let place = {
   name: req.body.name,
   type: req.body.type,
  //  location: {
  //    type: 'Point',
  //    coordinates: [Number(req.body.latitude), Number(req.body.longitude)]
   
 }
 console.log(place);
 Place.create(place).then( place => {
   res.redirect('/');
 }).catch(e=> next(e));
});


// router.post('/new', (req, res) => {
//   const { name, type } = req.body;

//   const newPlace = new Place({
//     name,
//     type,
//   });
//   newPlace.save()
//     .then(() => {
//       res.redirect('/new');
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });












// router.get('/', (req, res, next) => {
//   Place.find().then( restaurants => {
//     res.render('restaurants/list', {
//       restaurants,
//       restStr: JSON.stringify(restaurants)
//     });
//   }).catch(e=> next(e));
// });

// router.get('/new', (req, res, next) => {
//   res.render('restaurants/new');
// });

// router.post('/new', (req, res, next) => {
//  console.log("imprimo pantalla")
//   let restaurant = {
//     name: req.body.name,
//     description: req.body.description,
//     location: {
//       type: 'Point',
//       coordinates: [Number(req.body.latitude), Number(req.body.longitude)]
//     }
//   }
//   console.log(restaurant);
//   Place.create(restaurant).then( restaurant => {
//     res.redirect('/restaurants');
//   }).catch(e=> next(e));
// });

module.exports = router;


