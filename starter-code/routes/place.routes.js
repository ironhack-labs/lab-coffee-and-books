const express = require('express');
const router = express.Router();
const Coffeeshops = require('../models/place.models');

//mostrar BD
router.get('/', (req, res) => {
  Coffeeshops.find()
    .then(allCoffee => res.render('booksCoffee/index', {
      celebrities: allCoffee,
      title: 'Coffeeshops'
    }))
    .catch(err => console.log("Error consultando la BBDD: ", err))
});


//crear y guardar
router.get('/new', (req, res) => res.render('booksCoffee/new'))

router.post('/new', (req, res) => {

  const { name, type } = req.body

  Coffeeshops.create({ name, type })
    .then(x => res.redirect('booksCoffee/show'))


})

















module.exports = router;