const express = require('express');
const router = express.Router();
const placeModel = require('../models/Place');

router.get('/', (req,res,next) => {
  placeModel.find()
  .then(places => {
    res.render('places',{places})
  })
  .catch(err => `An error occurred to finding the place: ${err}`);
})

router.get('/create', (req,res,next) => {
  res.render('create')
})

router.post('/create', (req,res,next) => {
  placeModel
  .findOne({name: req.body.name})
  .then(place => {
    if (place !== null) {
      res.render("places/create", {
        errorMessage: "That place is already taken"
      });
      return;
    }
    placeModel
      .create({
        name: req.body.name,
        type: req.body.type
      })
      .then(user => {
        console.log(`${user.name} was saved in the database`);
        res.redirect("/places");
      })
      .catch(err => `An error occurred to save the place: ${err}`);
  })
  .catch(err => `An error occured trying to find the place ${err}`);
})

router.post('/delete/:id', (req,res,next) => {
  console.log(req.params._id)
  placeModel
  .findOneAndDelete(req.params._id)
  .then(place => {
    res.redirect("/places");
  })
  .catch(err => `An error occured trying to delete the place ${err}`);
})

router.get('/update', (req,res,next) => {
  res.render('create')
})


module.exports = router;