const express = require('express');
const router  = express.Router();
const Place = require('../models/places');

/* GET home page */
router.get('/', (req, res, next) => {
  Place.find()
  .then(places =>{
    console.log (places);
    res.render ('index',{places, placesAux: JSON.stringify(places)})
  })

});

router.get('/new', (req, res, next) => {
  Place.find()
  .then(places =>{
    console.log (places);
    res.render ('new',{places ,placesAux: JSON.stringify(places)})
  })

});

router.post('/new',(req, res, next) => {
  // Get Params from POST
  let location = {
    type: 'Point',
    coordinates: [ Number(req.body.latitude),Number(req.body.longitude)]

  };
    const{
      name,
      description,
      kind
    }=req.body;

      const newPlace = new Place({
        name, description,
        kind, location
      })

      // Save the newPlace to the Database
    newPlace.save()
    .then(place => {
      res.redirect("/");
    })
    .catch(err => {
      console.log(err);
      });
    })


module.exports = router;
