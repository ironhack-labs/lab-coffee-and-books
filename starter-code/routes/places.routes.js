const express = require('express');
const router = express.Router();


const Place = require('../models/place')
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//añadir nuevo lugar
router.get('/add', (req, res) => res.render('places-add'))
router.post('/add', (req, res) => {
  console.log(req.body)

  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  const newPlace = new Place({
    name: req.body.name,
    description: req.body.description,
    location: location // 
  });

  newPlace.save((error) => {
    if (error) {
      next(error);
    } else {
      res.redirect('/list');
    }
  });
})

//listado de lugares

router.get('/list', (req, res, next) => {
  Place.find()
    .then(allPlaces => {
      res.render('places-list', { places: allPlaces })
    })
    .catch(error => console.log(error))
})


//detalles lugares

router.get('/detail/:place_id', (req, res) => {

  Place.findById(req.params.place_id)

    .then(thePlace => res.render('places-details', { place: thePlace }))
    .catch(error => console.log(error))
})


//borrar

router.post('/delete/:place_id', (req, res) => {
  console.log(req.params.place_id)
  Place.findByIdAndRemove(req.params.place_id)
    .then(thePlace => {
      console.log("he entrado en el post")
      res.redirect('/list')
    })
    .catch(error => console.log(error))
})


//editar
router.get('/edit/:place_id', (req, res) => {

  Place.findOne({ _id: req.params.place_id })
    .then(place => res.render("places-edit", { place }))
    .catch(error => console.log(error))
})

/* router.post('/edit/:place_id', (req, res) => {
  const { name, type } = req.body
  Place.findByIdAndUpdate({ _id: req.params.place_id }, { $set: { name, type } })
    .then(() => res.redirect('/list'))
    .catch(error => console.log(error))

}) */

router.post('/edit/:place_id', (req, res, next) => {

  let location = {
    type: "Point",
    coordinates: [req.body.longitude, req.body.latitude]
  }

  Place.findById(req.params.place_id, (error, place) => {
    if (error) {
      next(error);
    } else {
      place.name = req.body.name;
      place.type = req.body.type;
      location = location
      place.save(error => {
        if (error) {
          next(error);
        } else {
          res.redirect("/list");
        }
      });
    }
  });
});

router.get('/api', (req, res, next) => {
  Place.find({}, (error, allPlacesFromDB) => {
    if (error) {
      next(error);
    } else {
      res.status(200).json({ places: allPlacesFromDB });
    }
  });
});




module.exports = router;
