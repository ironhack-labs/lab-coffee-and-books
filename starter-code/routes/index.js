const express = require('express');
const router  = express.Router();
const Places = require("../models/place")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/newPlace', (req, res, next) => {
  res.render('newPlace');
});

router.post('/newPlace', (req, res) => {
  // add the airport via mongoose
  Places
    .create({
      name: req.body.name,
      type: req.body.typeBusiness
    })
    .then(completedPlace => res.redirect("/"))
})

router.get('/getPlace', (req, res, next) => {
  res.render('getPlace');
});

router.post('/getPlace', (req, res, next) => {
  Places
    .find({name: req.body.name})
    .then(Places => res.json(Places))
});





module.exports = router;
