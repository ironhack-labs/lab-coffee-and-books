const express = require('express');
const router = express.Router();
const Place = require('../models/Place');


/* GET home page. */
router.get('/', (req, res, next) => {
  Place.find().exec((err, places) => {
    res.render('index', {places});
  })
});

router.get('/listplace', (req, res, next) => {
  Place.find().exec((err, place) => {
    res.render('CRUD/listplace', { place })
  })

})

router.get('/createplace', (req, res, next) => {
  res.render('CRUD/createplace')
})

router.post('/createplace', (req, res, next) => {
  const name = req.body.name;
  const kindOf = req.body.kindOf;
  const coordLat = req.body.lat;
  const coordLng = req.body.long;

  if (name === "" || kindOf === "") {
    res.render("createplace", {
      message: "Indicate name and kindOf"
    });
    return;
  }

  Place.findOne({ name }, "name", (err, place) => {
    if (place !== null) {
      res.render("createplace", {
        message: "The name already exists"
      });
      return;
    }

    const newPlace = new Place({
      name,
      kindOf,
      loc: { type: "Point", coordinates: [coordLat, coordLng] }
    });
    newPlace.save((err) => {
      if (err) {
        res.render("auth/createplace", {
          message: "Something went wrong"
        });
      } else {
        res.redirect("/listplace");
      }
    });
  });

})

router.get('/updateplace/:id', (req, res, next) => {
  Place.findOne({
    _id: req.params.id
  }).exec((err, place) => {
    if (!place) {
      return;
    }
    res.render('CRUD/updateplace', { place })
  })
})

router.post('/updateplace/:id', (req, res, next) => {
  const id = req.params.id
  const name = req.body.name;
  const kindOf = req.body.kindOf;
  const coordLat = req.body.lat;
  const coordLng = req.body.long;


  Place.findOneAndUpdate({ _id: req.params.id }, {
    name,
    kindOf,
    loc: { type: "Point", coordinates: [coordLat, coordLng] }
  }, (err, place) => {
    if (place == null) {
      res.render("createplace", {
        message: "The name already exists"
      });
      return;
    }
    res.redirect("../listplace")
  })
})


router.get('/deleteplace/:id', (req, res, next) => {
  Place.deleteOne({ _id: req.params.id }).exec(() => res.redirect("../listplace"))

})
module.exports = router;
