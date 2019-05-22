const express = require('express');
const router = express.Router();
const Place = require('../models/place')


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
  Place.find()
    .then(places => {

      console.log(places)

      res.render('index', { Place });
    })
    .catch(err => {
      console.log(err)
    })

});


router.get('/list', (req, res, next) => {

  Place.find()
    .then(places => {

      res.render('list', { places })
    })
})

router.get("/delete/:id", (req, res, next) => {

  Place.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/list"))
    .catch(err => next(err))
})




router.get("/edit/:id", (req, res, next) => {

  Place.findById(req.params.id)
    .then(places => {
      console.log(places)
      res.render("edit", { placesM })
    })
    .catch(err => console.log(err))

})

router.post("/edit/:id", (req, res, next) => {

  Place.findByIdAndUpdate(req.params.id, { new: req.body })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})



router.post('/in', (req, res, next) => {

  const { name, type, latitude, longitude } = req.body

  let location = {
    type: "Point",
    coordinates: [longitude, latitude]
  }

  const newPlace = new Place({
    name,
    type,
    location
  })

  newPlace.save(err => {
    if (err) {
      next(err)
    } else {
      res.redirect('/')
    }
  })

})
