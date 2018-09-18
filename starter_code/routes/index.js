const express = require('express');
const router  = express.Router();
const BookAndCoffe = require('../models/bookAndCoffe');

/* GET home page */
// router.get('/', (req, res, next) => {
//   res.render('index');
// });

router.get('/', (req, res, next) => {
  BookAndCoffe.find().then( bookcoffes => {
    res.render('places/list', {
      bookcoffes,
      restStr: JSON.stringify(bookcoffes)
    });
  }).catch(e=> next(e));
});

router.get('/new', (req, res, next) => {
  res.render('places/new');
})

router.post('/new', (req, res, next) => {

  let places = {
    name: req.body.name,
    category: req.body.category,
    location: {
      type: 'Point',
      coordinates: [Number(req.body.latitude), Number(req.body.longitude)]
    }
  }
  console.log(places);
  BookAndCoffe.create(places).then( places => {
    res.redirect('/places');
  }).catch(e=> next(e));
});





module.exports = router;
