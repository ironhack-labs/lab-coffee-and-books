var express = require('express');
var router = express.Router();
const Place = require('../models/place');

/* GET home page. */
router.get('/', function(req, res, next) {
  Place.find((error,place) => {
      if(error){
        next(error);
      }else{
        res.render('index', { jsonLocals: JSON.stringify(place) });
      }
  });

});

  router.post('/', (req, res, next) => {
    const newPlace = {
      name: req.body.name,
      type: req.body.type,
      location: {
        type: 'Point', //Puede ser point o poligon
        coordinates: [req.body.longitude, req.body.latitude],
      }
    };
    const place = new Place(newPlace); //Para asociar el modelo con el objeto
    place.save((e) =>{
      if(e){
        next(e);
      }else{
        res.redirect('/');
      }
    });
  });





module.exports = router;
