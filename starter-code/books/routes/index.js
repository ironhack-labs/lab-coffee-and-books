var express = require('express');
var router = express.Router();
const Place = require("../models/books");
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/',(req, res, next) => {
  Place.find({},{_id: 0, name: 1, location:1, discpription:1},(error, places) => {
    if (error) { next(error); }
    else {
      console.log(places);
      res.render('index', { places });
    }
  });
});

router.post('/index', (req, res, next) => {
  // Get Params from POST
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

    var newPlace = Place ({
      name:        req.body.name,
      description: req.body.description,
      location:    location
    });

  newPlace.save((error) => {
    if (error) { console.log(error); }
    else {
      res.redirect('/');
    }
  });
});




module.exports = router;
