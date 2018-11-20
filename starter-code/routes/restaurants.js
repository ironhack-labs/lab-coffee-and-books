const express = require('express');
const router = express.Router();
const Place = require('../models/Place');

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