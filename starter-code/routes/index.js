const express = require('express');
const router  = express.Router();

const Stores = require('../models/store');

/* GET home page */
router.get('/', (req, res, next) => {
  Stores.find().then( stores => {
    res.render('index',{stores:JSON.stringify(stores)});
  })
});

router.get('/list', (req, res, next) => {
  console.log("list");
  Stores.find()
  .then(stores => {
      res.render('list', {stores});
  })
  .catch(err => next())
});

router.get('/delete/:id', (req, res, next) => {
  Stores.findByIdAndRemove(req.params.id)
  .then(() => {
      res.redirect('/list');    
  })
  .catch(err => {
      console.log(err);
      res.send('Error deleting user');
  });
})

router.post('/addPlace', (req, res, next) => {
  // Get Params from POST
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  // Create a new Restaurant with location
    const newStore = new Stores({
      name: req.body.name,
      description: req.body.description,
      location: location
    });

  // Save the restaurant to the Database
  console.log(newStore);
  newStore.save()
  .then(() => {
      res.redirect('/');    
  })
  .catch(err => next())
});

module.exports = router;
