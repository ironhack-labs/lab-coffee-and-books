const express = require('express');
const router  = express.Router();
const Place = require('../models/place')

//get places
router.get('/places', (req, res, next) => {
    Place
    .find()
    .then(response => {
      console.log(response);
      res.render('places', {response})
    })
    .catch(error => console.log(error))
  })
  
  //get new place
  router.get('/places-add', (req, res, next) => {
    res.render('places-add')
  })
  
  //create new place
  router.post('/places-add', (req, res, next) => {
    Place
    .create(req.body)
    .then(response => {
      res.redirect('/places')
    })
    .catch(error => console.log(error))
  })
  
  //delete place
  router.get('/places-delete/:id', (req, res, next) => {
    Place
    .findByIdAndRemove(req.params.id)
    .then(response => {
      res.redirect('/places')
    })
    .catch(error => console.log(error))
  })
  
  //update place
  router.get('/places-edit/:id', (req, res, next) => {
    Place
    .findById(req.params.id)
    .then(response => {
      res.render('places-edit', {response})
    })
    .catch(error => console.log(error))
  })
  
  router.post('/places-edit/:id', (req, res, next) => {
    Place
    .findByIdAndUpdate(req.params.id, req.body)
    .then(response => {
      res.redirect('/places')
    })
    .catch(error => console.log(error))
  })


  // const locations = {
  //   type: 'Point',
  //   coordinates: [req.body.longitude, req.body.latitude]
  // }

  

  // const startMap = () => {
  //   // const directionsService = new google.maps.DirectionsService;
  //   // const directionsDisplay = new google.maps.DirectionsRenderer;

  //   
    
  //   const map = new google.maps.Map(document.getElementById('map'),{
  //       center: ironhack,
  //       zoom: 8
  //   })
    //      marker = new google.maps.Marker({
    //       position: ironCDMX,
    //       map: map,
    //  });

    //  const requestRoute = {
    //      origin: cityRent,
    //      destination: ironCDMX,
    //      travelMode: 'WALKING'
    //  }

    //  directionsService.route(requestRoute, (response, status) => {
    //      directionsDisplay.setDirections(response);
    //  })

    //  directionsDisplay.setMap(map);
  // }
  
  // startMap();

  module.exports = router;