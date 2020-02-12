const express = require('express');
const router  = express.Router();
const Place = require('../models/Place')


router.get('/', (req, res, next) => {
  Place.find()
  .then(allPlaces => {
    res.render('index', {store: allPlaces, layout: false, allPlaces: JSON.stringify(allPlaces)});
  })
});


router.get('/edit/place/:id/', (req, res, next) => {
    Place.findById(req.params.id)
        .then(place => {
            res.render('edit-place', {store: place, layout: false, place: JSON.stringify(place)});
        });
});

router.post('/edit/place/:id/', (req, res, next) => {
    if(req.body.type === "Coffee shop"){
        Place.findByIdAndUpdate(
            req.body.id,
            {
                name: req.body.name,
                type: req.body.type,
                location: {lat: req.body.latitude, lng: req.body.longitude},
                img: '/images/cafe.png',
                imgtitle: '/images/marker_coffee.png'
            },
            { new: true }
        )
            .then(() => {
                res.redirect('/');
            });
    } else {
        Place.findByIdAndUpdate(
            req.body.id,
            {
                name: req.body.name,
                type: req.body.type,
                location: {lat: req.body.latitude, lng: req.body.longitude},
                img: '/images/libro.jpg',
                imgtitle: '/images/marker_book.png'
            },
            { new: true }
        )
            .then(() => {
                res.redirect('/');
            });
    }
});

router.post('/delete/:id', (req, res, next) => {
    Place.findByIdAndRemove(req.params.id)
        .then(() => {
            res.redirect('/');
        });
});

// router.get('/add/place', (req, res, next) => {
//   res.render('add-place');
// });

router.post('/add/place', (req, res, next) => {
    if(req.body.type === "Coffee Shop"){
        Place.create({
            name: req.body.name,
            type: req.body.type,
            location: {lat: req.body.latitude, lng: req.body.longitude},
            img: '/images/cafe.png',
            imgtitle:  '/images/marker_coffee.png'
        })
           .then(() => {
                res.redirect('/');
            }) 
        } else {
            Place.create({
            name: req.body.name,
            type: req.body.type,
            location: {lat: req.body.latitude, lng: req.body.longitude},
            img: '/images/libro.jpg',
            imgtitle: '/images/marker_book.png'
        })
           .then(() => {
                res.redirect('/');
            }) 
        }
    });




module.exports = router;
