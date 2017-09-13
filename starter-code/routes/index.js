var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/search', (req, res, next) => {
    // Get Params from POST
    let location = {
      type: 'Point',
      coordinates: [req.body.longitude, req.body.latitude]
    };
  
    // Create a new Restaurant with location
      const newShop = {
        name:        req.body.name,
        description: req.body.description,
        location:    location
      };
  
    // Save the restaurant to the Database
    newShop.save((error) => {
      if (error) { console.log(error) }
      else {
        res.redirect('/');
        console.log('nope');
      }
    })
  });

module.exports = router;
