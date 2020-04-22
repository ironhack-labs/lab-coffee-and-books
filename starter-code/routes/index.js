const express = require('express');
const router  = express.Router();

/* GET home page */
// router.get('/', (req, res, next) => {
//   res.render('index');
// });

const Places = require('../model/place') //Aqui hay fallo, pero dónde?

router.get('/', (req, res, next) => {
  Places.find()
    .then((allPlaces) => res.render('index', { allPlaces }))
    .catch(err => {
      console.log(`An error ocurred: ${err}`)
      next()
    })
})



module.exports = router;
