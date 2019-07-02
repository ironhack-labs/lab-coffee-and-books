const express = require('express');
const router  = express.Router();
const Places = require('../models/Place');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/places', (req, res, next) => {
  Places.find().then(place => {
    res.render('places', { place })
  }).catch((err) => {
    console.log(err)
  })
})

router.get('/json', (req, res, next) => {
  Places.find().then(place => {
    res.json({ place })
  }).catch((err) => {
    console.log(err)
  })
})


router.get("/places/show/:placeID", (req, res) => {
  Places.findById(req.params.placeID, (err, place) => {
    res.render('places/show', place)
  });
})

router.get('/places/new', (req, res, next) => {
  res.render('places/new');
});

router.post('/new-place', (req, res) => {
  const placeName = req.body.nameForm;
  const placeType = req.body.typeForm;
  const placeLocation = { 
    type: 'Point', 
    coordinates: [+req.body.longitudeForm, +req.body.latitudeForm] 
  }

  if (placeName === "" || placeType === "" || placeLocation === "") {
    res.render('places/new', { errorMessage: "Empty fields." });
    return
  }

  Places.
    findOne({ name: placeName })
    .then(foundPlace => {
      if (foundPlace) {
        res.render('places/new', { errorMessage: "This place already exists!" });
        return
      } else {
        Places
          .create({ name: placeName, type: placeType, location: placeLocation })
          .then(placeCreatedData => {
            res.redirect("/places")
          })
      }
    })
})

router.post('/:id/delete', (req, res) => {
  Places.findByIdAndRemove(req.params.id, (err, place) => {
    res.redirect("/places")
  });
})

router.post('/:id/edit', (req, res, next) => {
  Places.findById(req.params.id, (err, place) => {
    res.render('places/edit', place)
  });
});

router.post('/update/:id',(req, res, next) => {
  const placeName = req.body.nameForm;
  const placeType = req.body.typeForm;
  const placeLocation = { 
    type: 'Point', 
    coordinates: [+req.body.longitudeForm, +req.body.latitudeForm] 
  }
  const id = req.params.id;
  if(placeName === "" || placeType === "") {
    res.render('places', { errorMessage: "Empty fields." });
    return
  }
  Places
  .findByIdAndUpdate(id, {
    name: placeName,
    type: placeType,
    location: placeLocation,
  })
  .then(updatedData => {
    res.redirect('/places/show/'+id);
  })
});


module.exports = router;
