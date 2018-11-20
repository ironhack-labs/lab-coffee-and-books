const express = require('express');
const router  = express.Router();
const Place = require('../models/place');


/* GET home page */
router.get('/list', (req, res, next) => {
  console.log("eeeooo")
  Place.find().then( coffiebar => {
    res.render('coffiebar/list', {
      coffiebar,
      restStr: JSON.stringify(coffiebar)
    });
  }).catch(e=> next(e));
});

router.post('/list', (req, res, next) => {

  let coffie = {
    name: req.body.name,
    type: req.body.type,
    coordinates: {
      lat: (req.body.latitude),
      lon: (req.body.longitude)
    }
  }
  
  console.log(coffie);
  Place.create(coffie).then( coffie => {
    res.redirect('/coffiebar/list');
  }).catch(e=> next(e));
});

router.get("/delete/:id", (req, res, next) => {
  Place.deleteOne({_id:req.params.id}).then(()=>{
    res.redirect('/coffiebar/list');
  })
})



module.exports = router;
