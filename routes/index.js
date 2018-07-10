const express = require('express');
const router  = express.Router();
const Place = require('../models/Place');

/* GET home page */
router.get('/', (req, res, next) => {
  place.find().then( places => {
    console.log(places);
    res.render('index',{places:JSON.stringify(places)});
  })
});
router.get('/add', (req, res, next) => {
  res.render('add');
});

router.post('/add', (req, res, next) => {
console.log("hola")
  const {
    name,
    description,
    kind
  } = req.body;
  console.log(req.body)

  Place.findOne({
      name
    })
    .then(place => {
      console.log(place);
      if (place!== null) {
        throw new Error("Place already exist");
      }

      

      const newPlace = new Place({
        name,
       description,
        kind
      });

      return newPlace.save()
    })
    
    .then(places => {
      res.redirect("/add");
    })
    .catch(err => {
      console.log(err);
      res.render("/", {
        errorMessage: err.message
      });
    })
})

module.exports = router;
