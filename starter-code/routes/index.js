const express = require('express');
const router  = express.Router();
const Places = require('../models/place');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/list', (req,res) => {
  Places.find().then(places =>{
    res.render('list',{places});
  }) 
});

router.get('/detail/:id', (req,res) => {
  Places.findById(req.params.id).then(place => {
    res.render('detail', place);
  }) 
});

router.get('/create', (req,res) => {
  res.render('create');
});

router.post('/create', (req,res) => {
  Places.create({
    name: req.body.name,
    type: req.body.type,
    location : {
      type: 'Point',
      coordinates: [+req.body.lng, +req.body.lat]
      }

  }).then(()=> res.redirect('/list'));
});

router.get('/delete/:id', (req,res) => {
  Places.findByIdAndDelete(req.params.id).then(()=>res.redirect('/list'))
});

router.get('/update/:id', (req,res) => {
  Places.findById(req.params.id).then(place => {
    res.render('update', place);
  }) 
});

router.post('/update', (req,res) => {
  Places.find({name:req.body.name}).then(places => {
    if(places.length <= 0 || `${places[0]._id}` === req.body.id){
      Places.findByIdAndUpdate(req.body.id,{
        name:req.body.name,
        type:req.body.type,
        location : {
          type: 'Point',
          coordinates: [+req.body.lng, +req.body.lat]
          }
        }).then(()=> res.redirect("/list"))
    }
  });
  res.redirect("/list")
});

router.get('/placesData', (req,res) => {
  Places.find().then(payload => res.json(payload));
})

module.exports = router;
