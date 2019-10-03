const express = require('express');
const router = express.Router();
const Place = require('../models/place')

/* GET home page */
router.get('/', (req, res, next) => {
  Place
  .find().then(allFromDb => {
    console.log(allFromDb);
    res.render('index',{allFromDb})

  })
  .catch(err => console.log(err));
});

router.get('/delete/:id', (req, res, next)=> {
  const {id} = req.params
  Place.findByIdAndDelete(id)
  .then(res.redirect('/'))
  .catch(err => console.log(err));
})

router.get('/update/:id', (req, res, next)=> {
  console.log("entrou");
  const {id} = req.params;
  res.render("update", {id});
})

router.post('/update/:id', (req, res, next)=> {
  const {id} = req.params
  let { name, tipo, latitude, longitude } = req.body;
  let local = {
    type: "Point",
    coordinates: [longitude, latitude]
  }
  Place.findByIdAndUpdate(id, { name, tipo, local })
  .then(res.redirect("/"))
  .catch(err => {console.log(err)})
})

router.get('/create', (req, res, next) => {
  res.render('create')
})

router.post('/create', (req, res, next) => {
  let { name, tipo, latitude, longitude } = req.body;
  let local = {
    type: "Point",
    coordinates: [longitude, latitude]
  }
  Place.create({ name, tipo, local })
    .then(res.redirect('/'))
    .catch(err => console.log(err));
})

router.get('/display', (req, res, next) => {
  Place
    .find().then(allFromDb => {
      console.log(allFromDb);
      res.send(allFromDb)

    })
    .catch(err => console.log(err));
})

router.get('/map', (req, res, next) => {
  Place
  .find()
  .then(dataFromDb => {
    
  })
});

module.exports = router;