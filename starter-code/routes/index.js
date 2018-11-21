const express = require('express');
const router  = express.Router();
const Place = require('../models/Place');

/* GET home page */
router.get('/', (req, res, next) => {
  Place.find()
  .then( places => {
    res.render('place')})
    .catch(err=> next(err));
}); 
router.get('/new', (req, res, next) => {
  res.render('new');
});

router.post('/new', (req, res, next) => {

  const {name,type,timestamp,coordinates}=req.body;
  const newPlace=new Place({name,type,timestamp,coordinates})
  newPlace.save()
  .then(()=>{
    res.render()
  })
    
  Place.create(place).then( place => {
    res.redirect('/place');
  }).catch(e=> next(e));
});

module.exports = router;
