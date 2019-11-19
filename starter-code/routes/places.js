const express = require('express');
const router  = express.Router();

// Db model
const Places = require(`../models/place`)

// Read
router.get('/', (req, res) => {
    Places
    .find()
    .then(allPlaces =>{
        res.render('places/index', {allPlaces});
    })
    .catch(err => console.log(`There was an error reading the db: ${err}`))
});

// Create
router.get('/new', (req, res) => {
  res.render('places/new')
});


router.post('/', (req, res) => {
let {name, type} = req.body
const newPlace = {name, type}

res.json(newPlace)
})


module.exports = router;
