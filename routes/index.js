const express = require('express');
const router  = express.Router();
const Place = require('../models/Place')


router.get('/', (req, res, next) => {
  Place.find().then( places => {
    console.log(places);
    res.render('index', {places:JSON.stringify(places)})
  })
});

router.get('/places', (req, res, next) => {
  Place.find({}).sort({updated_at:-1}).then( places => {
    res.render('place/list', {places});
  })
});


router.get('/places/add', (req, res, next) => {
  res.render('place/add');
});

router.post('/places/new', (req, res, next) => {
  const {name, kindOfPlace, lat, lng} = req.body;
  new Place({name, kindOfPlace, location:{type:"", coordinates:[lat, lng]}})
  .save().then( place => {
    console.log("Place successfully added!");
    res.redirect('/places');
  });
});

router.get('/places/edit/:id', (req,res) => {
  Place.findById(req.params.id).then(place => {
    res.render('place/edit',{place});;
  })
})

router.post('/places/edit/:id', (req,res) => {
  const {name, kindOfPlace, location} = req.body;
  Place.findByIdAndUpdate(req.params.id,{name, kindOfPlace, location})
      .then( place => {
        res.redirect('/places')
      })
})

router.get('/places/delete/:id',(req,res) => {
  Place.findByIdAndRemove(req.params.id, () => res.redirect('/places'));
})

router.get('/places/:id', (req, res, next) => {
  Place.findById(req.params.id).then( book => {

      console.log(place);

      res.render('place/detail', {place});
    })
  });



module.exports = router;