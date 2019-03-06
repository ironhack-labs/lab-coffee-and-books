const express = require('express');
const router  = express.Router();
const Place = require('../models/place')

/* GET home page */
router.get('/', (req, res, next) => {

  Place.find()
  .then(places => {
    res.render('index', {result: JSON.stringify(places)});
  })
  .catch(err => {
    console.log(err)
  })
  
});

router.post('/places', (req, res, next) => {

  const {name, description, latitude, longitude} = req.body

  let location = {
    type: "Point",
    coordinates: [longitude, latitude]
  }

  Place.find({"name":name})
    
    .then(place => {
      console.log(place)
      if(place[0]){
        Place.updateOne({"name":place[0].name}, { $set: {name, description, location}})
        .then(()    => {
          updated = true
          res.redirect('/')
          console.log("no se piro")
        })
        .catch(err  => next(err))
      }else{
        const newPlace = new Place({
          name,
          description,
          location
        })
      
        newPlace.save(err => {
          if (err) {
            next(err)
          } else {
            res.redirect('/')
          }
        })
      }})
    .catch(err  => next(err))


})


router.post('/places/delete',(req,res,next)=>{
  const {name} = req.body

  Place.deleteOne({"name":name})
    .then(()    => {
    res.redirect('/')
    })
    .catch(next)
})

module.exports = router;
