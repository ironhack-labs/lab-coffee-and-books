const express = require('express');
const router  = express.Router();
const Place = require('../model/Place');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


//GET places page 
router.get('/places', (req, res, next) => {
  Place.
    find()
    .then( response => {
      console.log(response)
      res.render('places', {data: response});
    })
    .catch( error => console.log(error))
});

//GET single place page
router.get('/place/:id', (req, res, next) => {
  
  let { id } = req.params;

  Place.
    findById(id)
    .then( response => {
      console.log(response)
      res.render('single-place', {data: response});
    })
    .catch( error => console.log(error))
});

//GET places page 
router.get('/places/new', (req, res, next) => {
  Place.
    find()
    .then( response => {
      res.render('new-place');
    })
    .catch( error => console.log(error))
});

//GET places page 
router.post('/places/new', (req, res, next) => {

  let { name, type, longitude, latitude } = req.body;

  let coordinates = {
    longitude,
    latitude
  }

  Place.
    create({
      name,
      type,
      coordinates
    })
    .then( response => {
      res.redirect('/places');
    })
    .catch( error => console.log(error))
});

// DELETE request route
router.get('/places/delete/:id', (req, res) => {
  let { id } = req.params;

  console.log(id);

  Place.findByIdAndRemove(id)
    .then( response => {
      console.log(response);
      res.redirect('/places');
    })
    .catch( error => console.log(error))
})

//EDIT  GET route

router.get('/places/edit/:id', (req, res) => {
  let { id } = req.params;

  Place.findById(id)
    .then( response => {
      console.log(response);
      res.render('edit-place', { data: response });
    })
    .catch( error => {
      console.log(error);
    })
});

//EDIT  POST route

router.post('/places/edit/:id', (req, res) => {
  let { id } = req.params;
  let { name, type } = req.body;
  console.log(req.body);

  Place.findByIdAndUpdate(id, { name, type })
    .then( response => {
      console.log(response);
      res.redirect('/places')
    })
    .catch( error => {
      console.log(error);
    })
})


// API for places
router.get('/places/api', (req, res) => {
  Place.find({})
  .then( response => {
    console.log(response);
    res.json(response);
  })
  .catch( error => console.log(error));
});

module.exports = router;
