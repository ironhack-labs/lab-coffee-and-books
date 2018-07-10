const express = require('express');
const Place = require('../models/Place');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET home page */
router.get('/places-list', (req, res, next) => {
  Place.find().then( place => {
    res.render('places-list',{place, placeString:JSON.stringify(place)});
  });
});

router.post('/add', (req, res, next) => {
  const location = {
    type: "Point",
    coordinates: [Number(req.body.longitude), Number(req.body.latitude)]
  }
  console.log(Number(req.body.longitude));
  const { name, kind} = req.body;
  if(name=='') throw new Error("Name cannot be empty")
  if(kind!='CAFETERIA' && kind!='BOOK-STORE') throw new Error("wrong kind of store")
  if(req.body.longitude==''||req.body.latitude=='') throw new Error("location or longitude cannot be empty")

  Place.create({ name, kind, location})
    .then( celeb => {
    console.log("Place sucessfully added!");
    res.redirect('/places-list');
  })
  .catch(e=>{
    console.log(e.message);
    res.redirect('/');
  });
})

module.exports = router;
