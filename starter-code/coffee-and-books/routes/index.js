var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post((req, res, next) => {
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  const newPlace = {
    name: req.body.name,
    kind: req.body.description,
    location: location
  };

  place.save((error) => {
    if (error) { console.log(error); } else {
      res.redirect('/');
    }
  });
});

module.exports = router;
