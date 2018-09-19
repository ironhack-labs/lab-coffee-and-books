const express = require('express');
const router  = express.Router();
const Shop = require('../models/Shop');


router.get('/', (req, res, next) => {
  res.render('shops')
})


router.get('/all', (req, res, next) => {
  Shop.find().then( shops => {
    res.render('shops/allShops', {
      shops,
      shopPars: JSON.stringify(shops)
    });
  }).catch(e=> next(e));
});


router.get('/new', (req, res, next) => {
  res.render('shops/newshop');
});

router.post('/new', (req, res, next) => {

  let shop = {
    name: req.body.name,
    description: req.body.description,
    location: {
      type: 'Point',
      coordinates: [Number(req.body.latitude), Number(req.body.longitude)]
    }
  }
  console.log(shop);
  Shop.create(shop).then( shop => {
    res.redirect('/all');
  }).catch(e=> next(e));
});


module.exports = router;