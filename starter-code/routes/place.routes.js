const express = require('express');
const router  = express.Router();

const place = require('../models/Place.model')

// Place list 
router.get("/place", (req, res, next) => {

    place
      .find()
      .select('title')
      .then(place => res.render('place/list', { place }))
      .catch(err => console.log(err))

  })
  
//add new Place

router.get('/place/create', (req, res, next) => {
   
   res.render('place/create-form')
});
  
router.post('/place/create', (req, res, next) => {
    
    const {name, } = req.body
  
    place
      .create ({name,})
      .then (()=> res.redirect ('/'))
      .catch(err => console.log (err))
  
});

//Edit info 

router.get('/place/:id/edit', (req, res, next) => {
    
    const {id} = req.params
  
    place
  
      .findById(id)
      .then(place=> res.render('place/update-form', place))
      .catch(err => console.log (err))
  
});
  
router.post('/place/:id/edit', (req, res, next) => {
  
    const {id} = req.params
    const { name } = req.body
    
  
  
    place
      .findByIdAndUpdate(id, {name }, {new: true})
      .then(() => res.redirect('/'))
      .catch(err => console.log (err))
      
});

router.post('/place/:id/delete', (req, res, next) => {

    const {id}= req.params
  
  
    DroneModel
      .findByIdAndDelete (id)
      .then (()=> res.redirect('/'))
      .then(err=> console.log(err))
}); 
  
  
module.exports = router;
