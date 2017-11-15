var express = require('express');
const Place = require('../models/Place');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  Place.find().then((data) => {
    res.render('index', { title: 'Express', places: data });

  })

});
router.get('/new', function(req, res, next) {
  res.render('places/new', { title: 'Express' });
});

router.post('/new', function(req, res, next) {

const placeInfo = {
  name:req.body.name,
  type: req.body.type,
  location: {type:"point", coordinates:[req.body.longitude,req.body.latitude]}
}

const newPlace = new Place(placeInfo);
newPlace.save().then(() => {
  return res.redirect("/");
}).catch((e) => {
    next(e);
});



});



module.exports = router;
