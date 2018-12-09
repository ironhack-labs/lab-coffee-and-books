const express = require('express');
const router  = express.Router();
const Place = require('../models/Place');

/* GET home page */
router.get('/', (req, res, next) => {
  Place.find()
      .then(places => {
          res.render('index', {places});
      });
});

router.get('/new', (req, res) => {
  res.render('new_place');
});

router.post('/new', (req,res) => {
    const {name, type, lat, lng} = req.body;
    let coordinates = [];
    coordinates.push(lng);
    coordinates.push(lat);


    let place = {
        name,
        type,
        location: {
            coordinates
        }
    };

    Place.create(place)
        .then(()=>{
            res.redirect('/');
        })
});

router.get('/:id', (req, res) => {
    Place.findById(req.params.id)
        .then(place => {
            res.render('detail', {place})
        });
});

router.post(`/delete`, (req,res) => {
    Place
        .findByIdAndRemove(req.body.id)
        .then(() => res.redirect('/'))
    ;
});

module.exports = router;
