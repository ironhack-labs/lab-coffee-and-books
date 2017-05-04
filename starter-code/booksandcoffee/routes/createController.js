const express = require('express');
const createController = express.Router();
const Place = require("../models/place");


createController.get('/create', (req, res, next)=>{
  res.render('create');
})

// name: String,
// description:{
//   type: String,
//   enum : ['coffeeshop', 'bookstore'],
// },
// coordinates: [Number, Number]  // index 0 is lat, index 1 is long

createController.post('/create', (req, res , next) =>{
  var name = req.body.name;
  var description = req.body.description;
  var coordinates = [Number(req.body.longitude), Number(req.body.latitude)];

  var newPlace = new Place({
    name,
    description,
    coordinates,
  })
 console.log(name, description, coordinates);
  // Place.findOne({name}, "name", (err, name)=>{
  //   if (name != null) {
  //     res.redirect('/create');
  //     return;
  //   }

  newPlace.save((err)=>{
    if(err){
      res.redirect('/create');
      console.log('cannot save');
    } else {
      console.log('saved');
      res.redirect('/');
    }
    })
  // })
});
module.exports = createController;
