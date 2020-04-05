const express = require('express');
const router  = express.Router();
const Place = require('../model/place');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});



// Show places
router.get('/places', (req, res, next) => {
  Place
  .find().sort({name: 1})
  .then(places => {
    res.render('places', {
      places
    });

  })
  .catch(error => console.log(error));
});



//Places details

router.get('/places/:id', (req, res) => {

  Place
    .findById(req.params.id)
    .then(places => {
      // console.log(place);
      res.render('place-details', {
        places
      });
    })
    .catch(error => console.log(error));
});




// Edit Place

//GET place edit
router.get('/places-edit/:placeId', (req, res) => {
  const {
    placeId
  } = req.params;

  Place
    .findById(placeId)
    .then(places => {
      res.render('places-edit', places);
    })
    .catch(error => console.log(error));
});


//POST place edit
router.post('/places-edit', (req, res) => {
  const {
    placeId,
    name, 
    type, 
    longitude, 
    latitude
  } = req.body

  const location = {
    type: 'point',
    coordinates: [longitude, latitude]
  }

  Place
  .findByIdAndUpdate(placeId, {$set: {

    name, 
    type,
    location
  }
  }, {
    new: true
  })
  .then(response => {
    // console.log(response);
    res.redirect(`/places/${placeId}`);
  })
  .catch(error => console.log(error));
});







//Add Place

//rota GET
router.get('/places-add', (req, res) => {
  res.render('places-add');
})

// rota post
router.post('/places-add', (req, res) => {
  console.log('body: ', req.body);

  const {
    name,
    type,
    latitude,
    longitude,
  } = req.body;

  const location = {
    type: 'point',
    coordinates: [longitude, latitude]
  }
  Place.create({
    name,
    type,
    location
    })
    .then(response => {
      // console.log(response);
      res.redirect('/places');
    })
    .catch(error => console.log(error));
});



//Delete Place
router.get('/places-delete/:placeId', (req, res) => {
  const {
    placeId
  } = req.params;
  Place
    .findByIdAndRemove(placeId)
    .then(response => {
      // console.log(response);
    res.redirect('/places');
    })
    .catch(error => console.log(error));
});

router.get('/api/index', (req, res, next) => {
  Place
    .find()
    .then(places => {
      res.json(places);
    })
    .catch(error => console.log(error));
});


module.exports = router;
