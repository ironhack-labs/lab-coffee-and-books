'use strict'

const express = require('express');
const index = express.Router();

/* GET home page. */
index.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

index.get('/create', (req, res, next) => {
  res.render('create');
});

index.post('/create', (req, res, next) => {
  const name = req.body.name;
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;
  
  if (!name || !latitude || !longitude) {
      const data = {
          name,
          latitude,
          longitude, 
          message: 'all fields are mandatory'
      };
  return res.render('create', data)
  }

  const data = {
      name, 
      location: {
          type: 'Point',
          coordinates: [latitude, longitude]
      }
  }

  // const restaurant = new Restaurant(data);
  restaurant.save((err, result) => {
      console.log(result);
      if (err) {
          next(err);
      }
      res.redirect('/');
  });
});



// const data = {
    //   name: '',
    //   type: '',
    //   latitude: '',
    //   longitude: ''
    // }


module.exports = index;
