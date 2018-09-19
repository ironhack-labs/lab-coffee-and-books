/* GET home page */


const express = require('express');
const router  = express.Router();
const Coffee = require('../models/coffee');


router.get('/', (req, res, next) => {
  res.render('maps');
});

router.get('/maps', (req, res, next) => {
  Coffee.find((error, coffees) => {
    if (error) { next(error); }
    else {
      res.render('maps', { coffees });
    }
  })
})

router.get('/:id/delete',(req,res,next)=>{
  const {id} = req.params
  res.render('maps')
})

router.post('/:id/delete', (req,res,next)=>{
  const {id} = req.params
  Coffee.findByIdAndRemove(id)
    .then(user=>{
      res.redirect('/maps')
    }).catch(e=>next(e))
})

router.post('/maps', (req, res, next) => {
  // Get Params from POST
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  // Create a new Restaurant with location
    const newCoffee = {
      name:        req.body.name,
      description: req.body.description,
      location:    location
    };

  // Save the restaurant to the Database
  Coffee.create(newCoffee).then( newCoffee => {
    res.redirect('/maps');
  }).catch(e=> next(e));
});

module.exports = router;
