var express = require('express');
var locationController = express.Router();
const Location = require('../models/Location');

locationController.get('/' , (req, res) => {
  Location.find({}, (err, response) => {
    res.render('index' , { response: response  });
  });

})

locationController.post('/wtf' , (req, res) => {
  const { name, kind  } = req.body;

  let location = {
    type: 'Point',
    coordinates: [ req.body.longitude, req.body.latitude ]
  };

  const newLocation = new Location({
    name,
    location: location,
    kind
  });

  newLocation.save((err) => {
      if (err) {
        res.send("MAL");
      } else {
        res.redirect('/')
      }
    });
})

module.exports = locationController;
