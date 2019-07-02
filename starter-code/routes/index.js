const express = require('express');
const router  = express.Router();
const Place = require("../models/place")


/* GET home page */
router.get('/', (req, res, next) => {
  Place.find().then(places=>{
    res.render("index",{places})
  }).catch((err)=>{
    console.log(err)
  });
});
router.get('/json', (req, res, next) => {
  Place.find().then(places=>{
    res.json({places})
  }).catch((err)=>{
    console.log(err)
  });
});
router.get('/detail/:id', (req, res, next) => {
  Place.findOne({_id: req.params.id}).then(place=>{
    res.render("detail", {place})
  }).catch((err)=>{
    console.log(err)
  });
  
});
router.get('/add', (req, res, next) => {
  res.render("add")
});
router.post('/add', (req, res, next) => {
  Place
    .create({
      name: req.body.name,
      type: req.body.type,
      location: { 
        type: 'Point', 
        coordinates: [+req.body.longitude, +req.body.latitude] 
      }
    })
    .then(placeNew => res.redirect("/"))
});
router.post('/:id/delete', (req, res, next) => {
  Place.findByIdAndRemove({_id: req.params.id})
    .then(placeDelete => res.redirect("/"))
    .catch((err)=>{
      console.log(err)
    });
});
router.get('/edit/:id', (req, res, next) => {
  Place.findOne({_id: req.params.id}).then(place=>{
    res.render("edit", {place})
  }).catch((err)=>{
    console.log(err)
  });
  
});
router.post("/edit-place", (req, res) => {
  Place
    .findByIdAndUpdate(req.body._id, {
      name: req.body.name,
      type: req.body.type,
      location: { 
        type: 'Point', 
        coordinates: [+req.body.longitude, +req.body.latitude] 
      }
      
    })
    .then(updatedPlace => {
      res.redirect("/")
    })
    .catch((err)=>{
      console.log(err)
    });
})


module.exports = router;
