const express = require('express');
const router = express.Router();
const Place = require('../models/Place')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/api', (req, res, next) => {
  Place.find({}, (error, allRestaurantsFromDB) => {
    if (error) {
      next(error);
    } else {
      res.json({ restaurants: allRestaurantsFromDB, city: "Viersen" });
    }
  });
});

router.get('/see', (req, res, next) => {
  Place.find()
    .then(places => {
      res.render('read-places', {
        places: places
      })
    })
})

router.get('/see/:id/delete', (req, res, next) => {
  Place.findByIdAndRemove(req.params.id)
    .then(user => { res.redirect('/see') })
})

router.get('/create', (req, res, next) => {
  res.render('create-place')
})

router.post('/create', (req, res, next) => {

  const name = req.body.name;
  const kind = req.body.kind;
  const locationLat = req.body.latitude;
  const locationLong = req.body.longitude;
  if (name === "") {
    res.render("create-place", { message: "Indicate name" });
    return;
  }
  Place.findOne({ name }, "name", (err, user) => {
    if (user !== null) {
      res.render("create-place", { message: "The place already exists" });
      return;
    }
    const newPlace = new Place({
      name: name,
      kind: kind,
      location: {
        type: "Point",
        coordinates: [locationLat, locationLong]
      }
    });
    newPlace.save()
      .then(() => {
        res.redirect("/see");
      })
      .catch(err => {
        res.render("create-place", { message: "Something went wrong" });
      })
  });
})

module.exports = router;
