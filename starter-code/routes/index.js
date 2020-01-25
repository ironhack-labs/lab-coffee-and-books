const express = require('express');
const router  = express.Router();

// linked the model in your place.js file to this index
const Places = require('../models/place.js');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET input page */
router.get('/input', (req, res, next) => {
  res.render('input');
});


// Get information from input page
router.post('/input/edit', (req, res, next) => {
  //first instantiate a new object on the basis of your existing model
  const newPlace = new Places(req.body)
  newPlace.timestamp = Date.now();
  //then save the new object in your database
  newPlace
  .save()
  .then(newPlaceCreated => res.send(`A new place is created: ${newPlaceCreated}!`))
  .catch(err => console.log(`Error while creating a new place: ${err}`)); 

  // OR (equivalent to above)
  // const { name, typeSelector } = req.body
  // const newPlace = new Places({ name, typeSelector })

  // const { name } = req.body.`type selector`
  // placeSchema(name: this.name, type: this.`input/type`, timestamp: Date.now())
});


// Show everything
router.get(`/input/show-all`, (req, res, next) => {
  
  Places.find()
    .then(result => {
      res.render('show-all',{result});
    })
    .catch(err => console.log(`Error while creating a new place: ${err}`)); 
})



module.exports = router;