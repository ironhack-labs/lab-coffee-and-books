const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Place = require('../Model/place');

router.get('/add', (req, res) => {
  res.render("places/add");
});

router.post('/add', (req, res) => {
  let location = {
    type: 'Point',
    coordinates: [eq.body.latitude, req.body.longitude]
    };
  Place.create({
      name: req.body.name,
      type: req.body.type,
      location: location
    }).then(() => {
     
      res.redirect("/places/favs");
    })
    .catch((error) => {
      console.log(error);
    })
});

router.get('/favs', (req, res) => {
  Place.find()
    .then(placeInDb => {
      console.log(placeInDb)
      res.render('places/favs', {
        placeInDb
      });
    })
    .catch(error => {
      next();
      console.log(error)
    });
});

router.get("/:id/update", (req, res, next) => {
Place.findById(req.params.id)
    .then(place => {
      console.log(place)
      res.render('places/update',
        place
      );
    })
    .catch(error => {
      next();
      console.log(error)
    });
});

router.post("/:id/update", (req, res, next) => {
  Place.updateOne({
      _id: req.params.id
    }, {
      name: req.body.name,
      type: req.body.type,
      location : {
        type: 'Point',
        coordinates: [req.body.latitude, req.body.longitude]
        }
    })
    .then(() => {
      res.redirect("/places/favs");
    })
    .catch(error => {
      next();
      console.log(error)
    });
});

router.get("/:id/delete", (req, res, next) => {
  Place.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/places/favs");
    })
    .catch(error => {
      next();
      console.log(error)
    });
});

// router.post("/:id/delete", (req, res, next) => {
//   Place.findByIdAndDelete(req.params.id)
//     .then(() => {
//       res.redirect("/");
//     })
//     .catch(error => {
//       next();
//       console.log(error)
//     });
// });



module.exports = router;