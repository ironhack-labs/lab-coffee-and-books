var express = require('express');
var router = express.Router();
var Shop = require('../models/shop');

/* GET home page. */
router.get('/', function(req, res, next) {
  Shop.find( (err, shops)=> {
    if(err){next(err);}
    res.render('index', {shops});
    });
});


router.post('/new', (req, res, next)=> {
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };
  console.log(location);

  const data = {
    name: req.body.name,
    description: req.body.description,
    location: location
  };

  const newShop = new Shop(data);
  console.log(newShop);
  newShop.save( (err)=> {
    if (err){ console.log('error here');}
    else {res.redirect('/');}
  });
});

module.exports = router;
