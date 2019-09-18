const express = require('express');
const Place = require('../models/place');
const router = express.Router();  

router.get('/viewplaces', (req, res, next) => {
  Place.find()
    .then((places) => {
      res.render('places/allplaces', { places : places});
    });
});

router.get('/newplace', (req, res, next) => {
  res.render('places/placeAdd');
});

router.get('/places', (req, res, next) => {
  Place.find()
    .then((allPlaces) => {
      res.json(allPlaces);
    });
});

router.post('/newplace', (req, res, next) => {
  const {
    name, lat, lng, type,
  } = req.body;

  const newPlace = new Place({
    name,
    type,
    location: {
      coordinates: [lng, lat],
      type: 'Point',
    },
  });

  newPlace.save()
    .then((place) => {
      console.log('New place created');
      res.redirect('/');
    })
    .catch(error => next(error));
});

router.get("/deleteplace/:placeId", (req, res) => {
  Place.findByIdAndDelete(req.params.placeId).then(deletedPlace => {
    res.redirect("/viewplaces");
  });
});


// NO SE HACER LA PARTE DE EDITAR //

// router.get("/editplace", (req, res, next) => {
//   res.render("places/editplace")
// });

// router.post("/editplace", (req, res, next) => {
//   const name = req.body.name;
//   const password = req.body.password;

//   Place.findById(req.place._id)
//     .then(user => {
//       if (user) {
        

//         user.username = username;
//         user.password = hashPass;

//         user
//           .save()
//           .then(() => res.redirect("/editprofile"))
//           .catch(error => next(error));
//       }
//     })
//     .catch(error => next(error));
// });


module.exports = router;