var express = require('express');
var router = express.Router();
const Place = require('../models/Place');

/* GET home page. Aquí le decimos cual es la home page*/
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});
/*le decimos que si la url es index/new nos aparece el formulario*/
router.get('/new', function(req, res, next) {
  console.log("ENTRO DENTRO DE NEW GET");
  res.render('form');
});

/*recibe los datos del formulario*/
router.post('/new', (req, res, next) => {

  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  /*Recogemos los datos del formulario y creamos un objetos*/
  // Create a new Restaurant with location
  const newPlace = {
    name: req.body.name,
    description: req.body.description,
    location: location
  };
  console.log(newPlace);

/*en esta variable creamos el nuevo objeto con los datos del usuario*/
  const place = new Place(newPlace);
  /*aquí guardamos los datos en la db y redirigimos al index*/
  // Save the restaurant to the Database
  place.save((error) => {
    if (error) {
    } else {
      res.redirect('/');
    }
  });
});

router.get('/list', function(req, res, next) {
  Place.find({}, (err, places) => {
    res.render('list', {places:places})
  });
});


module.exports = router;
