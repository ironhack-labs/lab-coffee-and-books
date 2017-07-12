const express = require('express');
const router = express.Router();
const Places = require('../model/place')

/* GET home page. */
router.get('/', function(req, res, next) {
  Places.find((err, plcs)=>{
    if (err) {
      next();
      return;
    } else {
      obj = {
        title: "Places",
        places: plcs
      }
      res.render('index', obj);
    }
});

});

router.get('/new', function(req, res, next){
  res.render('new', {
    title: 'Register new place'
  });
});

router.post('/new', function(req, res, next){
  const { name, description, latitude, longitude } = req.body;
  const newPlaceDesc = {
    name,
    description,
    location: {
      type: 'Point',
      coordinates: [longitude, latitude]
    }
  }

  let newPlace = Places(newPlaceDesc);

  newPlace.save((err)=>{
    if(err){
      res.redirect('/new');
      return
    }

    res.redirect('/');
  })

})

module.exports = router;
