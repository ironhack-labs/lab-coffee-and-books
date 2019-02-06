const express = require('express');
const router  = express.Router();
const Place = require("../models/place")

/* GET home page */
router.get('/', (req, res, next) => {
  Place.find()
  .then(places => {
    res.render('index', {places})
  })  
  .catch(next)
});

router.post('/add', (req, res, next) => {
  Place.create({
    name: req.body.name,
    kind: req.body.kind,
    coordinates: [req.body.latitude, req.body.longitude]
  })  
  .then(() => res.redirect('/'))  
  .catch(next)
});

router.get('/update/:id', (req, res, next) => {
  Place.findOne({_id: req.params.id})
  .then(place => res.render('index', {placeToUpdate: place}))
})

router.get('/updatethis/:id', (req, res, next) => {
  Place.findOneAndUpdate({_id: req.params.id },{
    name: req.query.name,
    kind: req.query.kind,
    coordinates: [req.query.latitude, req.query.longitude]
  }) 
  .then(
    () => res.redirect("/")
  )    
  .catch(next)
});

router.get("/api/places", (req,res,next)=>{
  Place.find()
  .then(places => {
      res.json({
        places
      })
  })  
  .catch(next)
})

router.get('/delete/:id', (req, res, next) => {
  Place.deleteOne({_id: req.params.id}) 
  .then(
    () => res.redirect("/")
  )   
  .catch(next)
});
module.exports = router;
