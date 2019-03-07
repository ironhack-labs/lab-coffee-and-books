const express = require('express');
const router  = express.Router();
const Place = require('../models/Place')

/* GET home page */
router.get('/', (req, res, next) => {
  Place.find()
  .then(places => {
    res.render('index', {result: JSON.stringify(places)});
  })
  .catch(err => {
    console.log(err)
  })

  
});



router.post('/places', (req, res, next) => {

  const {name, description, latitude, longitude} = req.body

  let location = {
    type: "Point",
    coordinates: [longitude, latitude]
  }

  const newPlace = new Place({
    name : name,
    description: description,
    location: location
  })

  newPlace.save(err => {
    if (err) {
      next(err)
    } else {
      res.redirect('/')
    }
  })

})
//Delete
router.post("/delete", (req, res) => {
  Place.findOneAndRemove({name: req.body.name})
  .then(() => res.redirect('/'))
})
router.get("/delete", (req,res) => { 
  res.render("delete")
})
///Update



router.post('/places', (req, res, next) => {

  const {name, description, latitude, longitude} = req.body

  let location = {
    type: "Point",
    coordinates: [longitude, latitude]
  }

  const newPlace = new Place({
    name : name,
    description: description,
    location: location
  })

  newPlace.save(err => {
    if (err) {
      next(err)
    } else {
      res.redirect('/')
    }
  })

})

router.get("/update", (req,res) => { 
  res.render("update")
})


module.exports = router;
